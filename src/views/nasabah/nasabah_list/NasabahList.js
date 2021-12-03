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
import { getNasabah } from '../../../helpers/api_requests'
import Loader from '../../../components/Loader'
import { Table } from '../../../components/Table'

const NasabahList = () => {
  const history = useHistory()
  const [hasLoaded, setHasLoaded] = useState()
  const [nasabahList, setNasabah] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [status, setStatus] = useState('')
  const [sort, setSort] = useState('')

  useEffect(() => {
    getNasabah(searchQuery, status, sort).then((data) => {
      console.log(data)
      setNasabah(
        data?.map((item) => {
          return {
            name: item.name,
            number: item.wa_number,
            location: item.address,
            status: item.active ? 'active' : 'inactive',
            action: (
              <CButton color="dark" size={'sm'} onClick={() => history.push('/nasabah/' + item.id)}>
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
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'WhatsApp Number',
        accessor: 'number',
      },
      {
        Header: 'Location',
        accessor: 'location',
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
            <option value="false">Inactive</option>
            <option value="true">Active</option>
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
            {nasabahList.length > 0 ? (
              <Table columns={columns} data={nasabahList} />
            ) : (
              <>
                <div className="d-flex justify-content-center">
                  <CHeaderText>No nasabah found</CHeaderText>
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

export default NasabahList
