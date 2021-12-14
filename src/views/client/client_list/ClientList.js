import React, { useCallback, useContext, useRef, useState } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'
import { useHistory } from 'react-router-dom'
import { Table } from '../../../components/Table'
import { approveClient, getClients, rejectClient } from '../../../api/api_client'
import CIcon from '@coreui/icons-react'
import { cilCheck, cilPen, cilXCircle } from '@coreui/icons'
import { store } from 'react-notifications-component'
import { danger, info } from '../../../helpers/notifications'
import { createNotification } from '../../../api/api_notification'
import { Services } from '../../../helpers/notification_types'
import { UserContext } from '../../../helpers/user'

const ClientList = () => {
  const history = useHistory()
  const { userState } = useContext(UserContext)
  const [hasLoaded, setHasLoaded] = useState()
  const [clients, setClients] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [status, setStatus] = useState('')
  const [sort, setSort] = useState('')
  const [pageCount, setPageCount] = useState(0)
  const fetchIdRef = useRef(0)

  function handleApprove(id, name) {
    approveClient(id).then((data) => {
      if (data.ok) {
        createNotification(userState.user.wa_number, Services.clientReject, '').then((resp) => {
          console.log('Notification created: ' + resp.id)
        })
        store.addNotification(info('Client ' + name + ' has been approved.'))
      } else {
        console.log(data)
        store.addNotification(danger('Error occurred.'))
      }
    })
  }

  function handleReject(id, name) {
    rejectClient(id).then((data) => {
      if (data.ok) {
        createNotification(userState.user.wa_number, Services.clientApprove, '').then((resp) => {
          console.log('Notification created: ' + resp)
        })
        store.addNotification(info('Client ' + name + ' has been rejected.'))
      } else {
        console.log(data)
        store.addNotification(danger('Error occurred.'))
      }
    })
  }

  function getStatusBadge(status) {
    switch (status.toLowerCase()) {
      case 'request':
        return (
          <CBadge className="mt-1" color="warning" shape="rounded-pill">
            {status}
          </CBadge>
        )
      case 'verified':
        return (
          <CBadge className="mt-1" color="info" shape="rounded-pill">
            {status}
          </CBadge>
        )
      case 'active':
        return (
          <CBadge className="mt-1" color="success" shape="rounded-pill">
            {status}
          </CBadge>
        )
      case 'reject':
        return (
          <CBadge className="mt-1" color="danger" shape="rounded-pill">
            {status}
          </CBadge>
        )
      default:
        return (
          <CBadge className="mt-1" color="secondary" shape="rounded-pill">
            unknown
          </CBadge>
        )
    }
  }

  function getApprovalBar(status, id, name) {
    switch (status) {
      case 'verified':
        return (
          <CButtonGroup role="group" className="ms-3">
            <CButton
              color="success"
              variant="outline"
              size={'sm'}
              onClick={() => {
                handleApprove(id, name)
              }}
            >
              <div className="d-inline-flex align-items-center">
                <span>Approve</span>
                <CIcon icon={cilCheck} className="ms-1" />
              </div>
            </CButton>
            <CButton
              color="danger"
              variant="outline"
              size={'sm'}
              onClick={() => handleReject(id, name)}
            >
              <div className="d-inline-flex align-items-center">
                <span>Reject</span>
                <CIcon icon={cilXCircle} className="ms-1" />
              </div>
            </CButton>
          </CButtonGroup>
        )
      case 'reject':
        return (
          <CButton
            color="success"
            variant="outline"
            size={'sm'}
            onClick={() => handleApprove(id, name)}
          >
            <div className="d-inline-flex align-items-center">
              <span>Approve</span>
              <CIcon icon={cilCheck} className="ms-1" />
            </div>
          </CButton>
        )
      default:
        return <p className="text-medium-emphasis">No actions</p>
    }
  }

  const fetchData = useCallback(
    ({ skip }) => {
      const fetchId = ++fetchIdRef.current
      if (fetchId === fetchIdRef.current) {
        setHasLoaded(false)
        getClients(skip, searchQuery, status, sort).then((data) => {
          console.log(data)
          let pages = Math.floor(data.pagination.total / data.pagination.limit)
          if (data.pagination.total / data.pagination.limit > pageCount) {
            pages += 1
          }
          setPageCount(pages)
          setClients(
            data.data?.map((item) => {
              return {
                name: item.company,
                contact_wa_number: item.contact.wa_number,
                contact_name: item.contact.dir_name,
                status: getStatusBadge(item.status),
                actions: (
                  <CCol>
                    <CButton
                      color="dark"
                      size={'sm'}
                      onClick={() => history.push('/clients/' + item.id)}
                    >
                      <CIcon icon={cilPen} className="me-1" />
                      <span>Edit</span>
                    </CButton>
                  </CCol>
                ),
                approval: getApprovalBar(item.status.toLowerCase(), item.id, item.company),
              }
            }),
          )
          setHasLoaded(true)
        })
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [history, searchQuery, status, sort],
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Company Name',
        accessor: 'name',
      },
      {
        Header: 'WhatsApp number',
        accessor: 'contact_wa_number',
      },
      {
        Header: 'Director Name',
        accessor: 'contact_name',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Approval',
        accessor: 'approval',
      },
      {
        Header: '',
        accessor: 'actions',
      },
    ],
    [],
  )

  return (
    <CContainer>
      <CRow className="align-items-center">
        <CCol>
          <CFormLabel htmlFor="searchInput">Search</CFormLabel>
          <CFormInput
            type="text"
            id="searchInput"
            placeholder="Enter search query.."
            onChange={(e) => {
              setSearchQuery(e.target.value)
            }}
          />
        </CCol>
        <CCol>
          <CFormLabel htmlFor="statusInput">Status</CFormLabel>
          <CFormSelect
            id="statusInput"
            onChange={(e) => {
              setStatus(e.target.value)
            }}
          >
            <option value="">All</option>
            <option value="REQUEST">Request</option>
            <option value="VERIFIED">Verified</option>
            <option value="ACTIVE">Active</option>
            <option value="REJECT">Reject</option>
            <option value="NON_ACTIVE">Non active</option>
            <option value="FAILED">Failed</option>
          </CFormSelect>
        </CCol>
        <CCol>
          <CFormLabel htmlFor="sortInput">Sort By</CFormLabel>
          <CFormSelect
            id="sortInput"
            onChange={(e) => {
              setSort(e.target.value)
            }}
          >
            <option value="created_at:desc">Creation date (new first)</option>
            <option value="created_at:asc">Creation date (old first)</option>
            <option value="company:asc">Company name (ascending)</option>
            <option value="company:desc">Company name (descending)</option>
            <option value="NPWP:asc">NPWP (ascending)</option>
            <option value="NPWP:desc">NPWP (descending)</option>
            <option value="contact_dir_name:asc">Contact name (ascending)</option>
            <option value="contact_dir_name:desc">Contact name (descending)</option>
            <option value="contact_ktp_id:asc">Contact KTP ID (ascending)</option>
            <option value="contact_ktp_id:desc">Contact KTP ID (descending)</option>
          </CFormSelect>
        </CCol>
        <CCol className={'d-flex justify-content-end'}>
          <CButton color="primary" onClick={() => history.push('/register')}>
            Register New
          </CButton>
        </CCol>
      </CRow>
      <br />
      <CRow>
        <CCard>
          <CCardBody>
            <Table
              columns={columns}
              data={clients}
              controlledPageCount={pageCount}
              fetchData={fetchData}
              hasLoaded={hasLoaded}
            />
          </CCardBody>
        </CCard>
      </CRow>
    </CContainer>
  )
}

export default ClientList
