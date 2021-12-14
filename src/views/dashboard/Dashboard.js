import React, { useContext, useEffect, useState } from 'react'

import { CButton, CButtonGroup, CCol, CContainer, CFormInput, CRow } from '@coreui/react'

import Widget1 from './widgets/Widget1'
import Widget2 from './widgets/Widget2'
import Widget3 from './widgets/Widget3'
import Loader from '../../components/Loader'
import { getAccountOfficerCount, getClientCount, getNasabahCount } from '../../api/api_stat'
import { UserContext } from '../../helpers/user'
import { adminRoles, Roles } from '../../helpers/role'
import RestrictedComponent from '../../routes/RestrictedComponent'

const Dashboard = () => {
  const { userState } = useContext(UserContext)
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
    if (adminRoles().includes(Roles[userState.user.role])) {
      getClientCount().then((data) => {
        setClientsCount(data.data.all.count)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        </CCol>
        <CCol lg={4}>
          <Widget2 title="Total Number of Nasabah" value={nasabahCount} />
        </CCol>
        <CCol lg={4}>
          <RestrictedComponent allowedRoles={['app-owner', 'marketing-finance', 'credit-analyst']}>
            <Widget3 title="Total Number of Clients" value={clientsCount} />
          </RestrictedComponent>
        </CCol>
      </CRow>
    </CContainer>
  ) : (
    Loader()
  )
}

export default Dashboard
