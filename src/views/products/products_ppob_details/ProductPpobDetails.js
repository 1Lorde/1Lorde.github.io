import React, { useContext, useEffect, useState } from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CImage,
  CRow,
} from '@coreui/react'
import { useHistory, useParams } from 'react-router-dom'
import Loader from '../../../components/Loader'
import { store } from 'react-notifications-component'
import { danger, success } from '../../../helpers/notifications'
import { getService, getServicesMargin, updateService } from '../../../api/api_service'
import { tryParseInt } from '../../../helpers/utils'
import { createNotification } from '../../../api/api_notification'
import { Services } from '../../../helpers/notification_types'
import { UserContext } from '../../../helpers/user'
import RestrictedComponent from '../../../routes/RestrictedComponent'
import { Roles } from '../../../helpers/role'
import { useTranslation } from 'react-i18next'

const ProductPpobDetails = () => {
  const { t } = useTranslation()
  const { userState } = useContext(UserContext)
  const history = useHistory()
  const { id } = useParams()
  const [service, setService] = useState({})
  const [hasLoaded, setHasLoaded] = useState(false)
  const [validated, setValidated] = useState(false)
  const [servicesMargin, setServicesMargin] = useState({})

  const handleEdit = (event) => {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    if (form.checkValidity()) {
      console.log(service)
      if (service.margin_by === 'all') {
        service.nominal = servicesMargin.nominal
      }
      updateService(id, service).then((data) => {
        if (data.ok) {
          console.log(data)
          createNotification(userState.user.wa_number, Services.ppobEdit, service.name).then(
            (resp) => {
              console.log('Notification created: ' + resp.id)
            },
          )
          store.addNotification(success(t('notifications.ppob_update')))
          history.push('/products/ppob')
        } else {
          console.log(data)
          store.addNotification(danger(data.error))
        }
      })
    }
  }

  useEffect(
    () => {
      getService(id).then((data) => {
        if (data.ok) {
          let service = data.data
          service['vendor_slug'] = service['vendor_slug_selected']
          delete service['vendor_slug_selected']
          setService(service)
          if (!hasLoaded && userState.user.role !== 'account-officer') {
            getServicesMargin().then((data) => {
              if (data.ok === true) {
                console.log(data)
                setServicesMargin(data.service_margin)
                setHasLoaded(true)
              }
            })
          } else {
            setHasLoaded(true)
          }
        } else {
          if (data.message) {
            console.log(data)
            store.addNotification(success(data.message))
          } else {
            console.log(data)
            store.addNotification(danger(data.error))
          }
        }
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  return hasLoaded ? (
    <CForm noValidate validated={validated} onSubmit={handleEdit}>
      <CRow xs={{ cols: 1 }} md={{ cols: 2 }} className="mb-4">
        <CCol>
          <CFormLabel htmlFor="category">{t('category')}</CFormLabel>
          <CFormSelect
            id="category"
            defaultValue={service.category}
            onChange={(e) => {
              setService((service) => ({ ...service, category: e.target.value }))
            }}
          >
            <option value="postpaid">{t('postpaid')}</option>
            <option value="prepaid">{t('prepaid')}</option>
          </CFormSelect>
          <CContainer fluid className="d-flex justify-content-center mt-4 mb-3">
            <CImage
              thumbnail
              rounded
              src={'https://via.placeholder.com/550x390.png?text=' + service.name}
              width={500}
              height={500}
            />
          </CContainer>
        </CCol>
        <CCol>
          <div className="mb-2">
            <CFormLabel htmlFor="name">{t('name')}</CFormLabel>
            <CFormInput
              type="text"
              id="name"
              required
              defaultValue={service.name}
              onChange={(e) => {
                setService((service) => ({ ...service, name: e.target.value }))
              }}
            />
          </div>
          <div className="mb-2">
            <CFormLabel htmlFor="slug">{t('slug')}</CFormLabel>
            <CFormInput
              type="text"
              id="slug"
              required
              defaultValue={service.slug}
              onChange={(e) => {
                setService((service) => ({ ...service, slug: e.target.value }))
              }}
            />
          </div>
          <div className="mb-2">
            <CFormLabel htmlFor="description">{t('description')}</CFormLabel>
            <CFormTextarea
              type="text"
              id="description"
              rows="3"
              required
              defaultValue={service.desc}
              onChange={(e) => {
                setService((service) => ({ ...service, desc: e.target.value }))
              }}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="vendor">{t('vendor')}</CFormLabel>
            <CFormSelect
              id="vendor"
              defaultValue={service.vendor_slug}
              onChange={(e) => {
                setService((service) => ({ ...service, vendor_slug: e.target.value }))
              }}
            >
              {service.vendors.map((vendor, key) => {
                return (
                  <option key={key} value={vendor}>
                    {vendor.toUpperCase()}
                  </option>
                )
              })}
            </CFormSelect>
          </div>
          <h5>{t('margin_by')}</h5>
          <CRow xs={{ cols: 1 }} md={{ cols: 2 }} className="mb-3 mt-3 align-items-center">
            <CCol>
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="inlineCheckbox1"
                value="all"
                label={t('all')}
                defaultChecked={service.margin_by === 'all'}
                onChange={() => {
                  setService((service) => ({ ...service, margin_by: 'all' }))
                }}
              />
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="inlineCheckbox2"
                value="percent"
                label={t('percent')}
                defaultChecked={service.margin_by === 'percent'}
                onChange={() => {
                  setService((service) => ({ ...service, margin_by: 'percent' }))
                }}
              />
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="inlineCheckbox3"
                value="fix"
                label={t('fix')}
                defaultChecked={service.margin_by === 'fix_cost'}
                onChange={() => {
                  setService((service) => ({ ...service, margin_by: 'fix_cost' }))
                }}
              />
            </CCol>
            <CCol>
              <CFormInput
                type="number"
                id="nominal"
                required
                max={service.margin_by === 'percent' ? 100 : 100000}
                value={service.margin_by === 'all' ? '' : service.nominal}
                disabled={service.margin_by === 'all'}
                onChange={(e) => {
                  setService((service) => ({ ...service, nominal: tryParseInt(e.target.value) }))
                }}
              />
            </CCol>
          </CRow>
          <CRow className="mb-3 align-items-center">
            <CCol xs={5}>{t('retail_price')}</CCol>
            <CCol>
              <CFormInput type="text" id="retail_price" />
            </CCol>
          </CRow>
          <CFormLabel htmlFor="status">{t('status')}</CFormLabel>
          <CFormSelect
            id="status"
            defaultValue={service.active}
            onChange={(e) => {
              setService((service) => ({
                ...service,
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
        <CCol className="d-grid d-md-flex justify-content-md-start mb-2">
          <RestrictedComponent
            allowedRoles={[
              Roles['koperasi-owner'],
              Roles['credit-analyst'],
              Roles['account-officer'],
            ]}
          >
            <CButton
              color="primary"
              variant="outline"
              onClick={() => {
                history.push('/products/ppob/' + id + '/buy')
              }}
            >
              {t('buy')}
            </CButton>
          </RestrictedComponent>
        </CCol>
        <CCol className="d-grid d-md-flex justify-content-md-end mb-3">
          <RestrictedComponent
            allowedRoles={[
              Roles['koperasi-owner'],
              Roles['credit-analyst'],
              Roles['account-officer'],
            ]}
          >
            <CButton color="primary" type="submit">
              {t('edit')}
            </CButton>
          </RestrictedComponent>
        </CCol>
      </CRow>
    </CForm>
  ) : (
    Loader()
  )
}

export default ProductPpobDetails
