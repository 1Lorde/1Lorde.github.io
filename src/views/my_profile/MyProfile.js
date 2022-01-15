import React, { useContext, useState } from 'react'
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

import avatar_placeholder from '../../assets/images/avatar_placeholder.png'
import { useHistory } from 'react-router-dom'
import { store } from 'react-notifications-component'
import { danger, success } from '../../helpers/notifications'
import { Roles } from '../../helpers/role'
import { UserContext } from '../../helpers/user'
import { updateProfile } from '../../api/api_profile'
import { Services } from '../../helpers/notification_types'
import { createNotification } from '../../api/api_notification'
import { useTranslation } from 'react-i18next'

const MyProfile = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const { userState, userDispatch } = useContext(UserContext)
  const [fullName, setFullname] = useState('')
  const [address, setAddress] = useState('')

  const handleClick = () => {
    history.push('/profile/change_password')
  }

  const handleEdit = () => {
    const changes = {}
    if (fullName) {
      changes.name = fullName
    }
    if (address) {
      changes.address = address
    }
    updateProfile(changes).then((data) => {
      if (data.ok) {
        createNotification(userState.user.wa_number, Services.profileEdit, '').then((resp) => {
          console.log('Notification created: ' + resp.id)
        })
        store.addNotification(success(data.message))
        userDispatch({
          type: 'login',
          user: { ...userState.user, name: changes.name, address: changes.address },
          company: userState.company,
        })
      } else {
        store.addNotification(danger(data.message))
      }
    })
  }

  return (
    <CContainer className="d-flex justify-content-center">
      <CCard style={{ width: '35rem' }}>
        <CCardImage
          orientation="top"
          src={!userState.user.avatar ? avatar_placeholder : userState.user.avatar}
        />
        <CCardBody>
          <CForm>
            <div className="mb-3">
              <CFormLabel htmlFor="fullnameInput">{t('fullname')}</CFormLabel>
              <CFormInput
                type="text"
                id="fullnameInput"
                defaultValue={userState.user.name}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="ktpnumberInput">{t('ktp')}</CFormLabel>
              <CFormInput
                type="text"
                id="ktpnumberInput"
                defaultValue={userState.user.ktp_id}
                disabled
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="wanumberInput">{t('whatsapp')}</CFormLabel>
              <CFormInput
                type="text"
                id="wanumberInput"
                defaultValue={userState.user.wa_number}
                disabled
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="addressInput">{t('address')}</CFormLabel>
              <CFormInput
                type="text"
                id="addressInput"
                defaultValue={userState.user.address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="positionInput">{t('position')}</CFormLabel>
              <CFormInput
                type="text"
                id="positionInput"
                defaultValue={Roles[userState.user.role]}
                disabled
              />
            </div>
            <div className="mb-4">
              <CFormLabel htmlFor="statusInput">{t('status')}</CFormLabel>
              <CFormSelect
                type="text"
                id="statusInput"
                defaultValue={userState.user.status}
                disabled
              >
                <option value="inactive">{t('inactive')}</option>
                <option value="active">{t('active')}</option>
              </CFormSelect>
            </div>
            <div className="d-flex justify-content-between">
              <CButton color="primary" onClick={handleClick}>
                {t('change_password')}
              </CButton>
              <CButton color="primary" variant="outline" onClick={handleEdit}>
                {t('edit')}
              </CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default MyProfile
