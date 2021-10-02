import React from 'react'
import ReactCodeInput from 'react-verification-code-input'

import { CButton, CCard, CCardBody, CCol, CContainer, CForm, CRow } from '@coreui/react'

const InputOtp = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCard className="p-4">
              <CCardBody>
                <CForm>
                  <h2>Input OTP</h2>
                  <br />
                  <CRow>
                    <CCol className="d-flex justify-content-center">
                      <ReactCodeInput />
                    </CCol>
                  </CRow>
                  <br />
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
        <br />
        <CRow className="align-items-baseline">
          <CCol md={5} className="d-flex justify-content-end">
            <CButton color="primary" variant="outline">
              Request OTP
            </CButton>
          </CCol>
          <CCol md={4} className="d-flex justify-content-center">
            <p>or sent !OTP via WhatsApp to +6281xxxxxxxxxx</p>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default InputOtp
