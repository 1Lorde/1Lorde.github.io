import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
} from '@coreui/react'
import Loader from '../../../components/Loader'
import { store } from 'react-notifications-component'
import { danger, success } from '../../../helpers/notifications'
import { useHistory, useParams } from 'react-router-dom'
import { getVendor, updateVendor } from '../../../api/api_vendors'
import { useTranslation } from 'react-i18next'

const VendorDetails = () => {
  const history = useHistory()
  const { t } = useTranslation()
  const { id } = useParams()
  const [vendor, setVendor] = useState()
  const [hasLoaded, setHasLoaded] = useState()

  useEffect(
    () => {
      getVendor(id).then((data) => {
        if (data.ok) {
          setVendor(data.vendor)
          setHasLoaded(true)
        } else {
          if (data.message) {
            store.addNotification(success(data.message))
          } else {
            console.log(data)
            store.addNotification(danger(data.error))
          }
        }
      })
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  function handleEdit() {
    console.log(vendor)
    updateVendor(vendor).then((data) => {
      console.log(data)
      if (data.ok) {
        store.addNotification(success('Vendor updated'))
        history.push('/ppob/vendors')
      } else {
        store.addNotification(danger(data.message))
      }
    })
  }

  return hasLoaded ? (
    <CContainer className="d-flex justify-content-center">
      <CCard style={{ width: '35rem' }}>
        <CCardBody>
          <CForm>
            <div className="mb-3">
              <CFormLabel htmlFor="fullnameInput">{t('company_name')}</CFormLabel>
              <CFormInput
                type="text"
                id="nameInput"
                defaultValue={vendor.name}
                onChange={(e) => {
                  setVendor((vendor) => ({ ...vendor, name: e.target.value }))
                }}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="descInput">{t('description')}</CFormLabel>
              <CFormTextarea
                type="text"
                id="descInput"
                defaultValue={vendor.desc}
                onChange={(e) => {
                  setVendor((vendor) => ({ ...vendor, desc: e.target.value }))
                }}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="apiInput">API URL</CFormLabel>
              <CFormInput
                type="text"
                id="apiInput"
                defaultValue={vendor.api_base_url}
                onChange={(e) => {
                  setVendor((vendor) => ({ ...vendor, api_base_url: e.target.value }))
                }}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="statusInput">{t('status')}</CFormLabel>
              <CFormSelect
                type="text"
                id="statusInput"
                defaultValue={vendor.status}
                onChange={(e) => {
                  setVendor((vendor) => ({ ...vendor, status: e.target.value }))
                }}
              >
                <option value="NOT-ACTIVE">Inactive</option>
                <option value="ACTIVE">Active</option>
              </CFormSelect>
            </div>
            <div className="d-flex justify-content-between">
              <CButton color="primary" variant="outline" onClick={handleEdit}>
                {t('edit')}
              </CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </CContainer>
  ) : (
    Loader()
  )
}

export default VendorDetails
