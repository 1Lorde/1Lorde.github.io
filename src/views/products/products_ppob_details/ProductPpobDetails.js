import React from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CImage,
  CRow,
} from '@coreui/react'
import image from '../../../assets/images/ppob.png'
import { useHistory } from 'react-router-dom'

const ProductPpobDetails = () => {
  const history = useHistory()

  return (
    <CForm>
      <CRow xs={{ cols: 1 }} md={{ cols: 2 }} className="mb-4">
        <CCol>
          <CFormLabel htmlFor="category">Category</CFormLabel>
          <CFormSelect id="category">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </CFormSelect>
          <CContainer fluid class="d-flex justify-content-center mt-4 mb-3">
            <CImage thumbnail rounded src={image} width={500} height={500} />
          </CContainer>
        </CCol>
        <CCol>
          <div className="mb-2">
            <CFormLabel htmlFor="name">PPOB Name</CFormLabel>
            <CFormInput type="text" id="name" />
          </div>
          <div className="mb-2">
            <CFormLabel htmlFor="description">Description</CFormLabel>
            <CFormTextarea type="text" id="description" rows="3" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="vendor">Vendor</CFormLabel>
            <CFormSelect id="vendor">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CFormSelect>
          </div>
          <h5>Margin by</h5>
          <CRow xs={{ cols: 1 }} md={{ cols: 2 }} className="mb-3 mt-3 align-items-center">
            <CCol>
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="inlineCheckbox1"
                value="all"
                label="All (Default)"
                defaultChecked
              />
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="inlineCheckbox2"
                value="percent"
                label="Percent"
              />
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="inlineCheckbox3"
                value="fix"
                label="Fix"
              />
            </CCol>
            <CCol>
              <CFormInput type="text" id="fix_value" />
            </CCol>
          </CRow>
          <CRow className="mb-3 align-items-center">
            <CCol xs={5}>Retail Price (after margin added)</CCol>
            <CCol>
              <CFormInput type="text" id="retail_price" />
            </CCol>
          </CRow>
          <CFormLabel htmlFor="status">Status</CFormLabel>
          <CFormSelect id="status">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </CFormSelect>
        </CCol>
      </CRow>
      <CRow xs={{ cols: 1 }} md={{ cols: 2 }}>
        <CCol className="d-grid d-md-flex justify-content-md-start mb-2">
          <CButton
            color="primary"
            variant="outline"
            onClick={() => {
              history.push('/products/ppob/details/buy')
            }}
          >
            Buy
          </CButton>
        </CCol>
        <CCol className="d-grid d-md-flex justify-content-md-end mb-3">
          <CButton color="primary">Edit</CButton>
        </CCol>
      </CRow>
    </CForm>
  )
}

export default ProductPpobDetails
