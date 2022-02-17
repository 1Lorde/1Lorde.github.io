import React, { useContext, useEffect, useState } from 'react'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CHeaderText,
  CRow,
} from '@coreui/react'

import { useHistory } from 'react-router-dom'
import Loader from '../../../components/Loader'
import { getServices, getServicesMargin, updateServicesMargin } from '../../../api/api_service'
import { store } from 'react-notifications-component'
import { danger, success } from '../../../helpers/notifications'
import { tryParseInt } from '../../../helpers/utils'
import { createNotification } from '../../../api/api_notification'
import { Services } from '../../../helpers/notification_types'
import { UserContext } from '../../../helpers/user'
import RestrictedComponent from '../../../routes/RestrictedComponent'
import { useTranslation } from 'react-i18next'

const ProductsPpob = () => {
  const { t } = useTranslation()
  const { userState } = useContext(UserContext)
  const history = useHistory()
  const [services, setServices] = useState([])
  const [hasLoaded, setHasLoaded] = useState()
  const [servicesMargin, setServicesMargin] = useState({})
  const [validated, setValidated] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [category, setCategory] = useState('')
  const [active, setActive] = useState('')
  const [marginBy, setMarginBy] = useState('')

  const handleServicesMarginUpdate = (event) => {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    if (form.checkValidity()) {
      console.log(servicesMargin)
      updateServicesMargin(servicesMargin).then((data) => {
        if (data.ok) {
          console.log(data)
          createNotification(userState.user.wa_number, Services.ppobAllMarginEdit, '').then(
            (resp) => {
              console.log('Notification created: ' + resp.id)
            },
          )
          store.addNotification(success(t('notifications.service_margin_update')))
        } else {
          console.log(data)
          store.addNotification(danger(data.error))
        }
      })
    }
  }

  useEffect(() => {
    console.log(marginBy)
    getServices(searchQuery, category, active, marginBy).then((data) => {
      if (data.ok === true) {
        console.log(data)
        console.log(userState)
        setServices(data.services)
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
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, category, active, marginBy])

  return hasLoaded ? (
    <CContainer>
      <CRow className="align-items-center mb-4">
        <CCol xl={4}>
          <CFormLabel htmlFor="searchInput">{t('search')}</CFormLabel>
          <CFormInput
            type="text"
            id="searchInput"
            placeholder={t('enter_search_query')}
            onChange={(e) => {
              setSearchQuery(e.target.value)
            }}
          />
        </CCol>
        <CCol>
          <CFormLabel htmlFor="categoryInput">{t('category')}</CFormLabel>
          <CFormSelect
            id="categoryInput"
            onChange={(e) => {
              setCategory(e.target.value)
            }}
          >
            <option value="">{t('all')}</option>
            <option value="postpaid">{t('postpaid')}</option>
            <option value="prepaid">{t('prepaid')}</option>
          </CFormSelect>
        </CCol>
        <CCol>
          <CFormLabel htmlFor="statusInput">{t('status')}</CFormLabel>
          <CFormSelect
            id="statusInput"
            onChange={(e) => {
              setActive(e.target.value)
            }}
          >
            <option value="">{t('all')}</option>
            <option value={1}>{t('active')}</option>
            <option value={0}>{t('inactive')}</option>
          </CFormSelect>
        </CCol>
        <RestrictedComponent allowedRoles={['app-owner', 'koperasi-owner', 'credit-analyst']}>
          <CCol>
            <CFormLabel htmlFor="marginByInput">{t('margin_by')}</CFormLabel>
            <CFormSelect
              id="marginByInput"
              onChange={(e) => {
                setMarginBy(e.target.value)
              }}
            >
              <option value="">{t('all')}</option>
              <option value="fix_cost">{t('fix_cost')}</option>
              <option value="percent">{t('percent')}</option>
            </CFormSelect>
          </CCol>
        </RestrictedComponent>
      </CRow>
      <RestrictedComponent allowedRoles={['app-owner', 'koperasi-owner', 'credit-analyst']}>
        <CForm noValidate validated={validated} onSubmit={handleServicesMarginUpdate}>
          <CRow className="align-items-center mb-5">
            <CCol xl={3}>
              <CFormLabel htmlFor="margin_by">{t('margin_by_all')}</CFormLabel>
              <CFormSelect
                id="margin_by"
                defaultValue={servicesMargin.margin_by}
                onChange={(e) => {
                  setServicesMargin((servicesMargin) => ({
                    ...servicesMargin,
                    margin_by: e.target.value,
                  }))
                }}
              >
                <option value="fix_cost">{t('fix_cost')}</option>
                <option value="percent">{t('percent')}</option>
              </CFormSelect>
            </CCol>

            <CCol xl={3}>
              <CFormLabel htmlFor="nominal">{t('nominal')}</CFormLabel>
              <CFormInput
                id="nominal"
                type="number"
                defaultValue={servicesMargin.nominal}
                max={servicesMargin.margin_by === 'percent' ? 100 : 100000}
                onChange={(e) => {
                  setServicesMargin((servicesMargin) => ({
                    ...servicesMargin,
                    nominal: tryParseInt(e.target.value),
                  }))
                }}
              />
            </CCol>
            <CCol xl={3}>
              <CButton className="mt-4" size="sm" type="submit">
                {t('update_margin')}
              </CButton>
            </CCol>
          </CRow>
        </CForm>
      </RestrictedComponent>
      <CRow className="justify-content-start">
        {services.length > 0 ? (
          services?.map((service, index) => {
            return (
              <CCol key={index} xxl={3} md={5} className="mb-4">
                <CCard
                  style={{ width: '18rem', height: '100%', cursor: 'pointer' }}
                  onClick={() => {
                    history.push('/products/ppob/' + service.id)
                  }}
                >
                  <CCardImage
                    orientation="top"
                    src={'https://via.placeholder.com/550x390.png?text=' + service.name}
                  />
                  <CCardBody className="text-center">
                    <CCardTitle>{service.name}</CCardTitle>
                    <CCardText>{service.desc}</CCardText>
                    {service.active ? (
                      <CBadge color="success" shape="rounded-pill">
                        {t('active')}
                      </CBadge>
                    ) : (
                      <CBadge color="dark" shape="rounded-pill">
                        {t('inactive')}
                      </CBadge>
                    )}
                  </CCardBody>
                </CCard>
              </CCol>
            )
          })
        ) : (
          <>
            <div className="d-flex justify-content-center">
              <CHeaderText>{t('not_found')}</CHeaderText>
            </div>
          </>
        )}
      </CRow>
    </CContainer>
  ) : (
    Loader()
  )
}

export default ProductsPpob
