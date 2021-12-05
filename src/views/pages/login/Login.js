import React, { useContext, useState } from 'react'
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
import { cilLockLocked, cilPhone } from '@coreui/icons'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../../../helpers/user'
import { danger, info } from '../../../helpers/notifications'
import { store } from 'react-notifications-component'
import { login } from '../../../api/api_auth'

const Login = () => {
  const [wa_number, setNumber] = useState('')
  const [password, setPassword] = useState('')
  const { userDispatch } = useContext(UserContext)
  const history = useHistory()
  const [validated, setValidated] = useState(false)

  function handleLogin(event) {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    }
    setValidated(true)

    if (form.checkValidity()) {
      login(wa_number, password).then((data) => {
        if (data.ok) {
          userDispatch({ type: 'request_login', temp_token: data.auth_id })
          console.log(data)
          store.addNotification(info(data.message))
          history.push('/input_otp')
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
                <CForm noValidate validated={validated} onSubmit={handleLogin}>
                  <h1>Login</h1>
                  <p className="text-medium-emphasis">Sign In to your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilPhone} />
                    </CInputGroupText>
                    <CFormInput
                      type="tel"
                      pattern="^\+62[0-9]{9,15}$"
                      placeholder="WhatsApp number"
                      required
                      value={wa_number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                    <CFormFeedback invalid>Please provide a valid phone number.</CFormFeedback>
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <CFormFeedback invalid>Please provide a password.</CFormFeedback>
                  </CInputGroup>
                  <div className="d-flex justify-content-start">
                    <CButton color="primary" className="px-4" type="submit">
                      Login
                    </CButton>
                  </div>
                  <div className="d-flex justify-content-end">
                    <Link to="/register">Client registration</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/reset_password">Forgot password</Link>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
