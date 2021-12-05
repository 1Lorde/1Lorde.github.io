import React, { useEffect, useState } from 'react'
import {
  CBadge,
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
import Loader from '../../../components/Loader'
import { Table } from '../../../components/Table'
import { getNasabahList } from '../../../api/api_nasabah'
import { cilPen } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const NasabahList = () => {
  const history = useHistory()
  const [hasLoaded, setHasLoaded] = useState()
  const [nasabahList, setNasabah] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    getNasabahList(searchQuery, status).then((data) => {
      console.log(data)
      setNasabah(
        data?.map((item) => {
          return {
            name: item.name,
            number: item.wa_number,
            location: item.address,
            status: item.active ? (
              <CBadge className="mt-1" color="success" shape="rounded-pill">
                ACTIVE
              </CBadge>
            ) : (
              <CBadge className="mt-1" color="secondary" shape="rounded-pill">
                INACTIVE
              </CBadge>
            ),
            action: (
              <CButton color="dark" size={'sm'} onClick={() => history.push('/nasabah/' + item.id)}>
                <CIcon icon={cilPen} className="me-1" />
                Edit
              </CButton>
            ),
          }
        }),
      )
      setHasLoaded(true)
    })
  }, [history, searchQuery, status])

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
        <CCol className={'d-flex justify-content-end'}>
          <CButton color="primary" onClick={() => history.push('/nasabah/create')}>
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
