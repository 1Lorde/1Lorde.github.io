import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
} from '@coreui/react'

import avatar from '../../assets/images/profile.jpg'
import UserService from '../../services/user.service'
import { useHistory } from 'react-router-dom'

const MyProfile = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push('/profile/change_password')
  }

  let profile = {}
  // UserService.getProfile().then((e) => {
  //   profile = e.data.data
  //   console.log(profile)
  // })

  return (
    <CContainer className="d-flex justify-content-center">
      <CCard style={{ width: '35rem' }}>
        <CCardImage orientation="top" src={avatar} />
        <CCardBody>
          <CForm>
            <div className="mb-3">
              <CFormLabel htmlFor="fullnameInput">Full Name</CFormLabel>
              <CFormInput type="text" id="fullnameInput" value={profile.name} />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="ktpnumberInput">KTP Number</CFormLabel>
              <CFormInput type="text" id="ktpnumberInput" value={profile.ktp_id} />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="wanumberInput">WhatsApp Number</CFormLabel>
              <CFormInput type="text" id="wanumberInput" value={profile.wa_number} />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="addressInput">Address</CFormLabel>
              <CFormInput type="text" id="addressInput" value={profile.address} />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="positionInput">Position</CFormLabel>
              <CFormInput type="text" id="positionInput" value={profile.role} />
            </div>
            <div className="mb-4">
              <CFormLabel htmlFor="statusInput">Status</CFormLabel>
              <CFormSelect id="statusInput">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CFormSelect>
            </div>
            <div className="d-flex justify-content-between">
              <CButton color="primary" onClick={handleClick}>
                Change password
              </CButton>
              <CButton color="primary" variant="outline">
                Edit
              </CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default MyProfile
