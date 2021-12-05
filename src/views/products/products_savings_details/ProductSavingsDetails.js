import React, { useEffect, useState } from 'react'
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
import Loader from '../../../components/Loader'
import { store } from 'react-notifications-component'
import { danger, success } from '../../../helpers/notifications'
import { useHistory } from 'react-router-dom'
import { updateProduct } from '../../../api/api_product'

const ProductSavingsDetails = (props) => {
  const history = useHistory()
  const [product, setProduct] = useState()
  const [hasLoaded, setHasLoaded] = useState()

  useEffect(
    () => {
      // eslint-disable-next-line react/prop-types
      if (!props.location.state) {
        history.push('/products/savings')
      }
      // eslint-disable-next-line react/prop-types
      setProduct(props.location.state)
      setHasLoaded(true)
      // eslint-disable-next-line react/prop-types
      console.log(props.location.state)
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  function tryParseInt(text) {
    const parsed = parseInt(text)
    if (isNaN(parsed)) {
      return ''
    }
    return parsed
  }

  function handleEdit() {
    console.log(product)
    updateProduct(product).then((data) => {
      console.log(data)
      if (data.ok) {
        store.addNotification(success('Product updated'))
      } else {
        store.addNotification(danger(data.message))
      }
    })
  }

  return hasLoaded ? (
    <CForm>
      <CRow xs={{ cols: 1 }} md={{ cols: 2 }} className="mb-4">
        <CCol>
          <CFormLabel htmlFor="type">Type of Product</CFormLabel>
          <CFormSelect id="type" value={product.tipe} disabled>
            <option value="savings">Savings</option>
            <option value="credits">Credits</option>
          </CFormSelect>
          <CContainer fluid className="d-flex justify-content-center mb-5">
            <CImage
              thumbnail
              rounded
              src={'https://via.placeholder.com/550x390.png?text=' + product.name}
              width={500}
              height={500}
              className="mt-5"
            />
          </CContainer>
        </CCol>
        <CCol>
          <div className="mb-2">
            <CFormLabel htmlFor="name">Products Name</CFormLabel>
            <CFormInput
              type="text"
              id="name"
              value={product.name}
              onChange={(e) => {
                setProduct((product) => ({ ...product, name: e.target.value }))
              }}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="description">Description</CFormLabel>
            <CFormTextarea
              type="text"
              id="description"
              rows="3"
              value={product.description}
              onChange={(e) => {
                setProduct((product) => ({ ...product, description: e.target.value }))
              }}
            />
          </div>

          <h5>Balance</h5>
          <div className="ms-4 mb-2">
            <CFormLabel htmlFor="start">Start</CFormLabel>
            <CFormInput
              type="number"
              id="start"
              value={product.balance_start}
              onChange={(e) => {
                setProduct((product) => ({
                  ...product,
                  balance_start: tryParseInt(e.target.value),
                }))
              }}
            />
          </div>
          <div className="ms-4 mb-2">
            <CFormLabel htmlFor="min">Minimal</CFormLabel>
            <CFormInput type="number" id="min" />
          </div>

          <h5>Rate</h5>
          <CRow className="ms-3 mb-3">
            <CCol xs={4}>
              <CFormLabel htmlFor="percent_rate">Percentage</CFormLabel>
              <CFormInput
                type="number"
                id="percent_rate"
                value={product.percent_rate}
                onChange={(e) => {
                  setProduct((product) => ({
                    ...product,
                    percent_rate: tryParseInt(e.target.value),
                  }))
                }}
              />
            </CCol>
            <CCol>
              <CFormLabel htmlFor="rate_type">Type</CFormLabel>
              <CFormSelect
                id="rate_type"
                defaultValue={product.rate_type}
                onChange={(e) => {
                  setProduct((product) => ({
                    ...product,
                    rate_type: e.target.value,
                  }))
                }}
              >
                <option value="fix">Fix</option>
                <option value="efektif">Efektif</option>
                <option value="syaria">Syaria</option>
              </CFormSelect>
            </CCol>
          </CRow>

          <h5>Requirements</h5>
          <CRow className="mb-3 ms-3">
            <CCol>
              <CFormLabel htmlFor="limit_min">Limit Min</CFormLabel>
              <CFormInput
                type="number"
                id="limit_min"
                value={product.limit_min}
                onChange={(e) => {
                  setProduct((product) => ({
                    ...product,
                    limit_min: tryParseInt(e.target.value),
                  }))
                }}
              />
            </CCol>
            <CCol>
              <CFormLabel htmlFor="limit_max">Limit Max</CFormLabel>
              <CFormInput
                type="number"
                id="limit_max"
                value={product.limit_max}
                onChange={(e) => {
                  setProduct((product) => ({
                    ...product,
                    limit_max: tryParseInt(e.target.value),
                  }))
                }}
              />
            </CCol>
          </CRow>

          <CFormLabel htmlFor="status">Status</CFormLabel>
          <CFormSelect
            id="status"
            value={product.active}
            onChange={(e) => {
              setProduct((product) => ({
                ...product,
                active: e.target.value === 'true',
              }))
            }}
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </CFormSelect>
        </CCol>
      </CRow>
      <CRow xs={{ cols: 1 }} md={{ cols: 2 }}>
        <CCol className="d-grid d-md-flex justify-content-md-start mb-3">
          <CButton color="primary" variant="outline">
            Register Nasabah to this Product
          </CButton>
        </CCol>
        <CCol className="d-grid d-md-flex justify-content-md-end mb-3" onClick={handleEdit}>
          <CButton color="primary">Edit</CButton>
        </CCol>
      </CRow>
    </CForm>
  ) : (
    Loader()
  )
}

export default ProductSavingsDetails
