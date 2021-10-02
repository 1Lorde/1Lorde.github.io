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

import ppob from '../../../assets/images/ppob.png'
import { useHistory } from 'react-router-dom'

const ProductsPpob = () => {
  const history = useHistory()

  function handleClick() {
    history.push('/products/ppob/details')
  }

  return (
    <CContainer>
      <CRow className="align-items-center mb-4">
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
      <CRow className="align-items-center mb-5">
        <CCol xl={2} className="mb-2">
          All Services Margin
        </CCol>
        <CCol xl={4} className="mb-2">
          <CFormSelect>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </CFormSelect>
        </CCol>
        <CCol xl={4} className="mb-2">
          <CFormInput type="text" />
        </CCol>
      </CRow>
      <CRow className="mb-4">
        <CCol className="d-flex justify-content-center mb-3">
          <CCard style={{ width: '14rem', cursor: 'pointer' }} onClick={handleClick}>
            <CCardImage orientation="top" src={ppob} />
            <CCardBody className="text-center">
              <CCardTitle>PPOB Name</CCardTitle>
              <CCardText>Category: Lorem</CCardText>
              <CCardText>Lorem ipsum dolor sit amet, consectetur.</CCardText>
              <CBadge color="success" shape="rounded-pill">
                Active
              </CBadge>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol className="d-flex justify-content-center mb-3">
          <CCard style={{ width: '14rem', cursor: 'pointer' }} onClick={handleClick}>
            <CCardImage orientation="top" src={ppob} />
            <CCardBody className="text-center">
              <CCardTitle>PPOB Name</CCardTitle>
              <CCardText>Category: Lorem</CCardText>
              <CCardText>Lorem ipsum dolor sit amet, consectetur.</CCardText>
              <CBadge color="success" shape="rounded-pill">
                Active
              </CBadge>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol className="d-flex justify-content-center mb-3">
          <CCard style={{ width: '14rem', cursor: 'pointer' }} onClick={handleClick}>
            <CCardImage orientation="top" src={ppob} />
            <CCardBody className="text-center">
              <CCardTitle>PPOB Name</CCardTitle>
              <CCardText>Category: Lorem</CCardText>
              <CCardText>Lorem ipsum dolor sit amet, consectetur.</CCardText>
              <CBadge color="dark" shape="rounded-pill">
                Not active
              </CBadge>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol className="d-flex justify-content-center mb-3">
          <CCard style={{ width: '14rem', cursor: 'pointer' }} onClick={handleClick}>
            <CCardImage orientation="top" src={ppob} />
            <CCardBody className="text-center">
              <CCardTitle>PPOB Name</CCardTitle>
              <CCardText>Category: Lorem</CCardText>
              <CCardText>Lorem ipsum dolor sit amet, consectetur.</CCardText>
              <CBadge color="success" shape="rounded-pill">
                Active
              </CBadge>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol className="d-flex justify-content-center mb-3">
          <CCard style={{ width: '14rem', cursor: 'pointer' }} onClick={handleClick}>
            <CCardImage orientation="top" src={ppob} />
            <CCardBody className="text-center">
              <CCardTitle>PPOB Name</CCardTitle>
              <CCardText>Category: Lorem</CCardText>
              <CCardText>Lorem ipsum dolor sit amet, consectetur.</CCardText>
              <CBadge color="dark" shape="rounded-pill">
                Not active
              </CBadge>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol className="d-flex justify-content-center mb-3">
          <CCard style={{ width: '14rem', cursor: 'pointer' }} onClick={handleClick}>
            <CCardImage orientation="top" src={ppob} />
            <CCardBody className="text-center">
              <CCardTitle>PPOB Name</CCardTitle>
              <CCardText>Category: Lorem</CCardText>
              <CCardText>Lorem ipsum dolor sit amet, consectetur.</CCardText>
              <CBadge color="success" shape="rounded-pill">
                Active
              </CBadge>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol className="d-flex justify-content-center mb-3">
          <CCard style={{ width: '14rem', cursor: 'pointer' }} onClick={handleClick}>
            <CCardImage orientation="top" src={ppob} />
            <CCardBody className="text-center">
              <CCardTitle>PPOB Name</CCardTitle>
              <CCardText>Category: Lorem</CCardText>
              <CCardText>Lorem ipsum dolor sit amet, consectetur.</CCardText>
              <CBadge color="success" shape="rounded-pill">
                Active
              </CBadge>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol className="d-flex justify-content-center mb-3">
          <CCard style={{ width: '14rem', cursor: 'pointer' }} onClick={handleClick}>
            <CCardImage orientation="top" src={ppob} />
            <CCardBody className="text-center">
              <CCardTitle>PPOB Name</CCardTitle>
              <CCardText>Category: Lorem</CCardText>
              <CCardText>Lorem ipsum dolor sit amet, consectetur.</CCardText>
              <CBadge color="dark" shape="rounded-pill">
                Not active
              </CBadge>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol className="d-flex justify-content-center mb-3">
          <CCard style={{ width: '14rem', cursor: 'pointer' }} onClick={handleClick}>
            <CCardImage orientation="top" src={ppob} />
            <CCardBody className="text-center">
              <CCardTitle>PPOB Name</CCardTitle>
              <CCardText>Category: Lorem</CCardText>
              <CCardText>Lorem ipsum dolor sit amet, consectetur.</CCardText>
              <CBadge color="success" shape="rounded-pill">
                Active
              </CBadge>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol className="d-flex justify-content-center mb-3">
          <CCard style={{ width: '14rem', cursor: 'pointer' }} onClick={handleClick}>
            <CCardImage orientation="top" src={ppob} />
            <CCardBody className="text-center">
              <CCardTitle>PPOB Name</CCardTitle>
              <CCardText>Category: Lorem</CCardText>
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

export default ProductsPpob
