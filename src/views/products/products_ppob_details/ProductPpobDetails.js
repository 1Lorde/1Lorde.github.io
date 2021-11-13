import React, { useEffect, useState } from 'react'
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
import { useHistory } from 'react-router-dom'
import Loader from '../../../components/Loader'

const ProductPpobDetails = (props) => {
  const history = useHistory()
  const [service, setService] = useState()
  const [hasLoaded, setHasLoaded] = useState()

  useEffect(
    () => {
      // eslint-disable-next-line react/prop-types
      if (!props.location.state) {
        history.push('/products/ppob')
      }
      // eslint-disable-next-line react/prop-types
      setService(props.location.state)
      setHasLoaded(true)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  function tryParseInt(text) {
    const parsed = parseInt(text)
    if (isNaN(parsed)) {
      return ''
    }
    return parsed
  }

  return hasLoaded ? (
    <CForm>
      <CRow xs={{ cols: 1 }} md={{ cols: 2 }} className="mb-4">
        <CCol>
          <CFormLabel htmlFor="category">Category</CFormLabel>
          <CFormSelect
            id="category"
            defaultValue={service.category}
            onChange={(e) => {
              setService((service) => ({ ...service, category: e.target.value }))
            }}
          >
            <option value="postpaid">Postpaid</option>
          </CFormSelect>
          <CContainer fluid className="d-flex justify-content-center mt-4 mb-3">
            <CImage
              thumbnail
              rounded
              src={'https://via.placeholder.com/550x390.png?text=' + service.name}
              width={500}
              height={500}
            />
          </CContainer>
        </CCol>
        <CCol>
          <div className="mb-2">
            <CFormLabel htmlFor="name">PPOB Name</CFormLabel>
            <CFormInput
              type="text"
              id="name"
              defaultValue={service.name}
              onChange={(e) => {
                setService((service) => ({ ...service, name: e.target.value }))
              }}
            />
          </div>
          <div className="mb-2">
            <CFormLabel htmlFor="description">Description</CFormLabel>
            <CFormTextarea
              type="text"
              id="description"
              rows="3"
              defaultValue={service.desc}
              onChange={(e) => {
                setService((service) => ({ ...service, desc: e.target.value }))
              }}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="vendor">Vendor</CFormLabel>
            <CFormSelect id="vendor" defaultValue={service.vendor_slug_selected}>
              <option defaultValue="rajabiller">Rajabiller</option>
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
                defaultChecked={service.margin_by === 'all'}
              />
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="inlineCheckbox2"
                value="percent"
                readOnly
                label="Percent"
                defaultChecked={service.margin_by === 'percent'}
              />
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="inlineCheckbox3"
                value="fix"
                readOnly
                label="Fix"
                defaultChecked={service.margin_by === 'fix_cost'}
              />
            </CCol>
            <CCol>
              <CFormInput
                type="text"
                id="nominal"
                defaultValue={service.nominal}
                onChange={(e) => {
                  setService((service) => ({ ...service, nominal: tryParseInt(e.target.value) }))
                }}
              />
            </CCol>
          </CRow>
          <CRow className="mb-3 align-items-center">
            <CCol xs={5}>Retail Price (after margin added)</CCol>
            <CCol>
              <CFormInput type="text" id="retail_price" />
            </CCol>
          </CRow>
          <CFormLabel htmlFor="status">Status</CFormLabel>
          <CFormSelect
            id="status"
            defaultValue={service.active}
            onChange={(e) => {
              setService((service) => ({
                ...service,
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
        <CCol className="d-grid d-md-flex justify-content-md-start mb-2">
          <CButton
            color="primary"
            variant="outline"
            onClick={() => {
              history.push({ pathname: '/products/ppob/details/buy', state: service })
            }}
          >
            Buy
          </CButton>
        </CCol>
        <CCol className="d-grid d-md-flex justify-content-md-end mb-3">
          <CButton color="primary" disabled>
            Edit
          </CButton>
        </CCol>
      </CRow>
    </CForm>
  ) : (
    Loader()
  )
}

export default ProductPpobDetails
