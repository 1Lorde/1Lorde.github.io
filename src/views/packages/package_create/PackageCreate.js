import React, { useContext, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react'

import { useHistory } from 'react-router-dom'
import { store } from 'react-notifications-component'
import { danger, success } from '../../../helpers/notifications'
import { createPackage } from '../../../api/api_package'
import { tryParseInt } from '../../../helpers/utils'
import { createNotification } from '../../../api/api_notification'
import { Services } from '../../../helpers/notification_types'
import { UserContext } from '../../../helpers/user'

const PackageCreate = () => {
  const { userState } = useContext(UserContext)
  const history = useHistory()
  const [pack, setPack] = useState({})
  const [validated, setValidated] = useState(false)

  function handleCreate(event) {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    }
    setValidated(true)

    if (form.checkValidity()) {
      console.log(pack)
      createPackage(pack).then((data) => {
        if (data.ok) {
          createNotification(userState.user.wa_number, Services.packageCreate, pack.name).then(
            (resp) => {
              console.log('Notification created: ' + resp.id)
            },
          )
          store.addNotification(success('Package ' + pack.name + ' created successfully.'))
          history.push('/packages')
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
        <CCardImage
          orientation="top"
          src={
            'https://via.placeholder.com/550x390.png?text=' +
            (pack.name ? pack.name : 'New package')
          }
        />
        <CCardBody>
          <CForm noValidate validated={validated} onSubmit={handleCreate}>
            <CRow>
              <CCol>
                <div className="mb-3">
                  <CFormLabel htmlFor="name">Name</CFormLabel>
                  <CFormInput
                    type="text"
                    id="name"
                    required
                    onChange={(e) => {
                      setPack((pack) => ({ ...pack, name: e.target.value }))
                    }}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="description">Description</CFormLabel>
                  <CFormInput
                    type="text"
                    id="description"
                    onChange={(e) => {
                      setPack((pack) => ({ ...pack, description: e.target.value }))
                    }}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="slug">Slug</CFormLabel>
                  <CFormInput
                    type="text"
                    id="slug"
                    required
                    onChange={(e) => {
                      setPack((pack) => ({ ...pack, slug: e.target.value }))
                    }}
                  />
                </div>
                <div className="pt-1">
                  <hr />
                  <h3>Price</h3>
                  <CRow className="pt-2">
                    <CCol>
                      <div className="mb-3">
                        <CFormLabel htmlFor="monthly">Monthly</CFormLabel>
                        <CFormInput
                          type="number"
                          id="monthly"
                          required
                          onChange={(e) => {
                            setPack((pack) => ({
                              ...pack,
                              price: {
                                ...pack.price,
                                monthly: tryParseInt(e.target.value),
                              },
                            }))
                          }}
                        />
                      </div>
                    </CCol>
                    <CCol>
                      <div className="mb-3">
                        <CFormLabel htmlFor="yearly">Yearly</CFormLabel>
                        <CFormInput
                          type="number"
                          id="yearly"
                          required
                          onChange={(e) => {
                            setPack((pack) => ({
                              ...pack,
                              price: {
                                ...pack.price,
                                yearly: tryParseInt(e.target.value),
                              },
                            }))
                          }}
                        />
                      </div>
                    </CCol>
                  </CRow>
                </div>

                <div>
                  <hr />
                  <h3>Quota</h3>
                  <CRow className="pt-2">
                    <CCol>
                      <div className="mb-3">
                        <CFormLabel htmlFor="account_officer">Account Officer</CFormLabel>
                        <CFormInput
                          type="number"
                          id="account_officer"
                          required
                          onChange={(e) => {
                            setPack((pack) => ({
                              ...pack,
                              quota: {
                                ...pack.quota,
                                account_officer: tryParseInt(e.target.value),
                              },
                            }))
                          }}
                        />
                      </div>
                    </CCol>
                    <CCol>
                      <div className="mb-3">
                        <CFormLabel htmlFor="nasabah">Nasabah</CFormLabel>
                        <CFormInput
                          type="number"
                          id="nasabah"
                          required
                          onChange={(e) => {
                            setPack((pack) => ({
                              ...pack,
                              quota: {
                                ...pack.quota,
                                nasabah: tryParseInt(e.target.value),
                              },
                            }))
                          }}
                        />
                      </div>
                    </CCol>
                  </CRow>
                </div>
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <div className="d-flex justify-content-end">
                <CButton color="primary" type="submit">
                  Create
                </CButton>
              </div>
            </CRow>
          </CForm>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}
export default PackageCreate
