import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormFeedback,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilAsterisk, cilPhone } from '@coreui/icons'
import { forgotPassword } from '../../../helpers/user'
import { store } from 'react-notifications-component'
import { danger, info } from '../../../helpers/notifications'
import NewPassword from '../../../components/NewPassword'

const ResetPassword = () => {
  const [wa_number, setNumber] = useState('')
  const [ktp_id, setKtp] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [userId, setUserId] = useState('')
  const [token, setToken] = useState('')
  const [validated, setValidated] = useState(false)

  function handleReset(event) {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    if (form.checkValidity()) {
      forgotPassword(wa_number, ktp_id).then((data) => {
        if (data.ok) {
          store.addNotification(info(data.message))
          setUserId(data.url_link.split('/')[5])
          setToken(data.url_link.split('/')[6])
          setIsValid(true)
        } else {
          store.addNotification(danger(data.message))
        }
      })
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={5}>
            <CCard className="p-4">
              <CCardBody>
                {isValid ? (
                  <NewPassword userId={userId} token={token} />
                ) : (
                  <CForm noValidate validated={validated} onSubmit={handleReset}>
                    <h2>Reset password</h2>
                    <br />
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilPhone} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="WhatsApp number"
                        type="tel"
                        pattern="^\+62[0-9]{9,15}$"
                        required
                        value={wa_number}
                        onChange={(e) => setNumber(e.target.value)}
                      />
                      <CFormFeedback invalid>Please provide a valid phone number.</CFormFeedback>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilAsterisk} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="KTP number"
                        required
                        pattern="^[0-9]{16}$"
                        value={ktp_id}
                        onChange={(e) => setKtp(e.target.value)}
                      />
                      <CFormFeedback invalid>Please provide a valid KTP number.</CFormFeedback>
                    </CInputGroup>
                    <CRow>
                      <CCol className="d-flex justify-content-end">
                        <CButton color="primary" className="px-4" type="submit">
                          Submit
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                )}
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default ResetPassword
