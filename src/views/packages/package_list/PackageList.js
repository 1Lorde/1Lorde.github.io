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
  CRow,
} from '@coreui/react'

import { useHistory } from 'react-router-dom'
import Loader from '../../../components/Loader'
import { getAdminPackages } from '../../../api/api_package'
import { useTranslation } from 'react-i18next'

const PackageList = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const [packages, setPackages] = useState([])
  const [hasLoaded, setHasLoaded] = useState()

  useEffect(() => {
    getAdminPackages().then((data) => {
      if (data.ok === true) {
        console.log(data)
        setPackages(data.data)
        setHasLoaded(true)
      }
    })
  }, [])

  return hasLoaded ? (
    <CContainer>
      <CRow className="align-items-center">
        <CCol className={'d-flex justify-content-end'}>
          <CButton color="primary" onClick={() => history.push('/packages/create')}>
            {t('add_new')}
          </CButton>
        </CCol>
      </CRow>

      <CRow className="mt-5 justify-content-start">
        {packages?.map((pack, index) => {
          return (
            <CCol key={index} xxl={3} md={5} className="mb-4">
              <CCard
                style={{ width: '18rem', height: '100%', cursor: 'pointer' }}
                onClick={() => {
                  history.push('/packages/' + pack.id)
                }}
              >
                <CCardImage
                  orientation="top"
                  src={'https://via.placeholder.com/550x390.png?text=' + pack.name}
                />
                <CCardBody className="text-center">
                  <CCardTitle>{pack.name}</CCardTitle>
                  <CCardText>{pack.description}</CCardText>
                  {pack.active ? (
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

export default PackageList
