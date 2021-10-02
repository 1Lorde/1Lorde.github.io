import React from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CImage,
  CRow,
} from '@coreui/react'
import image from '../../assets/images/company.jpg'

const CompanyInfo = () => {
  return (
    <CForm>
      <CRow>
        <CCol>
          <div className="mb-3">
            <CFormLabel htmlFor="company_name">Company name</CFormLabel>
            <CFormInput type="text" id="company_name" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="address">Address</CFormLabel>
            <CFormInput type="text" id="address" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="npwp">NPWP Number</CFormLabel>
            <CFormInput type="text" id="npwp" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="siup">SIUP Number</CFormLabel>
            <CFormInput type="text" id="siup" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="tdp">TDP Number</CFormLabel>
            <CFormInput type="text" id="tdp" />
          </div>
        </CCol>
        <CCol>
          <CContainer fluid className="d-flex justify-content-center">
            <CImage rounded src={image} width={550} height={390} className="mt-4" />
          </CContainer>
        </CCol>
      </CRow>
      <CRow className="mb-4 mt-3">
        <CCol>
          <div className="mb-3">
            <CFormLabel htmlFor="website">Website</CFormLabel>
            <CFormInput type="text" id="website" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="subscription">Subscription Package</CFormLabel>
            <CFormInput type="text" id="subscription" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="status">Status</CFormLabel>
            <CFormSelect id="status">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CFormSelect>
          </div>
        </CCol>
        <CCol>
          <div className="mb-3">
            <CFormLabel htmlFor="director">Director Name</CFormLabel>
            <CFormInput type="text" id="director" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="ktp">KTP Number</CFormLabel>
            <CFormInput type="text" id="ktp" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="wa">WhatsApp Number</CFormLabel>
            <CFormInput type="text" id="wa" />
          </div>
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <div className="d-flex justify-content-end">
          <CButton color="primary">Edit</CButton>
        </div>
      </CRow>
    </CForm>
  )
}

export default CompanyInfo
