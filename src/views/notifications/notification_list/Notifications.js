import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CFormInput,
  CFormSelect,
  CRow,
} from '@coreui/react'
import { getNotifications } from '../../../api/api_notification'
import { Table } from '../../../components/Table'
import { useHistory } from 'react-router-dom'

const Notifications = () => {
  const history = useHistory()
  const [notifications, setNotifications] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [hasLoaded, setHasLoaded] = useState(false)
  const fetchIdRef = useRef(0)

  const fetchData = useCallback(({ skip }) => {
    const fetchId = ++fetchIdRef.current
    if (fetchId === fetchIdRef.current) {
      setHasLoaded(false)
      getNotifications(skip).then((data) => {
        if (data.ok) {
          console.log(data)
          let pages = Math.floor(data.pagination.total / data.pagination.limit)
          if (data.pagination.total / data.pagination.limit > pageCount) {
            pages += 1
          }
          setPageCount(pages)
          setNotifications(
            data.data?.map((item) => {
              return {
                created: item.created,
                sender: item.sender,
                title: item.title,
                content: item.content,
                action: (
                  <CButton
                    color="dark"
                    size={'sm'}
                    onClick={() => history.push('/notifications/' + item.id)}
                  >
                    View
                  </CButton>
                ),
              }
            }),
          )
          setHasLoaded(true)
        }
      })
    }
  }, [])

  const columns = React.useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'created',
      },
      {
        Header: 'Sender',
        accessor: 'sender',
      },
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Content',
        accessor: 'content',
      },
      {
        Header: 'Action',
        accessor: 'action',
      },
    ],
    [],
  )

  return (
    <CContainer fluid>
      <CRow className="align-items-center">
        <CCol xl={1}>Search</CCol>
        <CCol>
          <CFormInput></CFormInput>
        </CCol>
        <CCol>
          <CFormSelect>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </CFormSelect>
        </CCol>
      </CRow>
      <br />
      <CRow>
        <CCard>
          <CCardBody>
            <Table
              columns={columns}
              data={notifications}
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

export default Notifications
