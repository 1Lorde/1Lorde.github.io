import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CFormInput,
  CFormSelect,
  CHeaderText,
  CPagination,
  CPaginationItem,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { useHistory } from 'react-router-dom'
import { getClients } from '../../../helpers/api_requests'
import Loader from '../../../components/Loader'

const ClientList = () => {
  const history = useHistory()
  const [hasLoaded, setHasLoaded] = useState()
  const [clients, setClients] = useState([])

  useEffect(() => {
    getClients().then((data) => {
      setClients(data)
      setHasLoaded(true)
    })
  }, [])

  function getTable() {
    if (!clients)
      return (
        <>
          <div className="d-flex justify-content-between">
            <CHeaderText>No clients found</CHeaderText>
          </div>
        </>
      )

    return (
      <CTable hover responsive style={{ minWidth: '45rem' }}>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Company Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">WhatsApp Number</CTableHeaderCell>
            <CTableHeaderCell scope="col">Director Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
            <CTableHeaderCell scope="col">
              <CButton color="primary" onClick={() => history.push('/clients/create')}>
                Add New
              </CButton>
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {clients?.map((item, index) => {
            return (
              <CTableRow key={index}>
                <CTableDataCell>{item.company}</CTableDataCell>
                <CTableDataCell>{item?.wa_number}</CTableDataCell>
                <CTableDataCell>{item.contact.dir_name}</CTableDataCell>
                <CTableDataCell>{item.status}</CTableDataCell>
                <CTableDataCell>
                  <CButton
                    color={'dark'}
                    size="sm"
                    onClick={() => history.push('/clients/' + item.id)}
                  >
                    Edit
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            )
          })}
        </CTableBody>
      </CTable>
    )
  }

  return hasLoaded ? (
    <CContainer>
      <CRow className="align-items-center mb-4">
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
        <CCol className={'d-flex justify-content-end'}>
          <CButton color="primary" onClick={() => history.push('/clients/create')}>
            Add New
          </CButton>
        </CCol>
      </CRow>
      <CRow>
        <CCard>
          <CCardBody>
            {getTable()}
            <CPagination align="center" aria-label="Page navigation">
              <CPaginationItem aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </CPaginationItem>
              <CPaginationItem active>1</CPaginationItem>
              <CPaginationItem>2</CPaginationItem>
              <CPaginationItem>3</CPaginationItem>
              <CPaginationItem>4</CPaginationItem>
              <CPaginationItem>5</CPaginationItem>
              <CPaginationItem aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </CPaginationItem>
            </CPagination>
          </CCardBody>
        </CCard>
      </CRow>
    </CContainer>
  ) : (
    Loader()
  )
}

export default ClientList
