import React, { useEffect, useState } from 'react'

import { CButton, CButtonGroup, CCol, CContainer, CFormInput, CRow } from '@coreui/react'

import Widget1 from './widgets/Widget1'
import Widget2 from './widgets/Widget2'
import Widget3 from './widgets/Widget3'
import {
  getAccountOfficerCount,
  getClientCount,
  getNasabah,
  getNasabahCount,
} from '../../helpers/api_requests'
import Loader from '../../components/Loader'

const Dashboard = () => {
  const [hasLoaded, setHasLoaded] = useState()
  const [nasabahCount, setNasabahCount] = useState(0)
  const [accountOfficerCount, setAccountOfficerCount] = useState(0)
  const [clientsCount, setClientsCount] = useState(0)

  useEffect(() => {
    getNasabahCount().then((data) => {
      setNasabahCount(data.data.all.count)
    })
    getAccountOfficerCount().then((data) => {
      setAccountOfficerCount(data.data.all.count)
      setHasLoaded(true)
    })
    // getClientCount().then((data) => {
    //   setClientsCount(data.data.all.count)
    // })
  }, [])

  return hasLoaded ? (
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
          <Widget1 title="Total Number of Account Officer" value={accountOfficerCount} />
          <div className="d-flex justify-content-end pb-3">
            <CButton color="dark" size="sm">
              View Details
            </CButton>
          </div>
        </CCol>
        <CCol lg={4}>
          <Widget2 title="Total Number of Nasabah" value={nasabahCount} />
          <div className="d-flex justify-content-end pb-3">
            <CButton color="dark" size="sm">
              View Details
            </CButton>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  ) : (
    Loader()
  )
}

export default Dashboard
