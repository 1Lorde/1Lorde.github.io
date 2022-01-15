import React from 'react'
import {
  CButton,
  CCallout,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'
import { useTranslation } from 'react-i18next'

const NasabahTransfer = () => {
  const { t } = useTranslation()
  return (
    <CContainer fluid>
      <CCardHeader component="h4" className="p-3">
        {t('transfer')}
      </CCardHeader>
      <CCard>
        <CCardBody>
          <CForm>
            <CRow>
              <CCol className="ps-5">
                <CCallout color="primary">
                  <h5>{t('sender')}</h5>
                  <br />
                  <div className="mb-3">
                    <CFormLabel htmlFor="name">{t('name')}</CFormLabel>
                    <CFormInput type="text" id="name" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="accountNumber">{t('account_number')}</CFormLabel>
                    <CFormInput type="text" id="accountNumber" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="type">{t('account_type')}</CFormLabel>
                    <CFormSelect id="type">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </CFormSelect>
                  </div>
                </CCallout>
              </CCol>

              <CCol className="pe-5">
                <CCallout color="info">
                  <h5>{t('receiver')}</h5>
                  <br />
                  <div className="mb-3">
                    <CFormLabel htmlFor="name">{t('name')}</CFormLabel>
                    <CFormInput type="text" id="name" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="accountNumber">{t('account_number')}</CFormLabel>
                    <CFormInput type="text" id="accountNumber" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="type">{t('account_type')}</CFormLabel>
                    <CFormSelect id="type">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </CFormSelect>
                  </div>
                </CCallout>
              </CCol>
            </CRow>

            <CRow>
              <CCol className="ps-5" xs={6}>
                <CCallout color="dark">
                  <div className="mb-3">
                    <CFormLabel htmlFor="nominal">{t('nominal')}</CFormLabel>
                    <CFormInput type="text" id="nominal" />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="berita">{t('berita')}</CFormLabel>
                    <CFormInput type="text" id="berita" />
                  </div>
                </CCallout>
              </CCol>
            </CRow>
            <CRow>
              <div className="d-flex justify-content-end">
                <CButton color="primary">{t('submit')}</CButton>
              </div>
            </CRow>
          </CForm>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default NasabahTransfer
