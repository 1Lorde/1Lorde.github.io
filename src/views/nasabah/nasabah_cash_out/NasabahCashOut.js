import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'
import { useTranslation } from 'react-i18next'

const NasabahCashOut = () => {
  const { t } = useTranslation()

  return (
    <CContainer className="d-flex justify-content-center">
      <CCard style={{ width: '35rem' }}>
        <CCardHeader component="h4" className="p-3">
          {t('cash_out')}
        </CCardHeader>
        <CCardBody>
          <CForm>
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
            <br />
            <hr />
            <div className="mb-3">
              <CFormLabel htmlFor="nominal">{t('nominal')}</CFormLabel>
              <CFormInput type="text" id="nominal" />
            </div>

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

export default NasabahCashOut
