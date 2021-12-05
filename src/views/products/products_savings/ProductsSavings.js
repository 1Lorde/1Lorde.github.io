import React, { useEffect, useState } from 'react'
import {
  CBadge,
  CButton,
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
import { getProducts } from '../../../api/api_product'

const ProductsSavings = () => {
  const history = useHistory()
  const [products, setProducts] = useState([])
  const [hasLoaded, setHasLoaded] = useState()
  const [searchQuery, setSearchQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState('')

  useEffect(() => {
    getProducts('', typeFilter).then((data) => {
      if (data.ok === true) {
        setProducts(data.products)
        setHasLoaded(true)
      }
    })
  }, [searchQuery, typeFilter])

  return hasLoaded ? (
    <CContainer>
      <CRow className="align-items-end">
        <CCol xs={6}>
          <CFormLabel htmlFor="search">Search</CFormLabel>
          <CFormInput
            type="text"
            id="searchInput"
            placeholder="Enter search query.."
            onChange={(e) => {
              setSearchQuery(e.target.value)
            }}
          />
        </CCol>
        <CCol>
          <CFormLabel htmlFor="category">Category</CFormLabel>
          <CFormSelect
            id="category"
            onChange={(e) => {
              setTypeFilter(e.target.value)
            }}
          >
            <option value="">All</option>
            <option value="savings">Savings</option>
            <option value="credits">Credits</option>
          </CFormSelect>
        </CCol>
        <CCol>
          <CFormLabel htmlFor="sort">Sort By</CFormLabel>
          <CFormSelect id="sort"></CFormSelect>
        </CCol>
        <CCol>
          <CButton color="primary" onClick={() => history.push('/products/savings/create')}>
            Add New
          </CButton>
        </CCol>
      </CRow>
      <br />

      <CRow className="justify-content-start">
        {products?.map((product, index) => {
          return (
            <CCol key={index} xxl={3} md={5} className="mb-4">
              <CCard
                style={{ width: '18rem', height: '100%', cursor: 'pointer' }}
                onClick={() => {
                  history.push({ pathname: '/products/savings/details', state: product })
                }}
              >
                <CCardImage
                  orientation="top"
                  src={'https://via.placeholder.com/550x390.png?text=' + product.name}
                />
                <CCardBody className="text-center">
                  <CCardTitle>{product.name}</CCardTitle>
                  <CCardText>{product.description}</CCardText>
                  {product.active ? (
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

export default ProductsSavings
