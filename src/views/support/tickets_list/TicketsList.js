import React from 'react'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CFormInput,
  CFormSelect,
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

const TicketsList = () => {
  const history = useHistory()

  const handleDetailsClick = () => {
    history.push('/support/tickets/details')
  }

  const handleAddClick = () => {
    history.push('/support/tickets/new')
  }

  return (
    <CContainer>
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
            <CTable hover responsive style={{ minWidth: '50rem' }}>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Ticket ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    <CButton color="primary" onClick={handleAddClick}>
                      Add New
                    </CButton>
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>24 Dec 2020 - 12.45 PM</CTableDataCell>
                  <CTableDataCell>00123456789</CTableDataCell>
                  <CTableDataCell>Lorem ipsum dolor sit amet, consectetur…</CTableDataCell>
                  <CTableDataCell>
                    <CBadge color="info" className="mt-1">
                      New
                    </CBadge>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm" onClick={handleDetailsClick}>
                      View Details
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>24 Dec 2020 - 12.45 PM</CTableDataCell>
                  <CTableDataCell>00123456789</CTableDataCell>
                  <CTableDataCell>Lorem ipsum dolor sit amet, consectetur…</CTableDataCell>
                  <CTableDataCell>
                    <CBadge color="success" className="mt-1">
                      On process
                    </CBadge>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm" onClick={handleDetailsClick}>
                      View Details
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>24 Dec 2020 - 12.45 PM</CTableDataCell>
                  <CTableDataCell>00123456789</CTableDataCell>
                  <CTableDataCell>Lorem ipsum dolor sit amet, consectetur…</CTableDataCell>
                  <CTableDataCell>
                    <CBadge color="success" className="mt-1">
                      On process
                    </CBadge>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm" onClick={handleDetailsClick}>
                      View Details
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>24 Dec 2020 - 12.45 PM</CTableDataCell>
                  <CTableDataCell>00123456789</CTableDataCell>
                  <CTableDataCell>Lorem ipsum dolor sit amet, consectetur…</CTableDataCell>
                  <CTableDataCell>
                    <CBadge color="success" className="mt-1">
                      On process
                    </CBadge>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm" onClick={handleDetailsClick}>
                      View Details
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>24 Dec 2020 - 12.45 PM</CTableDataCell>
                  <CTableDataCell>00123456789</CTableDataCell>
                  <CTableDataCell>Lorem ipsum dolor sit amet, consectetur…</CTableDataCell>
                  <CTableDataCell>
                    <CBadge color="danger" className="mt-1">
                      Closed
                    </CBadge>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm" onClick={handleDetailsClick}>
                      View Details
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>24 Dec 2020 - 12.45 PM</CTableDataCell>
                  <CTableDataCell>00123456789</CTableDataCell>
                  <CTableDataCell>Lorem ipsum dolor sit amet, consectetur…</CTableDataCell>
                  <CTableDataCell>
                    <CBadge color="danger" className="mt-1">
                      Closed
                    </CBadge>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm" onClick={handleDetailsClick}>
                      View Details
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>24 Dec 2020 - 12.45 PM</CTableDataCell>
                  <CTableDataCell>00123456789</CTableDataCell>
                  <CTableDataCell>Lorem ipsum dolor sit amet, consectetur…</CTableDataCell>
                  <CTableDataCell>
                    <CBadge color="danger" className="mt-1">
                      Closed
                    </CBadge>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm" onClick={handleDetailsClick}>
                      View Details
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>24 Dec 2020 - 12.45 PM</CTableDataCell>
                  <CTableDataCell>00123456789</CTableDataCell>
                  <CTableDataCell>Lorem ipsum dolor sit amet, consectetur…</CTableDataCell>
                  <CTableDataCell>
                    <CBadge color="danger" className="mt-1">
                      Closed
                    </CBadge>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm" onClick={handleDetailsClick}>
                      View Details
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
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
  )
}

export default TicketsList
