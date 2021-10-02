import React from 'react'
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
import { cilAsterisk, cilPhone } from '@coreui/icons'

const ResetPassword = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCard className="p-4">
              <CCardBody>
                <CForm>
                  <h2>Reset password</h2>
                  <br />
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilPhone} />
                    </CInputGroupText>
                    <CFormInput placeholder="WhatsApp number" />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilAsterisk} />
                    </CInputGroupText>
                    <CFormInput placeholder="KTP number" />
                  </CInputGroup>
                  <CRow>
                    <CCol className="d-flex justify-content-end">
                      <CButton color="primary" className="px-4">
                        Submit
                      </CButton>
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

export default ResetPassword
