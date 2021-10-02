import React from 'react'

import { CButton, CButtonGroup, CCol, CContainer, CFormInput, CRow } from '@coreui/react'

import Widget1 from './widgets/Widget1'
import Widget2 from './widgets/Widget2'
import Widget3 from './widgets/Widget3'

const Dashboard = () => {
  return (
    <CContainer>
      <CRow className="align-items-center">
        <CCol xl={2}>Virtual Accounts</CCol>
        <CCol xl={6}>
          <CFormInput type="text" />
        </CCol>
        <CCol>
          <CButtonGroup role="group" className="p-3">
            <CButton color="primary" variant="outline">
              View Transactions
            </CButton>
            <CButton color="primary" variant="outline">
              Download Transactions
            </CButton>
          </CButtonGroup>
        </CCol>
      </CRow>
      <br />
      <hr />
      <br />
      <CRow>
        <CCol lg={4}>
          <Widget1 title="Total Number of Account Officer" value="123" />
          <div className="d-flex justify-content-end pb-3">
            <CButton color="dark" size="sm">
              View Details
            </CButton>
          </div>
        </CCol>
        <CCol lg={4}>
          <Widget2 title="Total Number of Nasabah" value="123" />
          <div className="d-flex justify-content-end pb-3">
            <CButton color="dark" size="sm">
              View Details
            </CButton>
          </div>
        </CCol>
      </CRow>

      <br />
      <hr />
      <br />

      <CRow>
        <CCol lg={4}>
          <Widget1 title="Total Number & Nominal of Savings" value="123" />
          <div className="d-flex justify-content-end pb-3">
            <CButton color="dark" size="sm">
              View Details
            </CButton>
          </div>
        </CCol>
        <CCol lg={4}>
          <Widget2 title="Total Number & Nominal of Credits" value="123" />
          <div className="d-flex justify-content-end pb-3">
            <CButton color="dark" size="sm">
              View Details
            </CButton>
          </div>
        </CCol>
        <CCol lg={4}>
          <Widget3 title="Total Number & Nominal of PPOB" value="123" />
          <div className="d-flex justify-content-end pb-3">
            <CButton color="dark" size="sm">
              View Details
            </CButton>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Dashboard
