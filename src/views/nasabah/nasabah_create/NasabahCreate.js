import React, { useContext, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CContainer,
  CForm,
  CFormFeedback,
  CFormInput,
  CFormLabel,
} from '@coreui/react'

import avatar from '../../../assets/images/avatar_placeholder.png'
import { useHistory } from 'react-router-dom'
import { store } from 'react-notifications-component'
import { danger, success } from '../../../helpers/notifications'
import { createNasabah } from '../../../api/api_nasabah'
import { createNotification } from '../../../api/api_notification'
import { Services } from '../../../helpers/notification_types'
import { UserContext } from '../../../helpers/user'
import { useTranslation } from 'react-i18next'

const NasabahCreate = () => {
  const { t } = useTranslation()
  const { userState } = useContext(UserContext)
  const history = useHistory()
  const [nasabah, setNasabah] = useState({})
  const [validated, setValidated] = useState(false)

  function handleCreate(event) {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    }
    setValidated(true)

    if (form.checkValidity()) {
      console.log(nasabah)
      createNasabah(nasabah).then((data) => {
        if (data.ok) {
          createNotification(userState.user.wa_number, Services.userCreate, nasabah.name).then(
            (resp) => {
              console.log('Notification created' + resp.id)
            },
          )
          store.addNotification(success(t('notifications.nasabah_create', { name: nasabah.name })))
          history.push('/nasabah')
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
    }
  }

  return (
    <CContainer className="d-flex justify-content-center">
      <CCard style={{ width: '35rem' }}>
        <CCardImage orientation="top" src={avatar} />
        <CCardBody>
          <CForm noValidate validated={validated} onSubmit={handleCreate}>
            <div className="mb-3">
              <CFormLabel htmlFor="name">{t('name')}</CFormLabel>
              <CFormInput
                type="text"
                id="name"
                required
                onChange={(e) => {
                  setNasabah((nasabah) => ({ ...nasabah, name: e.target.value }))
                }}
              />
              <CFormFeedback invalid>{t('invalid_name')}</CFormFeedback>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="ktp">{t('ktp')}</CFormLabel>
              <CFormInput
                type="text"
                id="ktp"
                required
                minLength={16}
                maxLength={16}
                onChange={(e) => {
                  setNasabah((nasabah) => ({
                    ...nasabah,
                    ktp_id: e.target.value,
                  }))
                }}
              />
              <CFormFeedback invalid>{t('invalid_ktp')}</CFormFeedback>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="wa">{t('whatsapp')}</CFormLabel>
              <CFormInput
                type="tel"
                id="wa"
                required
                pattern="^\+62[0-9]{9,15}$"
                onChange={(e) => {
                  setNasabah((nasabah) => ({
                    ...nasabah,
                    wa_number: e.target.value,
                  }))
                }}
              />
              <CFormFeedback invalid>{t('invalid_wa')}</CFormFeedback>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="address">{t('address')}</CFormLabel>
              <CFormInput
                type="text"
                id="address"
                minLength={5}
                required
                onChange={(e) => {
                  setNasabah((nasabah) => ({
                    ...nasabah,
                    address: e.target.value,
                  }))
                }}
              />
              <CFormFeedback invalid>{t('invalid_address')}</CFormFeedback>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="group">{t('group')}</CFormLabel>
              <CFormInput
                type="text"
                id="group"
                onChange={(e) => {
                  setNasabah((nasabah) => ({
                    ...nasabah,
                    group: e.target.value,
                  }))
                }}
              />
            </div>
            <div className="d-flex justify-content-end">
              <CButton color="primary" type="submit">
                {t('create')}
              </CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default NasabahCreate
