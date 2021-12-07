import React, { useEffect, useState } from 'react'
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
import Loader from '../../../components/Loader'
import { useHistory } from 'react-router-dom'

const Notifications = () => {
  const history = useHistory()
  const [notifications, setNotifications] = useState([])
  const [hasLoaded, setHasLoaded] = useState(false)

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

  useEffect(() => {
    getNotifications().then((data) => {
      if (data.ok === true) {
        console.log(data)
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
  }, [])

  return hasLoaded ? (
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
            <Table columns={columns} data={notifications} />
          </CCardBody>
        </CCard>
      </CRow>
    </CContainer>
  ) : (
    Loader()
  )
}

export default Notifications
