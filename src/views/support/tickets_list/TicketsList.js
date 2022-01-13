import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react'
import { useHistory } from 'react-router-dom'
import { createUser, getTickets } from '../../../api/api_ticket'
import { Table } from '../../../components/Table'
import {
  getKoperasiOwnerIdFromToken,
  getKoperasiOwnerWAFromToken,
  UserContext,
} from '../../../helpers/user'
import { Roles } from '../../../helpers/role'
import { store } from 'react-notifications-component'
import { info, success, warning } from '../../../helpers/notifications'

const TicketsList = () => {
  const history = useHistory()
  const { userState, userDispatch } = useContext(UserContext)
  const [hasLoaded, setHasLoaded] = useState(false)
  const [tickets, setTickets] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [pageCount, setPageCount] = useState(1)
  const fetchIdRef = useRef(0)

  function getStatusBadge(status) {
    switch (status) {
      case 0:
        return (
          <CBadge className="mt-1" color="success" shape="rounded-pill">
            New
          </CBadge>
        )
      case 1:
        return (
          <CBadge className="mt-1" color="danger" shape="rounded-pill">
            Open
          </CBadge>
        )
      case 2:
        return (
          <CBadge className="mt-1" color="info" shape="rounded-pill">
            Pending
          </CBadge>
        )
      case 3:
        return (
          <CBadge className="mt-1" color="secondary" shape="rounded-pill">
            Closed
          </CBadge>
        )
      default:
        return (
          <CBadge className="mt-1" color="dark" shape="rounded-pill">
            unknown
          </CBadge>
        )
    }
  }

  const fetchData = useCallback(
    ({ skip }) => {
      const fetchId = ++fetchIdRef.current
      if (fetchId === fetchIdRef.current) {
        setHasLoaded(false)
        getTickets(skip, searchQuery).then((data) => {
          console.log(data)
          if (data) {
            let pages = Math.floor(data.pagination.total / data.pagination.limit)
            if (data.pagination.total / data.pagination.limit > pageCount) {
              pages += 1
            }
            setPageCount(pages)
            setTickets(
              data.data?.map((item) => {
                return {
                  id: item.uid,
                  title: item.subject,
                  status: getStatusBadge(item.status),
                  action: (
                    <CButton
                      color="dark"
                      size={'sm'}
                      onClick={() => history.push('/support/tickets/' + item.uid)}
                    >
                      View
                    </CButton>
                  ),
                }
              }),
            )
          } else {
            if (
              ![Roles['credit-analyst'], Roles['account-officer']].includes(
                Roles[userState.user.role],
              )
            ) {
              createUser(userState.user.id, userState.user.wa_number, userState.user.name).then(
                (data) => {
                  console.log(data)
                  store.addNotification(
                    info('Your support account not approved yet. Please try again later'),
                  )
                },
              )
            } else {
              createUser(
                getKoperasiOwnerIdFromToken(),
                userState.company.contact.wa_number,
                userState.company.contact.dir_name,
              ).then((data) => {
                console.log(data)
                store.addNotification(
                  info('Your support account not approved yet. Please try again later'),
                )
              })
            }
          }
          setHasLoaded(true)
        })
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [history, searchQuery],
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Ticket ID',
        accessor: 'id',
      },
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Action',
        accessor: 'action',
      },
    ],
    [],
  )

  const handleDetailsClick = () => {
    history.push('/support/tickets/details')
  }

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
        <CCol className={'d-flex justify-content-end'}>
          <CButton color="primary" onClick={() => history.push('/support/tickets/new')}>
            Create New
          </CButton>
        </CCol>
      </CRow>
      <br />
      <CRow>
        <CCard>
          <CCardBody>
            <Table
              columns={columns}
              data={tickets}
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

export default TicketsList
