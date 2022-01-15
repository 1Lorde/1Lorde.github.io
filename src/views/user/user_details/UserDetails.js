import React, { useContext, useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
} from '@coreui/react'

import avatar_placeholder from '../../../assets/images/avatar_placeholder.png'
import { useHistory, useParams } from 'react-router-dom'
import { store } from 'react-notifications-component'
import { danger, success } from '../../../helpers/notifications'
import Loader from '../../../components/Loader'
import { AdminRoles, KoperasiRoles } from '../../../helpers/role'
import { getUser, updateUser } from '../../../api/api_user'
import { createNotification } from '../../../api/api_notification'
import { Services } from '../../../helpers/notification_types'
import { UserContext } from '../../../helpers/user'
import { useTranslation } from 'react-i18next'

const UserDetails = () => {
  const { t } = useTranslation()
  const { userState } = useContext(UserContext)
  const history = useHistory()
  let { id } = useParams()
  const [user, setUser] = useState()
  const [hasLoaded, setHasLoaded] = useState()

  function getPositions(userRole) {
    if (userRole in AdminRoles) {
      return (
        <>
          <option value="app-owner">{t('app_owner')}</option>
          <option value="product-technical">{t('product_technical')}</option>
          <option value="marketing-finance">{t('marketing_finance')}</option>
        </>
      )
    } else if (userRole in KoperasiRoles) {
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

  useEffect(
    () => {
      getUser(id).then((profile_data) => {
        setUser(profile_data)
        setHasLoaded(true)
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  const handleEdit = () => {
    console.log(user)
    updateUser(user).then((data) => {
      if (data.ok) {
        store.addNotification(success(data.message))
        createNotification(userState.user.wa_number, Services.userEdit, user.name).then((resp) => {
          console.log('Notification created: ' + resp.id)
        })
        history.push('/users')
      } else {
        store.addNotification(danger(data.message))
      }
    })
  }

  return hasLoaded ? (
    <CContainer className="d-flex justify-content-center">
      <CCard style={{ width: '35rem' }}>
        <CCardImage orientation="top" src={!user.avatar ? avatar_placeholder : user.avatar} />
        <CCardBody>
          <CForm>
            <div className="mb-3">
              <CFormLabel htmlFor="fullnameInput">{t('fullname')}</CFormLabel>
              <CFormInput
                type="text"
                id="fullnameInput"
                value={user.name}
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
                value={user.ktp_id}
                onChange={(e) => {
                  setUser((user) => ({ ...user, ktp_id: e.target.value }))
                }}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="wanumberInput">{t('whatsapp')}</CFormLabel>
              <CFormInput
                type="text"
                id="wanumberInput"
                value={user.wa_number}
                onChange={(e) => {
                  setUser((user) => ({ ...user, wa_number: e.target.value }))
                }}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="addressInput">{t('address')}</CFormLabel>
              <CFormInput
                type="text"
                id="addressInput"
                value={user.address}
                onChange={(e) => {
                  setUser((user) => ({ ...user, address: e.target.value }))
                }}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="positionInput">{t('position')}</CFormLabel>
              <CFormSelect
                aria-label="Position"
                value={user.role}
                onChange={(e) => {
                  setUser((user) => ({ ...user, role: e.target.value }))
                }}
              >
                {getPositions(user.role)}
              </CFormSelect>
            </div>
            <div className="mb-4">
              <CFormLabel htmlFor="statusInput">{t('status')}</CFormLabel>
              <CFormSelect
                aria-label="Status"
                value={user.status}
                onChange={(e) => {
                  setUser((user) => ({ ...user, status: e.target.value }))
                }}
              >
                <option disabled>{t('please_select')}</option>
                <option value="active">{t('active')}</option>
                <option value="inactive">{t('inactive')}</option>
              </CFormSelect>
            </div>
            <div className="d-flex justify-content-center">
              <CButton color="primary" variant="outline" onClick={handleEdit}>
                {t('save_changes')}
              </CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </CContainer>
  ) : (
    Loader()
  )
}

export default UserDetails
