import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CHeaderText,
  CRow,
} from '@coreui/react'
import { useHistory } from 'react-router-dom'
import { getUsers } from '../../../helpers/api_requests'
import Loader from '../../../components/Loader'
import { Roles } from '../../../helpers/role'
import { Table } from '../../../components/Table'

const UserList = () => {
  const history = useHistory()
  const [hasLoaded, setHasLoaded] = useState()
  const [users, setUsers] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [status, setStatus] = useState('')
  const [role, setRole] = useState('')
  const [sort, setSort] = useState('')

  useEffect(() => {
    getUsers(searchQuery, status, role, sort).then((data) => {
      setUsers(
        data?.map((item) => {
          return {
            name: item.name,
            number: item.wa_number,
            role: Roles[item.role],
            status: item.status,
            action: (
              <CButton color="dark" size={'sm'} onClick={() => history.push('/users/' + item.id)}>
                Edit
              </CButton>
            ),
          }
        }),
      )
      setHasLoaded(true)
    })
  }, [history, searchQuery, status, role, sort])

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'WhatsApp Number',
        accessor: 'number',
      },
      {
        Header: 'Role',
        accessor: 'role',
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

  return hasLoaded ? (
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
            <option value="inactive">Inactive</option>
            <option value="active">Active</option>
          </CFormSelect>
        </CCol>
        <CCol>
          <CFormLabel htmlFor="roleInput">Role</CFormLabel>
          <CFormSelect
            id="roleInput"
            onChange={(e) => {
              setRole(e.target.value)
            }}
          >
            <option value="">All</option>
            <option value="app-owner">App Owner</option>
            <option value="product-technical">Product & Technical</option>
            <option value="marketing-finance">Marketing & Finance</option>
            <option value="koperasi-owner">Koperasi Owner</option>
            <option value="credit-analyst">Credit Analyst</option>
            <option value="account-officer">Account Officer</option>
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
            <option value="name:asc">Name (ascending)</option>
            <option value="name:desc">Name (descending)</option>
            <option value="created_at:desc">Creation date (new first)</option>
            <option value="created_at:asc">Creation date (old first)</option>
          </CFormSelect>
        </CCol>
        <CCol className={'d-flex justify-content-end'}>
          <CButton color="primary" onClick={() => history.push('/users/create')}>
            Add New
          </CButton>
        </CCol>
      </CRow>
      <br />
      <CRow>
        <CCard>
          <CCardBody>
            {users.length > 0 ? (
              <Table columns={columns} data={users} />
            ) : (
              <>
                <div className="d-flex justify-content-center">
                  <CHeaderText>No users found</CHeaderText>
                </div>
              </>
            )}
          </CCardBody>
        </CCard>
      </CRow>
    </CContainer>
  ) : (
    Loader()
  )
}

export default UserList
