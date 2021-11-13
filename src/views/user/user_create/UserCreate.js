import React, { useContext, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CContainer,
  CForm,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CFormSelect,
} from '@coreui/react'

import { useHistory } from 'react-router-dom'
import { store } from 'react-notifications-component'
import { danger, success } from '../../../helpers/notifications'
import { createUser } from '../../../helpers/api_requests'
import { Roles } from '../../../helpers/role'
import { UserContext } from '../../../helpers/user'

const UserCreate = () => {
  const history = useHistory()
  const { userState } = useContext(UserContext)
  const [user, setUser] = useState({ role: 'koperasi-owner' })
  const [validated, setValidated] = useState(false)

  function getPositions(userRole) {
    if (Roles[userRole] === Roles['app-owner']) {
      return (
        <>
          <option value="app-owner">App Owner</option>
          <option value="product-technical">Product & Technical</option>
          <option value="marketing-finance">Marketing & Finance</option>
        </>
      )
    } else if (Roles[userRole] === Roles['koperasi-owner']) {
      return (
        <>
          <option value="koperasi-owner">Koperasi Owner</option>
          <option value="credit-analyst">Credit & Analyst</option>
          <option value="account-officer">Account Officer</option>
        </>
      )
    } else {
      console.log('Not valid role: ' + userRole)
    }
  }

  const handleCreate = (event) => {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    if (form.checkValidity()) {
      console.log(user)
      createUser(user).then((data) => {
        if (data.ok) {
          store.addNotification(success('User (' + data.wa_number + ') created'))
          history.push('/users')
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
              <CFormLabel htmlFor="fullnameInput">Full Name</CFormLabel>
              <CFormInput
                type="text"
                id="fullnameInput"
                required
                defaultValue={user.name}
                onChange={(e) => {
                  setUser((user) => ({ ...user, name: e.target.value }))
                }}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="ktpnumberInput">KTP Number</CFormLabel>
              <CFormInput
                type="text"
                id="ktpnumberInput"
                minLength={16}
                required
                defaultValue={user.ktp_id}
                onChange={(e) => {
                  setUser((user) => ({ ...user, ktp_id: e.target.value }))
                }}
              />
              <CFormFeedback invalid>
                Please provide a valid phone number (min length 16).
              </CFormFeedback>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="wanumberInput">WhatsApp Number</CFormLabel>
              <CFormInput
                type="tel"
                pattern="^\+62[0-9]{9,15}$"
                required
                defaultValue={user.wa_number}
                onChange={(e) => {
                  setUser((user) => ({ ...user, wa_number: e.target.value }))
                }}
              />
              <CFormFeedback invalid>Please provide a valid phone number.</CFormFeedback>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="addressInput">Address</CFormLabel>
              <CFormInput
                type="text"
                id="addressInput"
                minLength={5}
                required
                defaultValue={user.address}
                onChange={(e) => {
                  setUser((user) => ({ ...user, address: e.target.value }))
                }}
              />
              <CFormFeedback invalid>
                Please provide a valid phone number (min length 5).
              </CFormFeedback>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="positionInput">Position</CFormLabel>
              <CFormSelect
                aria-label="Position"
                defaultValue={user.role}
                onChange={(e) => {
                  setUser((user) => ({ ...user, role: e.target.value }))
                }}
              >
                <option disabled>Please select</option>
                {getPositions(userState.user.role)}
              </CFormSelect>
            </div>
            <div className="d-flex justify-content-center">
              <CButton color="primary" variant="outline" type="submit">
                Create
              </CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default UserCreate
