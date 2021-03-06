import React, { useContext, useEffect, useState } from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CImage,
  CRow,
} from '@coreui/react'
import Loader from '../../../components/Loader'
import { store } from 'react-notifications-component'
import { danger, success } from '../../../helpers/notifications'
import { useParams } from 'react-router-dom'
import { getProduct, updateProduct } from '../../../api/api_product'
import { tryParseInt } from '../../../helpers/utils'
import { createNotification } from '../../../api/api_notification'
import { Services } from '../../../helpers/notification_types'
import { UserContext } from '../../../helpers/user'
import { useTranslation } from 'react-i18next'

const ProductDetails = () => {
  const { t } = useTranslation()
  const { userState } = useContext(UserContext)
  const { id } = useParams()
  const [product, setProduct] = useState()
  const [hasLoaded, setHasLoaded] = useState()

  useEffect(
    () => {
      getProduct(id).then((data) => {
        if (data.ok) {
          setProduct(data.data)
          setHasLoaded(true)
        } else {
          if (data.message) {
            console.log(data)
            store.addNotification(danger(data.message))
          } else {
            console.log(data)
            store.addNotification(danger(data.error))
          }
        }
      })
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  function handleEdit() {
    console.log(product)
    updateProduct(product).then((data) => {
      console.log(data)
      if (data.ok) {
        createNotification(
          userState.user.wa_number,
          Services.productCreate,
          product.name + ' (' + product.tipe + ')',
        ).then((resp) => {
          console.log('Notification created: ' + resp.id)
        })
        store.addNotification(success(t('notifications.product_update')))
      } else {
        store.addNotification(danger(data.message))
      }
    })
  }

  return hasLoaded ? (
    <CForm>
      <CRow xs={{ cols: 1 }} md={{ cols: 2 }} className="mb-4">
        <CCol>
          <CFormLabel htmlFor="type">{t('product_type')}</CFormLabel>
          <CFormSelect id="type" value={product.tipe} disabled>
            <option value="savings">{t('savings')}</option>
            <option value="credits">{t('credits')}</option>
          </CFormSelect>
          <CContainer fluid className="d-flex justify-content-center mb-5">
            <CImage
              thumbnail
              rounded
              src={'https://via.placeholder.com/550x390.png?text=' + product.name}
              width={500}
              height={500}
              className="mt-5"
            />
          </CContainer>
        </CCol>
        <CCol>
          <div className="mb-2">
            <CFormLabel htmlFor="name">{t('name')}</CFormLabel>
            <CFormInput
              type="text"
              id="name"
              value={product.name}
              onChange={(e) => {
                setProduct((product) => ({ ...product, name: e.target.value }))
              }}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="description">{t('description')}</CFormLabel>
            <CFormTextarea
              type="text"
              id="description"
              rows="3"
              value={product.description}
              onChange={(e) => {
                setProduct((product) => ({ ...product, description: e.target.value }))
              }}
            />
          </div>

          <h5>{t('balance')}</h5>
          <div className="ms-4 mb-2">
            <CFormLabel htmlFor="start">{t('start')}</CFormLabel>
            <CFormInput
              type="number"
              id="start"
              value={product.balance_start}
              onChange={(e) => {
                setProduct((product) => ({
                  ...product,
                  balance_start: tryParseInt(e.target.value),
                }))
              }}
            />
          </div>
          <div className="ms-4 mb-2">
            <CFormLabel htmlFor="min">{t('min')}</CFormLabel>
            <CFormInput type="number" id="min" />
          </div>

          <h5>{t('rate')}</h5>
          <CRow className="ms-3 mb-3">
            <CCol xs={4}>
              <CFormLabel htmlFor="percent_rate">{t('percentage')}</CFormLabel>
              <CFormInput
                type="number"
                id="percent_rate"
                value={product.percent_rate}
                onChange={(e) => {
                  setProduct((product) => ({
                    ...product,
                    percent_rate: tryParseInt(e.target.value),
                  }))
                }}
              />
            </CCol>
            <CCol>
              <CFormLabel htmlFor="rate_type">{t('type')}</CFormLabel>
              <CFormSelect
                id="rate_type"
                defaultValue={product.rate_type}
                onChange={(e) => {
                  setProduct((product) => ({
                    ...product,
                    rate_type: e.target.value,
                  }))
                }}
              >
                <option value="fix">{t('fix')}</option>
                <option value="efektif">{t('effective')}</option>
                <option value="syaria">{t('syaria')}</option>
              </CFormSelect>
            </CCol>
          </CRow>

          <h5>{t('requirements')}</h5>
          <CRow className="mb-3 ms-3">
            <CCol>
              <CFormLabel htmlFor="limit_min">{t('limit_min')}</CFormLabel>
              <CFormInput
                type="number"
                id="limit_min"
                value={product.limit_min}
                onChange={(e) => {
                  setProduct((product) => ({
                    ...product,
                    limit_min: tryParseInt(e.target.value),
                  }))
                }}
              />
            </CCol>
            <CCol>
              <CFormLabel htmlFor="limit_max">{t('limit_max')}</CFormLabel>
              <CFormInput
                type="number"
                id="limit_max"
                value={product.limit_max}
                onChange={(e) => {
                  setProduct((product) => ({
                    ...product,
                    limit_max: tryParseInt(e.target.value),
                  }))
                }}
              />
            </CCol>
          </CRow>

          <CFormLabel htmlFor="status">{t('status')}</CFormLabel>
          <CFormSelect
            id="status"
            value={product.active}
            onChange={(e) => {
              setProduct((product) => ({
                ...product,
                active: e.target.value === 'true',
              }))
            }}
          >
            <option value="true">{t('active')}</option>
            <option value="false">{t('inactive')}</option>
          </CFormSelect>
        </CCol>
      </CRow>
      <CRow xs={{ cols: 1 }} md={{ cols: 2 }}>
        <CCol className="d-grid d-md-flex justify-content-md-start mb-3">
          <CButton color="primary" variant="outline">
            {t('register_nasabah_to_product')}
          </CButton>
        </CCol>
        <CCol className="d-grid d-md-flex justify-content-md-end mb-3" onClick={handleEdit}>
          <CButton color="primary">{t('edit')}</CButton>
        </CCol>
      </CRow>
    </CForm>
  ) : (
    Loader()
  )
}

export default ProductDetails
