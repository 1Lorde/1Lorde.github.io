import React, { useEffect, useState } from 'react'
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
import { useHistory } from 'react-router-dom'
import Loader from '../../../components/Loader'
import { useTranslation } from 'react-i18next'

const ProductsPpobDetailsBuy = (props) => {
  const { t } = useTranslation()
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

  return hasLoaded ? (
    <CContainer className="d-flex justify-content-center">
      <CCard style={{ width: '35rem' }}>
        <CCardHeader component="h4" className="p-3">
          Buy {service.name}
        </CCardHeader>
        <CCardBody>
          <CForm>
            <div className="mb-3">
              <CFormLabel htmlFor="type">{t('type')}</CFormLabel>
              <CFormSelect id="type">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CFormSelect>
            </div>
            <div className="mb-4">
              <CFormLabel htmlFor="accountNumber">{t('account_number')}</CFormLabel>
              <CFormInput type="text" id="accountNumber" />
            </div>
            <div className="mb-3">
              <p>{t('available_nominal')}</p>
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
              <CFormLabel htmlFor="price">{t('price_to_pay')}</CFormLabel>
              <CFormInput type="text" id="price" />
            </div>
            <CRow>
              <div className="d-flex justify-content-end">
                <CButton color="primary">{t('buy')}</CButton>
              </div>
            </CRow>
          </CForm>
        </CCardBody>
      </CCard>
    </CContainer>
  ) : (
    Loader()
  )
}

export default ProductsPpobDetailsBuy
