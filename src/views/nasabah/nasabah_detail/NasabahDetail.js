import React, { useEffect, useState } from 'react'
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
import { getPackage } from '../../../api/api_package'
import { store } from 'react-notifications-component'
import { danger, success } from '../../../helpers/notifications'
import { createNasabah, getNasabah, updateNasabah } from '../../../api/api_nasabah'
import Loader from '../../../components/Loader'

const NasabahDetail = () => {
  const history = useHistory()
  let { id } = useParams()
  const [nasabah, setNasabah] = useState({})
  const [hasLoaded, setHasLoaded] = useState()
  const [validated, setValidated] = useState(false)

  function handleUpdate(event) {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    }
    setValidated(true)

    if (form.checkValidity()) {
      console.log(nasabah)
      updateNasabah(nasabah.id, nasabah).then((data) => {
        if (data.ok) {
          store.addNotification(success('Nasabah ' + nasabah.name + ' updated successfully.'))
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

  useEffect(
    () => {
      getNasabah(id).then((data) => {
        if (data.ok) {
          setNasabah(data.nasabah)
          setHasLoaded(true)
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
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  return hasLoaded ? (
    <CContainer>
      <CRow xs={{ cols: 1 }} md={{ cols: 2 }}>
        <CCol className="mb-5">
          <CCard>
            <CCardImage orientation="top" src={avatar} />
            <CCardBody>
              <CForm noValidate validated={validated} onSubmit={handleUpdate}>
                <div className="mb-3">
                  <CFormLabel htmlFor="name">Name</CFormLabel>
                  <CFormInput
                    type="text"
                    id="name"
                    required
                    placeholder="No data provided"
                    value={nasabah.name}
                    onChange={(e) => {
                      setNasabah((nasabah) => ({ ...nasabah, name: e.target.value }))
                    }}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="ktp">KTP Number</CFormLabel>
                  <CFormInput
                    type="text"
                    id="ktp"
                    placeholder="No data provided"
                    value={nasabah.ktp_id}
                    onChange={(e) => {
                      setNasabah((nasabah) => ({
                        ...nasabah,
                        ktp_id: e.target.value,
                      }))
                    }}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="wa">WhatsApp Number</CFormLabel>
                  <CFormInput
                    type="text"
                    id="wa"
                    placeholder="No data provided"
                    defaultValue={nasabah.wa_number}
                    onChange={(e) => {
                      setNasabah((nasabah) => ({
                        ...nasabah,
                        wa_number: e.target.value,
                      }))
                    }}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="address">Address</CFormLabel>
                  <CFormInput
                    type="text"
                    id="address"
                    placeholder="No data provided"
                    defaultValue={nasabah.address}
                    onChange={(e) => {
                      setNasabah((nasabah) => ({
                        ...nasabah,
                        address: e.target.value,
                      }))
                    }}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="group">Group</CFormLabel>
                  <CFormInput
                    type="text"
                    id="group"
                    placeholder="No data provided"
                    defaultValue={nasabah.group}
                    onChange={(e) => {
                      setNasabah((nasabah) => ({
                        ...nasabah,
                        group: e.target.value,
                      }))
                    }}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="status">Status</CFormLabel>
                  <CFormSelect
                    id="status"
                    value={nasabah.active}
                    onChange={(e) => {
                      setNasabah((nasabah) => ({ ...nasabah, active: e.target.value }))
                    }}
                  >
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </CFormSelect>
                </div>
                <hr />
                <div className="mb-3">
                  <CFormLabel htmlFor="reason">Reason</CFormLabel>
                  <CFormInput
                    type="text"
                    id="reason"
                    required
                    onChange={(e) => {
                      setNasabah((nasabah) => ({
                        ...nasabah,
                        reason: e.target.value,
                      }))
                    }}
                  />
                  <CFormFeedback invalid>Please provide a reason.</CFormFeedback>
                </div>
                <div className="d-flex justify-content-end">
                  <CButton color="primary" type="submit">
                    Edit
                  </CButton>
                </div>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol>
          <CCard>
            <CCardHeader component="h4" className="p-3">
              Account Information
            </CCardHeader>
            <CCardBody>
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="accountNumber">Account Number</CFormLabel>
                  <CFormInput type="text" id="accountNumber" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="type">Type of Account</CFormLabel>
                  <CFormSelect id="type">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </CFormSelect>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="status">Status</CFormLabel>
                  <CFormSelect id="status">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </CFormSelect>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="note">Note</CFormLabel>
                  <CFormTextarea type="text" id="note" rows={3} />
                </div>
                <div className="d-flex justify-content-between">
                  <CButton color="primary">View Records</CButton>
                  <CButton color="primary" variant="outline">
                    Edit
                  </CButton>
                </div>
                <br />
                <hr />
                <br />
                <CRow>
                  <CCol>
                    <div className="d-grid gap-2">
                      <CButton color="primary" variant="outline">
                        Register to Products
                      </CButton>
                      <CButton
                        color="primary"
                        variant="outline"
                        onClick={() => {
                          history.push('/nasabah/details/cashIn')
                        }}
                      >
                        Cash In
                      </CButton>
                    </div>
                  </CCol>
                  <CCol>
                    <div className="d-grid gap-2">
                      <CButton
                        color="primary"
                        variant="outline"
                        onClick={() => {
                          history.push('/nasabah/details/transfer')
                        }}
                      >
                        Transfer
                      </CButton>
                      <CButton
                        color="primary"
                        variant="outline"
                        onClick={() => {
                          history.push('/nasabah/details/cashOut')
                        }}
                      >
                        Cash Out
                      </CButton>
                    </div>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  ) : (
    Loader()
  )
}

export default NasabahDetail
