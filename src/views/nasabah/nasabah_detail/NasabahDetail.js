import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardImage,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CRow,
} from '@coreui/react'

import avatar from '../../../assets/images/profile.jpg'
import { useHistory } from 'react-router-dom'

const NasabahDetail = () => {
  const history = useHistory()
  return (
    <CContainer>
      <CRow xs={{ cols: 1 }} md={{ cols: 2 }}>
        <CCol className="mb-5">
          <CCard>
            <CCardImage orientation="top" src={avatar} />
            <CCardBody>
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="fullnameInput">Full Name</CFormLabel>
                  <CFormInput type="text" id="fullnameInput" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="ktpnumberInput">KTP Number</CFormLabel>
                  <CFormInput type="text" id="ktpnumberInput" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="wanumberInput">WhatsApp Number</CFormLabel>
                  <CFormInput type="text" id="wanumberInput" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="addressInput">Address</CFormLabel>
                  <CFormInput type="text" id="addressInput" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="groupInput">Group</CFormLabel>
                  <CFormInput type="text" id="groupInput" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="statusInput">Status</CFormLabel>
                  <CFormSelect id="statusInput">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </CFormSelect>
                </div>
                <div className="d-flex justify-content-end">
                  <CButton color="primary" variant="outline">
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
  )
}

export default NasabahDetail
