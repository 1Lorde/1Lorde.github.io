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
import { getClients } from '../../../helpers/api_requests'
import Loader from '../../../components/Loader'
import { Table } from '../../../components/Table'

const ClientList = () => {
  const history = useHistory()
  const [hasLoaded, setHasLoaded] = useState()
  const [clients, setClients] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [status, setStatus] = useState('')
  const [sort, setSort] = useState('')

  useEffect(() => {
    getClients(searchQuery, status, sort).then((data) => {
      setClients(
        data?.map((item) => {
          return {
            name: item.company,
            contact_ktp_id: item.contact.ktp_id,
            contact_name: item.contact.dir_name,
            status: item.status.toLowerCase(),
            action: (
              <CButton color="dark" size={'sm'} onClick={() => history.push('/clients/' + item.id)}>
                Edit
              </CButton>
            ),
          }
        }),
      )
      setHasLoaded(true)
    })
  }, [history, searchQuery, status, sort])

  const columns = React.useMemo(
    () => [
      {
        Header: 'Company Name',
        accessor: 'name',
      },
      {
        Header: 'KTP ID',
        accessor: 'contact_ktp_id',
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
            <option value="">Company Name (ascending)</option>
            <option value="company:desc">Company Name (descending)</option>
            <option value="created_at:desc">Creation date (new first)</option>
            <option value="created_at:asc">Creation date (old first)</option>
            <option value="NPWP:asc">NPWP (ascending)</option>
            <option value="NPWP:desc">NPWP (descending)</option>
            <option value="contact_dir_name:asc">Contact Name (ascending)</option>
            <option value="contact_dir_name:desc">Contact Name (descending)</option>
            <option value="contact_ktp_id:asc">Contact KTP ID (ascending)</option>
            <option value="contact_ktp_id:desc">Contact KTP ID (descending)</option>
          </CFormSelect>
        </CCol>
        <CCol className={'d-flex justify-content-end'}>
          <CButton color="primary" onClick={() => history.push('/clients/create')}>
            Add New
          </CButton>
        </CCol>
      </CRow>
      <br />
      <CRow>
        <CCard>
          <CCardBody>
            {clients.length > 0 ? (
              <Table columns={columns} data={clients} />
            ) : (
              <>
                <div className="d-flex justify-content-center">
                  <CHeaderText>No clients found</CHeaderText>
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

export default ClientList
