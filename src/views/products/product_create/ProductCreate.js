import React, { useContext, useState } from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { store } from 'react-notifications-component'
import { danger, success } from '../../../helpers/notifications'
import { useHistory } from 'react-router-dom'
import { createProduct } from '../../../api/api_product'
import { tryParseInt } from '../../../helpers/utils'
import { UserContext } from '../../../helpers/user'
import { createNotification } from '../../../api/api_notification'
import { Services } from '../../../helpers/notification_types'

const ProductSavingsCreate = () => {
  const { userState } = useContext(UserContext)

  const history = useHistory()
  const [product, setProduct] = useState({
    tipe: 'savings',
    name: '',
    description: '',
    balance_start: 0,
    percent_rate: 0,
    rate_type: 'fix',
    limit_min: 0,
    limit_max: 0,
  })

  function handleSave() {
    console.log(product)
    createProduct(product).then((data) => {
      if (data.ok) {
        createNotification(
          userState.user.wa_number,
          Services.productCreate,
          product.name + ' (' + product.tipe + ')',
        ).then((resp) => {
          console.log('Notification created: ' + resp.id)
        })
        store.addNotification(success('Product created'))
        history.push('/products/savings')
      } else {
        store.addNotification(danger(data.message))
      }
    })
  }

  return (
    <CContainer className="d-flex justify-content-center">
      <CForm>
        <CRow>
          <CCol>
            <div className="mb-2">
              <CFormLabel htmlFor="type">Type of Product</CFormLabel>
              <CFormSelect
                id="type"
                value={product.tipe}
                onChange={(e) => {
                  setProduct((product) => ({ ...product, tipe: e.target.value }))
                }}
              >
                <option value="savings">Savings</option>
                <option value="credits">Credits</option>
              </CFormSelect>
            </div>

            <div className="mb-2">
              <CFormLabel htmlFor="name">Products Name</CFormLabel>
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
              <CFormLabel htmlFor="description">Description</CFormLabel>
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

            <h5>Balance</h5>
            <div className="ms-4 mb-2">
              <CFormLabel htmlFor="start">Start</CFormLabel>
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

            <h5>Rate</h5>
            <CRow className="ms-3 mb-3">
              <CCol xs={4}>
                <CFormLabel htmlFor="percent_rate">Percentage</CFormLabel>
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
                <CFormLabel htmlFor="rate_type">Type</CFormLabel>
                <CFormSelect
                  id="rate_type"
                  value={product.rate_type}
                  onChange={(e) => {
                    setProduct((product) => ({ ...product, rate_type: e.target.value }))
                  }}
                >
                  <option value="fix">Fix</option>
                  <option value="efektif">Efektif</option>
                  <option value="syaria">Syaria</option>
                </CFormSelect>
              </CCol>
            </CRow>

            <h5>Requirements</h5>
            <CRow className="mb-3 ms-3">
              <CCol>
                <CFormLabel htmlFor="limit_min">Limit Min</CFormLabel>
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
                <CFormLabel htmlFor="limit_max">Limit Max</CFormLabel>
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
          </CCol>
        </CRow>
        <CRow>
          <CCol className="d-flex justify-content-center mt-3">
            <CButton color="primary" onClick={handleSave}>
              Save
            </CButton>
          </CCol>
        </CRow>
      </CForm>
    </CContainer>
  )
}

export default ProductSavingsCreate
