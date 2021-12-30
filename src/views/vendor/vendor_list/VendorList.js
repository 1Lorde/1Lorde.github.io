import React, { useCallback, useRef, useState } from 'react'
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
  CRow,
} from '@coreui/react'
import { useHistory } from 'react-router-dom'
import { cilPen } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { SimpleTable } from '../../../components/SimpleTable'
import { getVendors } from '../../../api/api_vendors'

const VendorList = () => {
  const history = useHistory()
  const [hasLoaded, setHasLoaded] = useState()
  const [vendorList, setVendorList] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [status, setStatus] = useState('')
  const fetchIdRef = useRef(0)

  const fetchData = useCallback(
    () => {
      const fetchId = ++fetchIdRef.current
      if (fetchId === fetchIdRef.current) {
        setHasLoaded(false)
        getVendors(searchQuery, status).then((data) => {
          console.log(data)
          setVendorList(
            data.vendors?.map((item) => {
              return {
                name: item.name,
                url: item.api_base_url,
                location: item.address,
                status:
                  item.status === 'ACTIVE' ? (
                    <CBadge className="mt-1" color="success" shape="rounded-pill">
                      ACTIVE
                    </CBadge>
                  ) : (
                    <CBadge className="mt-1" color="secondary" shape="rounded-pill">
                      INACTIVE
                    </CBadge>
                  ),
                action: (
                  <CButton
                    color="dark"
                    size={'sm'}
                    onClick={() => history.push('/ppob/vendors/' + item.id)}
                  >
                    <CIcon icon={cilPen} className="me-1" />
                    Edit
                  </CButton>
                ),
              }
            }),
          )
          setHasLoaded(true)
        })
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [history, searchQuery, status],
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Company name',
        accessor: 'name',
      },
      {
        Header: 'API URL',
        accessor: 'url',
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
            <option value="ACTIVE">Active</option>
            <option value="NOT-ACTIVE">Inactive</option>
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
            <SimpleTable
              columns={columns}
              data={vendorList}
              fetchData={fetchData}
              hasLoaded={hasLoaded}
            />
          </CCardBody>
        </CCard>
      </CRow>
    </CContainer>
  )
}

export default VendorList
