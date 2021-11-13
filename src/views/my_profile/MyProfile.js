import React, { useContext, useState } from 'react'
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

import avatar_placeholder from '../../assets/images/avatar_placeholder.png'
import { useHistory } from 'react-router-dom'
import { updateProfile, UserContext } from '../../helpers/user'
import { store } from 'react-notifications-component'
import { danger, success } from '../../helpers/notifications'
import { Roles } from '../../helpers/role'

const MyProfile = () => {
  const history = useHistory()
  const { userState } = useContext(UserContext)
  const [fullName, setFullname] = useState('')
  const [address, setAddress] = useState('')

  const handleClick = () => {
    history.push('/profile/change_password')
  }

  const handleEdit = () => {
    const changes = {}
    if (fullName) {
      changes.name = fullName
    }
    if (address) {
      changes.address = address
    }
    updateProfile(changes).then((data) => {
      if (data.ok) {
        store.addNotification(success(data.message))
      } else {
        store.addNotification(danger(data.message))
      }
    })
  }

  return (
    <CContainer className="d-flex justify-content-center">
      <CCard style={{ width: '35rem' }}>
        <CCardImage
          orientation="top"
          src={!userState.user.avatar ? avatar_placeholder : userState.user.avatar}
        />
        <CCardBody>
          <CForm>
            <div className="mb-3">
              <CFormLabel htmlFor="fullnameInput">Full Name</CFormLabel>
              <CFormInput
                type="text"
                id="fullnameInput"
                defaultValue={userState.user.name}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="ktpnumberInput">KTP Number</CFormLabel>
              <CFormInput
                type="text"
                id="ktpnumberInput"
                defaultValue={userState.user.ktp_id}
                disabled
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="wanumberInput">WhatsApp Number</CFormLabel>
              <CFormInput
                type="text"
                id="wanumberInput"
                defaultValue={userState.user.wa_number}
                disabled
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="addressInput">Address</CFormLabel>
              <CFormInput
                type="text"
                id="addressInput"
                defaultValue={userState.user.address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="positionInput">Position</CFormLabel>
              <CFormInput
                type="text"
                id="positionInput"
                defaultValue={Roles[userState.user.role]}
                disabled
              />
            </div>
            <div className="mb-4">
              <CFormLabel htmlFor="statusInput">Status</CFormLabel>
              <CFormSelect
                type="text"
                id="statusInput"
                defaultValue={userState.user.status}
                disabled
              >
                <option value="inactive">Inactive</option>
                <option value="active">Active</option>
              </CFormSelect>
            </div>
            <div className="d-flex justify-content-between">
              <CButton color="primary" onClick={handleClick}>
                Change password
              </CButton>
              <CButton color="primary" variant="outline" onClick={handleEdit}>
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
