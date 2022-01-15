import React, { useContext, useState } from 'react'
import { CButton, CForm, CFormFeedback, CFormInput, CFormLabel } from '@coreui/react'
import { store } from 'react-notifications-component'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../helpers/user'
import { danger, info } from '../helpers/notifications'
import { resetPassword } from '../api/api_auth'
import { useTranslation } from 'react-i18next'

const NewPassword = (params) => {
  const { t } = useTranslation()
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  let history = useHistory()
  const { userDispatch } = useContext(UserContext)

  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    if (newPassword !== confirmNewPassword) {
      store.addNotification(danger(t('notifications.check_confirm_field')))
      return
    }

    setValidated(true)

    resetPassword(params.userId, params.token, newPassword)
      .then((data) => {
        store.addNotification(info(data.message))
        userDispatch({ type: 'request_reset', temp_token: data.auth_id })
        history.push('/input_otp')
      })
      .catch((e) => {
        let data = e.response.data
        console.log(data)
        store.addNotification(danger(data.message))
      })
  }

  return (
    <CForm noValidate validated={validated}>
      <h2>{t('reset_password')}</h2>
      <br />
      <div className="mb-3">
        <CFormLabel htmlFor="new_pass">{t('new_password')}</CFormLabel>
        <CFormInput
          type="password"
          id="new_pass"
          required
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <CFormFeedback invalid>{t('invalid_new_password')}</CFormFeedback>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="confirm_new_pass">{t('confirm_new_password')}</CFormLabel>
        <CFormInput
          type="password"
          id="confirm_new_pass"
          required
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
        <CFormFeedback invalid>{t('invalid_confirm_new_password')}</CFormFeedback>
      </div>
      <div className="d-flex justify-content-end">
        <CButton color="primary" onClick={handleSubmit}>
          {t('save')}
        </CButton>
      </div>
    </CForm>
  )
}

export default NewPassword
