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
  CRow,
} from '@coreui/react'

import { useHistory } from 'react-router-dom'
import Loader from '../../../components/Loader'
import { getProducts } from '../../../api/api_product'
import { useTranslation } from 'react-i18next'

// eslint-disable-next-line react/prop-types
const Products = ({ typeFilter }) => {
  const { t } = useTranslation()
  const history = useHistory()
  const [products, setProducts] = useState([])
  const [hasLoaded, setHasLoaded] = useState()
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    getProducts(searchQuery, typeFilter).then((data) => {
      if (data.ok === true) {
        console.log(data)
        setProducts(data.products)
        setHasLoaded(true)
      }
    })
  }, [searchQuery, typeFilter])

  return hasLoaded ? (
    <CContainer>
      <CRow className="align-items-end">
        <CCol xs={6}>
          <CFormLabel htmlFor="search">{t('search')}</CFormLabel>
          <CFormInput
            type="text"
            id="searchInput"
            placeholder={t('enter_search_query')}
            onChange={(e) => {
              setSearchQuery(e.target.value)
            }}
          />
        </CCol>
        <CCol>
          <CButton color="primary" onClick={() => history.push('/products/create')}>
            {t('add_new')}
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
                  history.push('/products/' + product.credit_simulation_id)
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
                      {t('active')}
                    </CBadge>
                  ) : (
                    <CBadge color="dark" shape="rounded-pill">
                      {t('inactive')}
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

export default Products
