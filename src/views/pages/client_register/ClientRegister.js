import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from '@coreui/react'
import { Link, useHistory } from 'react-router-dom'
import { danger, success } from '../../../helpers/notifications'
import { store } from 'react-notifications-component'
import { registerClient } from '../../../api/api_client'
import { getPackages } from '../../../api/api_package'
import Loader from '../../../components/Loader'

const ClientRegister = () => {
  const history = useHistory()
  const [client, setClient] = useState({
    NPWP_image: '',
    contact_ktp_image: '',
    package_slug: 'standard',
  })
  const [packages, setPackages] = useState([])
  const [code, setCode] = useState('')
  const [validated, setValidated] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    getPackages().then((data) => {
      if (data.ok) {
        setPackages(data.data)
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
  }, [])

  const handleCreate = (event) => {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    if (form.checkValidity()) {
      console.log(client)
      registerClient(client).then((data) => {
        if (data.ok) {
          console.log(data)
          setCode(data.verify_code)
          setVisible(true)
          store.addNotification(success('Client registration request created successfully.'))
        } else {
          console.log(data)
          store.addNotification(danger(data.error))
        }
      })
    }
  }

  return hasLoaded ? (
    <>
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer className="d-flex justify-content-center">
          <CCard className="p-4">
            <CCardBody>
              <CForm noValidate validated={validated} onSubmit={handleCreate}>
                <h1>Client registration form</h1>
                <hr />
                <CRow className="pt-3">
                  <CCol>
                    <div className="mb-3">
                      <CFormLabel htmlFor="companyInput">Company Name</CFormLabel>
                      <CFormInput
                        type="text"
                        id="companyInput"
                        required
                        onChange={(e) => {
                          setClient((client) => ({ ...client, company: e.target.value }))
                        }}
                      />
                      <CFormFeedback invalid>Please provide a company name.</CFormFeedback>
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="emailInput">Email</CFormLabel>
                      <CFormInput
                        type="email"
                        id="emailInput"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        required
                        onChange={(e) => {
                          setClient((client) => ({ ...client, email: e.target.value }))
                        }}
                      />
                      <CFormFeedback invalid>Please provide a valid email.</CFormFeedback>
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="npwpInput">NPWP</CFormLabel>
                      <CFormInput
                        type="text"
                        id="npwpInput"
                        minLength={12}
                        required
                        onChange={(e) => {
                          setClient((client) => ({ ...client, NPWP: e.target.value }))
                        }}
                      />
                      <CFormFeedback invalid>Please provide a valid NPWP.</CFormFeedback>
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="addressInput">Address</CFormLabel>
                      <CFormInput
                        type="text"
                        id="addressInput"
                        minLength={5}
                        required
                        onChange={(e) => {
                          setClient((client) => ({ ...client, address: e.target.value }))
                        }}
                      />
                      <CFormFeedback invalid>Please provide a valid address.</CFormFeedback>
                    </div>
                  </CCol>
                  <CCol>
                    <div className="mb-3">
                      <CFormLabel htmlFor="packageInput">Package</CFormLabel>
                      <CFormSelect
                        id="packageInput"
                        aria-label="package"
                        onChange={(e) => {
                          setClient((client) => ({ ...client, package_slug: e.target.value }))
                        }}
                      >
                        <option disabled>Please select</option>
                        {packages.map((pack, index) => {
                          return (
                            <option key={index} value={pack.slug}>
                              {pack.name}
                            </option>
                          )
                        })}
                      </CFormSelect>
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="contactNameInput">Contact Name</CFormLabel>
                      <CFormInput
                        type="text"
                        id="contactNameInput"
                        required
                        onChange={(e) => {
                          setClient((client) => ({ ...client, contact_dir_name: e.target.value }))
                        }}
                      />
                      <CFormFeedback invalid>Please provide a contact name.</CFormFeedback>
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="wanumberInput">Contact WhatsApp Number</CFormLabel>
                      <CFormInput
                        id="wanumberInput"
                        type="tel"
                        pattern="^\+62[0-9]{9,15}$"
                        required
                        onChange={(e) => {
                          setClient((client) => ({ ...client, contact_wa_number: e.target.value }))
                        }}
                      />
                      <CFormFeedback invalid>Please provide a valid phone number.</CFormFeedback>
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="ktpnumberInput">Contact KTP Number</CFormLabel>
                      <CFormInput
                        type="text"
                        id="ktpnumberInput"
                        minLength={16}
                        required
                        onChange={(e) => {
                          setClient((client) => ({ ...client, contact_ktp_id: e.target.value }))
                        }}
                      />
                      <CFormFeedback invalid>
                        Please provide a valid KTP number (min length 16).
                      </CFormFeedback>
                    </div>
                  </CCol>
                </CRow>
                <div className="d-flex justify-content-center mt-4">
                  <CButton color="primary" type="submit">
                    Register
                  </CButton>
                </div>
                <div className="d-flex justify-content-end pt-2">
                  <Link to="/login">Back to login</Link>
                </div>
              </CForm>
            </CCardBody>
          </CCard>
        </CContainer>
      </div>

      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Verification Code</CModalTitle>
        </CModalHeader>
        <CModalBody className="text-center">
          <p>Your verification code is:</p>
          <h1>{code}</h1>
          <br />
          <span>
            Send this code with the next format via WhatsApp to +6281222888757:{' '}
            <code>!VERIFY {code}</code>
          </span>
        </CModalBody>
        <CModalFooter>
          <CButton
            color="primary"
            onClick={() => {
              setVisible(false)
              history.push('/login')
            }}
          >
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  ) : (
    Loader()
  )
}

export default ClientRegister
