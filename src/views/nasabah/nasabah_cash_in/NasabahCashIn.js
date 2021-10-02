import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'

const NasabahCashIn = () => {
  return (
    <CContainer className="d-flex justify-content-center">
      <CCard style={{ width: '35rem' }}>
        <CCardHeader component="h4" className="p-3">
          Cash-In
        </CCardHeader>
        <CCardBody>
          <CForm>
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
            <br />
            <hr />
            <div className="mb-3">
              <CFormLabel htmlFor="nominal">Nominal</CFormLabel>
              <CFormInput type="text" id="nominal" />
            </div>

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

export default NasabahCashIn
