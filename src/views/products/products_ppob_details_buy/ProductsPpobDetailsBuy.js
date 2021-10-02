import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'

const ProductsPpobDetailsBuy = () => {
  return (
    <CContainer className="d-flex justify-content-center">
      <CCard style={{ width: '35rem' }}>
        <CCardHeader component="h4" className="p-3">
          Buy [PPOB Name]
        </CCardHeader>
        <CCardBody>
          <CForm>
            <div className="mb-3">
              <CFormLabel htmlFor="type">Type</CFormLabel>
              <CFormSelect id="type">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CFormSelect>
            </div>
            <div className="mb-4">
              <CFormLabel htmlFor="accountNumber">Account Number</CFormLabel>
              <CFormInput type="text" id="accountNumber" />
            </div>
            <div className="mb-3">
              <p>Available nominal</p>
              <hr />
              <CRow className="text-center">
                <CCol>
                  <CFormCheck
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    label="5.000"
                    defaultChecked
                  />
                  <CFormCheck
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    label="10.000"
                  />
                  <CFormCheck
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                    label="20.000"
                  />
                  <CFormCheck
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault4"
                    label="25.000"
                  />
                  <CFormCheck
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault5"
                    label="50.000"
                  />
                </CCol>
                <CCol>
                  <CFormCheck
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault6"
                    label="100.000"
                  />
                  <CFormCheck
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault7"
                    label="150.000"
                  />
                  <CFormCheck
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault8"
                    label="250.000"
                  />
                  <CFormCheck
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault9"
                    label="500.000"
                  />
                  <CFormCheck
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault10"
                    label="1.000.000"
                  />
                </CCol>
              </CRow>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="price">Price to Pay</CFormLabel>
              <CFormInput type="text" id="price" />
            </div>
            <CRow>
              <div className="d-flex justify-content-end">
                <CButton color="primary">Buy</CButton>
              </div>
            </CRow>
          </CForm>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default ProductsPpobDetailsBuy
