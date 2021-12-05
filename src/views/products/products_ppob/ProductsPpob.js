import React, { useEffect, useState } from 'react'
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
  CRow,
} from '@coreui/react'

import { useHistory } from 'react-router-dom'
import Loader from '../../../components/Loader'
import { getServices } from '../../../api/api_service'

const ProductsPpob = () => {
  const history = useHistory()
  const [services, setServices] = useState([])
  const [hasLoaded, setHasLoaded] = useState()

  useEffect(() => {
    getServices().then((data) => {
      if (data.ok === true) {
        setServices(data.services)
        setHasLoaded(true)
      }
    })
  }, [])

  return hasLoaded ? (
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

      <CRow className="justify-content-start">
        {services?.map((service, index) => {
          return (
            <CCol key={index} xxl={3} md={5} className="mb-4">
              <CCard
                style={{ width: '18rem', height: '100%', cursor: 'pointer' }}
                onClick={() => {
                  history.push({ pathname: '/products/ppob/details', state: service })
                }}
              >
                <CCardImage
                  orientation="top"
                  src={'https://via.placeholder.com/550x390.png?text=' + service.name}
                />
                <CCardBody className="text-center">
                  <CCardTitle>{service.name}</CCardTitle>
                  <CCardText>{service.desc}</CCardText>
                  {service.active ? (
                    <CBadge color="success" shape="rounded-pill">
                      Active
                    </CBadge>
                  ) : (
                    <CBadge color="dark" shape="rounded-pill">
                      Inactive
                    </CBadge>
                  )}
                </CCardBody>
              </CCard>
            </CCol>
          )
        })}
      </CRow>
    </CContainer>
  ) : (
    Loader()
  )
}

export default ProductsPpob
