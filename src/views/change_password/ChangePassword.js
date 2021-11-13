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
} from '@coreui/react'
import { changePassword, UserContext } from '../../helpers/user'
import { store } from 'react-notifications-component'
import { danger, info } from '../../helpers/notifications'
import { useHistory } from 'react-router-dom'

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  let history = useHistory()
  const { userState, userDispatch } = useContext(UserContext)

  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    }

    if (newPassword !== confirmNewPassword) {
      store.addNotification(danger('Check confirmation field'))
      return
    }

    setValidated(true)

    if (form.checkValidity()) {
      changePassword(oldPassword, newPassword)
        .then((data) => {
          store.addNotification(info(data.message))
          userDispatch({ type: 'request_otp', user: userState.user, company: userState.company })
          history.push('/input_otp')
        })
        .catch((e) => {
          let data = e.response.data
          console.log(data)
          store.addNotification(danger(data.message))
        })
    }
  }

  return (
    <CContainer className="d-flex justify-content-center">
      <CCard style={{ width: '35rem' }}>
        <CCardBody>
          <CForm noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="mb-3">
              <CFormLabel htmlFor="old_pass">Old Password</CFormLabel>
              <CFormInput
                type="password"
                id="old_pass"
                required
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <CFormFeedback invalid>Please provide old password.</CFormFeedback>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="new_pass">New Password</CFormLabel>
              <CFormInput
                type="password"
                pattern="^.{6,}$"
                id="new_pass"
                required
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <CFormFeedback invalid>Please provide new password (min 6 chars).</CFormFeedback>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="confirm_new_pass">Confirm New Password</CFormLabel>
              <CFormInput
                type="password"
                pattern="^.{6,}$"
                id="confirm_new_pass"
                required
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              <CFormFeedback invalid>Please confirm new password.</CFormFeedback>
            </div>
            <div className="d-flex justify-content-end">
              <CButton color="primary" type="submit">
                Save
              </CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default ChangePassword