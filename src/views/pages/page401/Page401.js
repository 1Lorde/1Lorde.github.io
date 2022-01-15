import React from 'react'
import { CButton, CCol, CContainer, CRow } from '@coreui/react'
import { useTranslation } from 'react-i18next'

const Page401 = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <div className="clearfix">
              <h1 className="float-start display-2 me-4">401</h1>
              <h4 className="pt-3">{t('401_title')}</h4>
              <p className="text-medium-emphasis float-start">{t('401_description')}</p>
            </div>
          </CCol>
        </CRow>
        <CRow className="mt-4">
          <CCol className="d-flex justify-content-center">
            <CButton color="primary" variant="outline" href="/#/login">
              {t('return')}
            </CButton>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page401
