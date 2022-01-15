import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CImage,
  CRow,
} from '@coreui/react'
import { useHistory, useParams } from 'react-router-dom'
import Loader from '../../../components/Loader'
import { store } from 'react-notifications-component'
import { danger, success } from '../../../helpers/notifications'
import { getClient, updateClient } from '../../../api/api_client'
import { useTranslation } from 'react-i18next'

const ClientDetail = () => {
  const { t } = useTranslation()
  const history = useHistory()
  let { id } = useParams()
  const [client, setClient] = useState()
  const [hasLoaded, setHasLoaded] = useState()

  useEffect(
    () => {
      getClient(id).then((profile_data) => {
        setClient(profile_data)
        console.log(profile_data)
        setHasLoaded(true)
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  useEffect(() => {
    console.log(client)
  }, [client])

  const handleEdit = () => {
    console.log(client)
    updateClient(client.id, client).then((data) => {
      if (data.ok) {
        store.addNotification(success(t('notifications.client_update', { client: client.company })))
        history.push('/clients')
      } else {
        if (data.message) {
          console.log(data)
          store.addNotification(danger(data.message))
        } else {
          console.log(data)
          store.addNotification(danger(data.error))
        }
      }
    })
  }

  return hasLoaded ? (
    <CForm>
      <CRow>
        <CCol>
          <div className="mb-3">
            <CFormLabel htmlFor="company_name">{t('company_name')}</CFormLabel>
            <CFormInput
              type="text"
              id="company_name"
              placeholder={t('no_data')}
              value={client.company}
              onChange={(e) => {
                setClient((client) => ({ ...client, company: e.target.value }))
              }}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="address">{t('address')}</CFormLabel>
            <CFormInput
              type="text"
              id="address"
              placeholder={t('no_data')}
              value={client.address}
              onChange={(e) => {
                setClient((client) => ({ ...client, address: e.target.value }))
              }}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="npwp">{t('npwp')}</CFormLabel>
            <CFormInput
              disabled
              type="text"
              id="npwp"
              placeholder={t('no_data')}
              value={client.documents.NPWP?.no}
              onChange={(e) => {
                setClient((client) => ({
                  ...client,
                  documents: {
                    ...client.documents,
                    NPWP: {
                      ...client.documents.NPWP,
                      no: e.target.value,
                    },
                  },
                }))
              }}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="siup">{t('siup')}</CFormLabel>
            <CFormInput
              type="text"
              id="siup"
              disabled
              placeholder={t('no_data')}
              value={client.documents?.SIUP?.no}
              onChange={(e) => {
                setClient((client) => ({
                  ...client,
                  documents: {
                    ...client.documents,
                    SIUP: {
                      ...client.documents.SIUP,
                      no: e.target.value,
                    },
                  },
                }))
              }}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="tdp">{t('tdp')}</CFormLabel>
            <CFormInput
              disabled
              type="text"
              id="tdp"
              placeholder={t('no_data')}
              defaultValue={client.documents.TDP?.no}
              onChange={(e) => {
                setClient((client) => ({
                  ...client,
                  documents: {
                    ...client.documents,
                    TDP: {
                      ...client.documents.TDP,
                      no: e.target.value,
                    },
                  },
                }))
              }}
            />
          </div>
        </CCol>
        <CCol>
          <CContainer fluid className="d-flex justify-content-center">
            <CImage
              rounded
              src={'https://via.placeholder.com/550x390.png?text=' + client.company}
              width={550}
              height={390}
              className="mt-4"
            />
          </CContainer>
        </CCol>
      </CRow>
      <CRow className="mb-4 mt-3">
        <CCol>
          <div className="mb-3">
            <CFormLabel htmlFor="director">{t('director_name')}</CFormLabel>
            <CFormInput
              type="text"
              id="director"
              placeholder={t('no_data')}
              value={client.contact?.dir_name}
              onChange={(e) => {
                setClient((client) => ({
                  ...client,
                  contact: { ...client.contact, dir_name: e.target.value },
                }))
              }}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="ktp">{t('ktp')}</CFormLabel>
            <CFormInput
              disabled
              type="text"
              id="ktp"
              placeholder={t('no_data')}
              value={client.contact?.ktp_id}
              onChange={(e) => {
                setClient((client) => ({
                  ...client,
                  contact: { ...client.contact, ktp_id: e.target.value },
                }))
              }}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="wa">{t('whatsapp')}</CFormLabel>
            <CFormInput
              disabled
              type="text"
              id="wa"
              placeholder={t('no_data')}
              defaultValue={client.contact?.wa_number}
              onChange={(e) => {
                setClient((client) => ({
                  ...client,
                  contact: { ...client.contact, wa_number: e.target.value },
                }))
              }}
            />
          </div>
        </CCol>
        <CCol>
          <div className="mb-3">
            <CFormLabel htmlFor="subscription">{t('subscription_package')}</CFormLabel>
            <CFormInput
              disabled
              type="text"
              id="subscription"
              placeholder={t('no_data')}
              value={client.package?.name}
              onChange={(e) => {
                setClient((client) => ({
                  ...client,
                  package: { ...client.package, name: e.target.value },
                }))
              }}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="status">{t('status')}</CFormLabel>
            <CFormSelect
              disabled
              id="status"
              placeholder={t('no_data')}
              value={client.status}
              onChange={(e) => {
                setClient((client) => ({ ...client, status: e.target.value }))
              }}
            >
              <option value="">{t('all')}</option>
              <option value="REQUEST">{t('request')}</option>
              <option value="VERIFIED">{t('verified')}</option>
              <option value="ACTIVE">{t('active')}</option>
              <option value="REJECT">{t('reject')}</option>
              <option value="NON_ACTIVE">{t('inactive')}</option>
              <option value="FAILED">{t('failed')}</option>
            </CFormSelect>
          </div>
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <div className="d-flex justify-content-end">
          <CButton color="primary" onClick={handleEdit}>
            {t('edit')}
          </CButton>
        </div>
      </CRow>
    </CForm>
  ) : (
    Loader()
  )
}

export default ClientDetail
