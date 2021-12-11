import React, { useContext, useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardImage,
  CCol,
  CContainer,
  CForm,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CRow,
} from '@coreui/react'

import avatar from '../../../assets/images/avatar_placeholder.png'
import { useHistory, useParams } from 'react-router-dom'
import { createPackage, getPackage } from '../../../api/api_package'
import { store } from 'react-notifications-component'
import { danger, success } from '../../../helpers/notifications'
import { createNasabah, getNasabah } from '../../../api/api_nasabah'
import Loader from '../../../components/Loader'
import { createNotification } from '../../../api/api_notification'
import { Services } from '../../../helpers/notification_types'
import { UserContext } from '../../../helpers/user'

const NasabahCreate = () => {
  const { userState } = useContext(UserContext)
  const history = useHistory()
  const [nasabah, setNasabah] = useState({})
  const [validated, setValidated] = useState(false)

  function handleCreate(event) {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    }
    setValidated(true)

    if (form.checkValidity()) {
      console.log(nasabah)
      createNasabah(nasabah).then((data) => {
        if (data.ok) {
          createNotification(userState.user.wa_number, Services.userCreate, nasabah.name).then(
            (resp) => {
              console.log('Notification created' + resp.id)
            },
          )
          store.addNotification(success('Nasabah ' + nasabah.name + ' created successfully.'))
          history.push('/nasabah')
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
  }

  return (
    <CContainer className="d-flex justify-content-center">
      <CCard style={{ width: '35rem' }}>
        <CCardImage orientation="top" src={avatar} />
        <CCardBody>
          <CForm noValidate validated={validated} onSubmit={handleCreate}>
            <div className="mb-3">
              <CFormLabel htmlFor="name">Name</CFormLabel>
              <CFormInput
                type="text"
                id="name"
                required
                onChange={(e) => {
                  setNasabah((nasabah) => ({ ...nasabah, name: e.target.value }))
                }}
              />
              <CFormFeedback invalid>Please provide a name.</CFormFeedback>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="ktp">KTP Number</CFormLabel>
              <CFormInput
                type="text"
                id="ktp"
                required
                minLength={16}
                maxLength={16}
                onChange={(e) => {
                  setNasabah((nasabah) => ({
                    ...nasabah,
                    ktp_id: e.target.value,
                  }))
                }}
              />
              <CFormFeedback invalid>Please provide a KTP ID (min length 16).</CFormFeedback>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="wa">WhatsApp Number</CFormLabel>
              <CFormInput
                type="tel"
                id="wa"
                required
                pattern="^\+62[0-9]{9,15}$"
                onChange={(e) => {
                  setNasabah((nasabah) => ({
                    ...nasabah,
                    wa_number: e.target.value,
                  }))
                }}
              />
              <CFormFeedback invalid>Please provide a valid phone number.</CFormFeedback>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="address">Address</CFormLabel>
              <CFormInput
                type="text"
                id="address"
                minLength={5}
                required
                onChange={(e) => {
                  setNasabah((nasabah) => ({
                    ...nasabah,
                    address: e.target.value,
                  }))
                }}
              />
              <CFormFeedback invalid>Please provide an address.</CFormFeedback>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="group">Group</CFormLabel>
              <CFormInput
                type="text"
                id="group"
                onChange={(e) => {
                  setNasabah((nasabah) => ({
                    ...nasabah,
                    group: e.target.value,
                  }))
                }}
              />
            </div>
            <div className="d-flex justify-content-end">
              <CButton color="primary" type="submit">
                Create
              </CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default NasabahCreate
