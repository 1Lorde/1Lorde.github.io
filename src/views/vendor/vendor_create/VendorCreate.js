import React, { useState } from 'react'
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
import { store } from 'react-notifications-component'
import { danger, success } from '../../../helpers/notifications'
import { useHistory } from 'react-router-dom'
import { createVendor } from '../../../api/api_vendors'
import { useTranslation } from 'react-i18next'

const VendorCreate = () => {
  const history = useHistory()
  const { t } = useTranslation()
  const [vendor, setVendor] = useState({ type: 'rajabiller' })
  const [validated, setValidated] = useState(false)

  const handleCreate = (event) => {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    if (form.checkValidity()) {
      console.log(vendor)
      createVendor(vendor).then((data) => {
        if (data.ok) {
          store.addNotification(success(t('success')))
          history.push('/ppob/vendors')
        } else {
          store.addNotification(danger(data.message))
        }
      })
    }
  }

  return (
    <CContainer className="d-flex justify-content-center">
      <CCard style={{ width: '35rem' }}>
        <CCardBody>
          <CForm noValidate validated={validated} onSubmit={handleCreate}>
            <div className="mb-3">
              <CFormLabel htmlFor="typeInput">{t('type')}</CFormLabel>
              <CFormSelect
                type="text"
                id="typeInput"
                onChange={(e) => {
                  setVendor((vendor) => ({ ...vendor, type: e.target.value }))
                }}
              >
                <option value="rajabiller">Raja Biller</option>
                <option value="mobilepulsa">Mobile Pulsa</option>
              </CFormSelect>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="fullnameInput">{t('company_name')}</CFormLabel>
              <CFormInput
                required
                type="text"
                id="nameInput"
                onChange={(e) => {
                  setVendor((vendor) => ({ ...vendor, name: e.target.value }))
                }}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="descInput">{t('description')}</CFormLabel>
              <CFormTextarea
                required
                type="text"
                id="descInput"
                onChange={(e) => {
                  setVendor((vendor) => ({ ...vendor, desc: e.target.value }))
                }}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="apiInput">API URL</CFormLabel>
              <CFormInput
                required
                type="text"
                id="apiInput"
                onChange={(e) => {
                  setVendor((vendor) => ({ ...vendor, api_base_url: e.target.value }))
                }}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="apiUsernameInput">Username</CFormLabel>
              <CFormInput
                required
                type="text"
                id="apiUsernameInput"
                onChange={(e) => {
                  setVendor((vendor) => ({ ...vendor, api_username: e.target.value }))
                }}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="apiKeyInput">API Key</CFormLabel>
              <CFormInput
                required
                type="text"
                id="apiKeyInput"
                onChange={(e) => {
                  setVendor((vendor) => ({ ...vendor, api_key: e.target.value }))
                }}
              />
            </div>
            <div className="d-flex justify-content-between">
              <CButton color="primary" variant="outline" type="submit">
                {t('add_new')}
              </CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default VendorCreate
