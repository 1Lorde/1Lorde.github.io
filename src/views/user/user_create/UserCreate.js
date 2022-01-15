import React, { useContext, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CContainer,
  CForm,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CFormSelect,
} from '@coreui/react'

import { useHistory } from 'react-router-dom'
import { store } from 'react-notifications-component'
import { danger, success } from '../../../helpers/notifications'
import { Roles } from '../../../helpers/role'
import { UserContext } from '../../../helpers/user'
import { createUser } from '../../../api/api_user'
import { createNotification } from '../../../api/api_notification'
import { Services } from '../../../helpers/notification_types'
import { useTranslation } from 'react-i18next'

const UserCreate = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const { userState } = useContext(UserContext)
  const [user, setUser] = useState({ role: 'koperasi-owner' })
  const [validated, setValidated] = useState(false)

  function getPositions(userRole) {
    if (Roles[userRole] === Roles['app-owner']) {
      return (
        <>
          <option value="app-owner">{t('app_owner')}</option>
          <option value="product-technical">{t('product_technical')}</option>
          <option value="marketing-finance">{t('marketing_finance')}</option>
        </>
      )
    } else if (Roles[userRole] === Roles['koperasi-owner']) {
      return (
        <>
          <option value="koperasi-owner">{t('koperasi_owner')}</option>
          <option value="credit-analyst">{t('credit_analyst')}</option>
          <option value="account-officer">{t('account_officer')}</option>
        </>
      )
    } else {
      console.log('Not valid role: ' + userRole)
    }
  }

  const handleCreate = (event) => {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    if (form.checkValidity()) {
      console.log(user)
      createUser(user).then((data) => {
        if (data.ok) {
          createNotification(userState.user.wa_number, Services.userCreate, user.name).then(
            (resp) => {
              console.log('Notification created: ' + resp.id)
            },
          )
          store.addNotification(
            success(t('notifications.user_create', { wa_number: user.wa_number })),
          )
          history.push('/users')
        } else {
          store.addNotification(danger(data.message))
        }
      })
    }
  }

  return (
    <CContainer className="d-flex justify-content-center">
      <CCard style={{ width: '35rem' }}>
        <CCardBody>
          <CForm noValidate validated={validated} onSubmit={handleCreate}>
            <div className="mb-3">
              <CFormLabel htmlFor="fullnameInput">{t('fullname')}</CFormLabel>
              <CFormInput
                type="text"
                id="fullnameInput"
                required
                defaultValue={user.name}
                onChange={(e) => {
                  setUser((user) => ({ ...user, name: e.target.value }))
                }}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="ktpnumberInput">{t('ktp')}</CFormLabel>
              <CFormInput
                type="text"
                id="ktpnumberInput"
                minLength={16}
                maxLength={16}
                required
                defaultValue={user.ktp_id}
                onChange={(e) => {
                  setUser((user) => ({ ...user, ktp_id: e.target.value }))
                }}
              />
              <CFormFeedback invalid>{t('invalid_ktp')}</CFormFeedback>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="wanumberInput">{t('whatsapp')}</CFormLabel>
              <CFormInput
                id="wanumberInput"
                type="tel"
                pattern="^\+62[0-9]{9,15}$"
                required
                defaultValue={user.wa_number}
                onChange={(e) => {
                  setUser((user) => ({ ...user, wa_number: e.target.value }))
                }}
              />
              <CFormFeedback invalid>{t('invalid_wa')}</CFormFeedback>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="addressInput">{t('address')}</CFormLabel>
              <CFormInput
                type="text"
                id="addressInput"
                minLength={5}
                required
                defaultValue={user.address}
                onChange={(e) => {
                  setUser((user) => ({ ...user, address: e.target.value }))
                }}
              />
              <CFormFeedback invalid>{t('invalid_address')}</CFormFeedback>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="positionInput">{t('position')}</CFormLabel>
              <CFormSelect
                aria-label="Position"
                defaultValue={user.role}
                onChange={(e) => {
                  setUser((user) => ({ ...user, role: e.target.value }))
                }}
              >
                <option disabled>{t('please_select')}</option>
                {getPositions(userState.user.role)}
              </CFormSelect>
            </div>
            <div className="d-flex justify-content-center">
              <CButton color="primary" variant="outline" type="submit">
                {t('create')}
              </CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default UserCreate
