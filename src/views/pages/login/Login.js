import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilPhone } from '@coreui/icons'
import { Link, useHistory } from 'react-router-dom'
import AuthService from '../../../services/auth.service'

const Login = () => {
  const [wa_number, setNumber] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  function handleLogin() {
    if (!AuthService.isAuthenticated()) {
      // AuthService.login(wa_number, password).then(() => {
      //   history.push('/profile')
      // })
      AuthService.login(wa_number, password)
      history.push('/profile')
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCard className="p-4">
              <CCardBody>
                <CForm>
                  <h1>Login</h1>
                  <p className="text-medium-emphasis">Sign In to your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilPhone} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="WhatsApp number"
                      value={wa_number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol className="d-flex justify-content-start">
                      <CButton color="primary" className="px-4" onClick={handleLogin}>
                        Login
                      </CButton>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol className="d-flex justify-content-end">
                      <Link to="/reset_password">Forgot password?</Link>
                    </CCol>
                  </CRow>
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
