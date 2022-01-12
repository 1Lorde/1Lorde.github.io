import React, { useContext, useEffect, useState } from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CImage,
  CRow,
} from '@coreui/react'
import { UserContext } from '../../helpers/user'
import { store } from 'react-notifications-component'
import { success } from '../../helpers/notifications'
import { updateProfileCompany } from '../../api/api_client'
import Page404 from '../pages/page404/Page404'

const MyCompany = () => {
  const { userState } = useContext(UserContext)
  const [company, setCompany] = useState({})
  const [hasCompany, setHasCompany] = useState({})

  useEffect(() => {
    setHasCompany(userState.company)
    console.log(hasCompany)
  }, [])

  const handleEdit = () => {
    updateProfileCompany(userState.company.id, company).then((data) => {
      if (data.ok) {
        store.addNotification(success('Company details updated'))
      } else {
        console.log(data)
      }
    })
  }

  return hasCompany ? (
    <CForm>
      <CRow>
        <CCol>
          <div className="mb-3">
            <CFormLabel htmlFor="company_name">Company name</CFormLabel>
            <CFormInput
              type="text"
              id="company_name"
              placeholder="No data provided"
              defaultValue={userState.company?.company}
              onChange={(e) => {
                setCompany((company) => ({ ...company, company: e.target.value }))
              }}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="address">Address</CFormLabel>
            <CFormInput
              type="text"
              id="address"
              placeholder="No data provided"
              defaultValue={userState.company?.address}
              onChange={(e) => {
                setCompany((company) => ({ ...company, address: e.target.value }))
              }}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="npwp">NPWP Number</CFormLabel>
            <CFormInput
              type="text"
              id="npwp"
              placeholder="No data provided"
              defaultValue={userState.company?.documents?.NPWP?.no}
              onChange={(e) => {
                setCompany((company) => ({
                  ...company,
                  documents: {
                    ...company.documents,
                    NPWP: {
                      ...company.documents.NPWP,
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
              placeholder="No data provided"
              defaultValue={userState.company?.documents?.SIUP?.no}
              onChange={(e) => {
                setCompany((company) => ({
                  ...company,
                  documents: {
                    ...company.documents,
                    SIUP: {
                      ...company.documents.SIUP,
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
              type="text"
              id="tdp"
              placeholder="No data provided"
              defaultValue={userState.company?.documents?.TDP?.no}
              onChange={(e) => {
                setCompany((company) => ({
                  ...company,
                  documents: {
                    ...company.documents,
                    TDP: {
                      ...company.documents.TDP,
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
              src={'https://via.placeholder.com/550x390.png?text=' + userState.company?.company}
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
            <CFormLabel htmlFor="website">Website</CFormLabel>
            <CFormInput type="text" id="website" placeholder="No data provided" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="subscription">Subscription Package</CFormLabel>
            <CFormInput
              type="text"
              id="subscription"
              placeholder="No data provided"
              defaultValue={userState.company?.package?.name}
              disabled
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="status">Status</CFormLabel>
            <CFormInput
              type="text"
              id="status"
              placeholder="No data provided"
              defaultValue={userState.company?.status}
              disabled
            />
          </div>
        </CCol>
        <CCol>
          <div className="mb-3">
            <CFormLabel htmlFor="director">Director Name</CFormLabel>
            <CFormInput
              type="text"
              id="director"
              defaultValue={userState.company?.contact?.dir_name}
              disabled
              placeholder="No data provided"
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="ktp">KTP Number</CFormLabel>
            <CFormInput
              type="text"
              id="ktp"
              placeholder="No data provided"
              defaultValue={userState.company?.contact?.ktp_id}
              disabled
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="wa">WhatsApp Number</CFormLabel>
            <CFormInput
              type="text"
              id="wa"
              placeholder="No data provided"
              defaultValue={userState.company?.contact?.wa_number}
              disabled
            />
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
    Page404()
  )
}

export default MyCompany
