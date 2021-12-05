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

const ClientDetail = () => {
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
        store.addNotification(success('Client ' + client.company + ' updated successfully.'))
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
            <CFormLabel htmlFor="company_name">Company name</CFormLabel>
            <CFormInput
              type="text"
              id="company_name"
              placeholder="No data provided"
              value={client.company}
              onChange={(e) => {
                setClient((client) => ({ ...client, company: e.target.value }))
              }}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="address">Address</CFormLabel>
            <CFormInput
              type="text"
              id="address"
              placeholder="No data provided"
              value={client.address}
              onChange={(e) => {
                setClient((client) => ({ ...client, address: e.target.value }))
              }}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="npwp">NPWP Number</CFormLabel>
            <CFormInput
              disabled
              type="text"
              id="npwp"
              placeholder="No data provided"
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
            <CFormLabel htmlFor="siup">SIUP Number</CFormLabel>
            <CFormInput
              type="text"
              id="siup"
              disabled
              placeholder="No data provided"
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
            <CFormLabel htmlFor="tdp">TDP Number</CFormLabel>
            <CFormInput
              disabled
              type="text"
              id="tdp"
              placeholder="No data provided"
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
            <CFormLabel htmlFor="director">Director Name</CFormLabel>
            <CFormInput
              type="text"
              id="director"
              placeholder="No data provided"
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
            <CFormLabel htmlFor="ktp">KTP Number</CFormLabel>
            <CFormInput
              disabled
              type="text"
              id="ktp"
              placeholder="No data provided"
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
            <CFormLabel htmlFor="wa">WhatsApp Number</CFormLabel>
            <CFormInput
              disabled
              type="text"
              id="wa"
              placeholder="No data provided"
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
            <CFormLabel htmlFor="subscription">Subscription Package</CFormLabel>
            <CFormInput
              disabled
              type="text"
              id="subscription"
              placeholder="No data provided"
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
            <CFormLabel htmlFor="status">Status</CFormLabel>
            <CFormSelect
              disabled
              id="status"
              placeholder="No data provided"
              value={client.status}
              onChange={(e) => {
                setClient((client) => ({ ...client, status: e.target.value }))
              }}
            >
              <option value="">All</option>
              <option value="REQUEST">Request</option>
              <option value="VERIFIED">Verified</option>
              <option value="ACTIVE">Active</option>
              <option value="REJECT">Reject</option>
              <option value="NON_ACTIVE">Non active</option>
              <option value="FAILED">Failed</option>
            </CFormSelect>
          </div>
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <div className="d-flex justify-content-end">
          <CButton color="primary" onClick={handleEdit}>
            Edit
          </CButton>
        </div>
      </CRow>
    </CForm>
  ) : (
    Loader()
  )
}

export default ClientDetail
