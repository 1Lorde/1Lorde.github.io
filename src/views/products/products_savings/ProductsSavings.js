import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CContainer,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CPagination,
  CPaginationItem,
  CRow,
} from '@coreui/react'

import product from '../../../assets/images/product.jpg'
import { useHistory } from 'react-router-dom'

const ProductsSavings = () => {
  const history = useHistory()

  function handleClick() {
    history.push('/products/savings/details')
  }

  return (
    <CContainer>
      <CRow className="d-flex align-items-center">
        <CCol xs={6}>
          <CFormLabel htmlFor="search">Search</CFormLabel>
          <CFormInput type="text" id="search" />
        </CCol>
        <CCol>
          <CFormLabel htmlFor="category">Category</CFormLabel>
          <CFormSelect id="category">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </CFormSelect>
        </CCol>
        <CCol>
          <CFormLabel htmlFor="sort">Sort By</CFormLabel>
          <CFormSelect id="sort">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </CFormSelect>
        </CCol>
      </CRow>
      <br />
      <CRow>
        <CCol className="d-flex justify-content-center mb-3">
          <CCard style={{ width: '18rem', cursor: 'pointer' }} onClick={handleClick}>
            <CCardImage orientation="top" src={product} />
            <CCardBody className="text-center">
              <CCardTitle>Products Name</CCardTitle>
              <CCardText>Lorem ipsum dolor sit amet, consectetur.</CCardText>
              <CBadge color="success" shape="rounded-pill">
                Active
              </CBadge>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol className="d-flex justify-content-center mb-3">
          <CCard style={{ width: '18rem', cursor: 'pointer' }} onClick={handleClick}>
            <CCardImage orientation="top" src={product} />
            <CCardBody className="text-center">
              <CCardTitle>Products Name</CCardTitle>
              <CCardText>Lorem ipsum dolor sit amet, consectetur.</CCardText>
              <CBadge color="success" shape="rounded-pill">
                Active
              </CBadge>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol className="d-flex justify-content-center mb-3">
          <CCard style={{ width: '18rem', cursor: 'pointer' }} onClick={handleClick}>
            <CCardImage orientation="top" src={product} />
            <CCardBody className="text-center">
              <CCardTitle>Products Name</CCardTitle>
              <CCardText>Lorem ipsum dolor sit amet, consectetur.</CCardText>
              <CBadge color="success" shape="rounded-pill">
                Active
              </CBadge>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol className="d-flex justify-content-center mb-3">
          <CCard style={{ width: '18rem', cursor: 'pointer' }} onClick={handleClick}>
            <CCardImage orientation="top" src={product} />
            <CCardBody className="text-center">
              <CCardTitle>Products Name</CCardTitle>
              <CCardText>Lorem ipsum dolor sit amet, consectetur.</CCardText>
              <CBadge color="dark" shape="rounded-pill">
                Not active
              </CBadge>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <br />
      <CRow>
        <CCol className="d-flex justify-content-center mb-3">
          <CCard style={{ width: '18rem', cursor: 'pointer' }} onClick={handleClick}>
            <CCardImage orientation="top" src={product} />
            <CCardBody className="text-center">
              <CCardTitle>Products Name</CCardTitle>
              <CCardText>Lorem ipsum dolor sit amet, consectetur.</CCardText>
              <CBadge color="success" shape="rounded-pill">
                Active
              </CBadge>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol className="d-flex justify-content-center mb-3">
          <CCard style={{ width: '18rem', cursor: 'pointer' }} onClick={handleClick}>
            <CCardImage orientation="top" src={product} />
            <CCardBody className="text-center">
              <CCardTitle>Products Name</CCardTitle>
              <CCardText>Lorem ipsum dolor sit amet, consectetur.</CCardText>
              <CBadge color="dark" shape="rounded-pill">
                Not active
              </CBadge>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol className="d-flex justify-content-center mb-3">
          <CCard style={{ width: '18rem', cursor: 'pointer' }} onClick={handleClick}>
            <CCardImage orientation="top" src={product} />
            <CCardBody className="text-center">
              <CCardTitle>Products Name</CCardTitle>
              <CCardText>Lorem ipsum dolor sit amet, consectetur.</CCardText>
              <CBadge color="success" shape="rounded-pill">
                Active
              </CBadge>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol className="d-flex justify-content-center mb-3">
          <CCard style={{ width: '18rem', cursor: 'pointer' }} onClick={handleClick}>
            <CCardImage orientation="top" src={product} />
            <CCardBody className="text-center">
              <CCardTitle>Products Name</CCardTitle>
              <CCardText>Lorem ipsum dolor sit amet, consectetur.</CCardText>
              <CBadge color="success" shape="rounded-pill">
                Active
              </CBadge>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CPagination align="center" aria-label="Page navigation">
          <CPaginationItem aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </CPaginationItem>
          <CPaginationItem active>1</CPaginationItem>
          <CPaginationItem>2</CPaginationItem>
          <CPaginationItem>3</CPaginationItem>
          <CPaginationItem>4</CPaginationItem>
          <CPaginationItem>5</CPaginationItem>
          <CPaginationItem aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </CPaginationItem>
        </CPagination>
      </CRow>
    </CContainer>
  )
}

export default ProductsSavings
