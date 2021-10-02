import React from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CImage,
  CRow,
} from '@coreui/react'
import image from '../../../assets/images/product.jpg'

const ProductSavingsDetails = () => {
  return (
    <CForm>
      <CRow xs={{ cols: 1 }} md={{ cols: 2 }} className="mb-4">
        <CCol>
          <CFormLabel htmlFor="type">Type of Products</CFormLabel>
          <CFormSelect id="type">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </CFormSelect>
          <CContainer fluid className="d-flex justify-content-center mb-5">
            <CImage thumbnail rounded src={image} width={500} height={500} className="mt-5" />
          </CContainer>
        </CCol>
        <CCol>
          <div className="mb-2">
            <CFormLabel htmlFor="name">Products Name</CFormLabel>
            <CFormInput type="text" id="name" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="description">Description</CFormLabel>
            <CFormTextarea type="text" id="description" rows="3" />
          </div>

          <h5>Balance</h5>
          <div className="ms-4 mb-2">
            <CFormLabel htmlFor="start">Start</CFormLabel>
            <CFormInput type="text" id="start" />
          </div>
          <div className="ms-4 mb-2">
            <CFormLabel htmlFor="min">Minimal</CFormLabel>
            <CFormInput type="text" id="min" />
          </div>

          <h5>Rate</h5>
          <CRow className="ms-3 mb-2">
            <CCol xs={4}>
              <CFormLabel htmlFor="start">Percentage</CFormLabel>
              <CFormInput type="text" id="start" />
            </CCol>
            <CCol>
              <CFormLabel htmlFor="type2">Type</CFormLabel>
              <CFormSelect id="type2">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CFormSelect>
            </CCol>
          </CRow>

          <div className="mb-2">
            <CFormLabel htmlFor="requirements">Requirements</CFormLabel>
            <CFormInput type="text" id="requirements" />
          </div>
          <div className="mb-2">
            <CFormInput type="text" />
          </div>

          <CFormLabel htmlFor="status">Status</CFormLabel>
          <CFormSelect id="status">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </CFormSelect>
        </CCol>
      </CRow>
      <CRow xs={{ cols: 1 }} md={{ cols: 2 }}>
        <CCol className="d-grid d-md-flex justify-content-md-start mb-3">
          <CButton color="primary" variant="outline">
            Register Nasabah to this Product
          </CButton>
        </CCol>
        <CCol className="d-grid d-md-flex justify-content-md-end mb-3">
          <CButton color="primary">Edit</CButton>
        </CCol>
      </CRow>
    </CForm>
  )
}

export default ProductSavingsDetails
