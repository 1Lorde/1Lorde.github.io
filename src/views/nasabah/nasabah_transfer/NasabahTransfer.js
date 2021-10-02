import React from 'react'
import {
  CButton,
  CCallout,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'

const NasabahTransfer = () => {
  return (
    <CContainer fluid>
      <CCardHeader component="h4" className="p-3">
        Transfer
      </CCardHeader>
      <CCard>
        <CCardBody>
          <CForm>
            <CRow>
              <CCol className="ps-5">
                <CCallout color="primary">
                  <h5>Sender</h5>
                  <br />
                  <div className="mb-3">
                    <CFormLabel htmlFor="name">Name</CFormLabel>
                    <CFormInput type="text" id="name" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="accountNumber">Account Number</CFormLabel>
                    <CFormInput type="text" id="accountNumber" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="type">Type of Account</CFormLabel>
                    <CFormSelect id="type">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </CFormSelect>
                  </div>
                </CCallout>
              </CCol>

              <CCol className="pe-5">
                <CCallout color="info">
                  <h5>Receiver</h5>
                  <br />
                  <div className="mb-3">
                    <CFormLabel htmlFor="name">Name</CFormLabel>
                    <CFormInput type="text" id="name" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="accountNumber">Account Number</CFormLabel>
                    <CFormInput type="text" id="accountNumber" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="type">Type of Account</CFormLabel>
                    <CFormSelect id="type">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </CFormSelect>
                  </div>
                </CCallout>
              </CCol>
            </CRow>

            <CRow>
              <CCol className="ps-5" xs={6}>
                <CCallout color="dark">
                  <div className="mb-3">
                    <CFormLabel htmlFor="nominal">Nominal</CFormLabel>
                    <CFormInput type="text" id="nominal" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="berita">Berita</CFormLabel>
                    <CFormInput type="text" id="berita" />
                  </div>
                </CCallout>
              </CCol>
            </CRow>
            <CRow>
              <div className="d-flex justify-content-end">
                <CButton color="primary">Submit</CButton>
              </div>
            </CRow>
          </CForm>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default NasabahTransfer
