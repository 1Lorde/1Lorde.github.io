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
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader'
import { getClient } from '../../api/api_client'

const CompanyInfo = () => {
  let { id } = useParams()
  const [user, setUser] = useState()
  const [hasLoaded, setHasLoaded] = useState()

  useEffect(
    () => {
      getClient(id).then((profile_data) => {
        setUser(profile_data)
        console.log(profile_data)
        setHasLoaded(true)
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  return hasLoaded ? (
    <CForm>
      <CRow>
        <CCol>
          <div className="mb-3">
            <CFormLabel htmlFor="company_name">Company name</CFormLabel>
            <CFormInput
              type="text"
              id="company_name"
              defaultValue={user.company.company}
              placeholder="No data provided"
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="address">Address</CFormLabel>
            <CFormInput
              type="text"
              id="address"
              defaultValue={user.company.address}
              placeholder="No data provided"
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="npwp">NPWP Number</CFormLabel>
            <CFormInput
              type="text"
              id="npwp"
              defaultValue={user.company.documents.NPWP?.no}
              placeholder="No data provided"
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="siup">SIUP Number</CFormLabel>
            <CFormInput
              type="text"
              id="siup"
              defaultValue={user.company.documents.SIUP?.no}
              placeholder="No data provided"
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="tdp">TDP Number</CFormLabel>
            <CFormInput
              type="text"
              id="tdp"
              defaultValue={user.company.documents.TDP?.no}
              placeholder="No data provided"
            />
          </div>
        </CCol>
        <CCol>
          <CContainer fluid className="d-flex justify-content-center">
            <CImage
              rounded
              src={'https://via.placeholder.com/550x390.png?text=' + user.company.company}
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
              defaultValue={user.company.package?.name}
              placeholder="No data provided"
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="status">Status</CFormLabel>
            <CFormInput
              type="text"
              id="status"
              defaultValue={user.company.status}
              placeholder="No data provided"
            />
          </div>
        </CCol>
        <CCol>
          <div className="mb-3">
            <CFormLabel htmlFor="director">Director Name</CFormLabel>
            <CFormInput
              type="text"
              id="director"
              defaultValue={user.company.contact?.dir_name}
              placeholder="No data provided"
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="ktp">KTP Number</CFormLabel>
            <CFormInput
              type="text"
              id="ktp"
              defaultValue={user.company.contact?.ktp_id}
              placeholder="No data provided"
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="wa">WhatsApp Number</CFormLabel>
            <CFormInput
              type="text"
              id="wa"
              defaultValue={user.company.contact?.wa_number}
              placeholder="No data provided"
            />
          </div>
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <div className="d-flex justify-content-end">
          <CButton color="primary">Edit</CButton>
        </div>
      </CRow>
    </CForm>
  ) : (
    Loader()
  )
}

export default CompanyInfo
