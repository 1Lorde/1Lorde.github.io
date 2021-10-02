import React from 'react'
import {
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
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell } from '@coreui/icons'

const Notifications = () => {
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
            <CTable hover responsive style={{ minWidth: '30rem' }}>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CIcon icon={cilBell} />
                  </CTableHeaderCell>
                  <CTableDataCell>24 Dec 2020 - 12.45 PM</CTableDataCell>
                  <CTableDataCell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac tortor
                    nibh …
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm">
                      View Details
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CIcon icon={cilBell} />
                  </CTableHeaderCell>
                  <CTableDataCell>24 Dec 2020 - 12.45 PM</CTableDataCell>
                  <CTableDataCell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac tortor
                    nibh …
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm">
                      View Details
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CIcon icon={cilBell} />
                  </CTableHeaderCell>
                  <CTableDataCell>24 Dec 2020 - 12.45 PM</CTableDataCell>
                  <CTableDataCell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac tortor
                    nibh …
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm">
                      View Details
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CIcon icon={cilBell} />
                  </CTableHeaderCell>
                  <CTableDataCell>24 Dec 2020 - 12.45 PM</CTableDataCell>
                  <CTableDataCell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac tortor
                    nibh …
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm">
                      View Details
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CIcon icon={cilBell} />
                  </CTableHeaderCell>
                  <CTableDataCell>24 Dec 2020 - 12.45 PM</CTableDataCell>
                  <CTableDataCell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac tortor
                    nibh …
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm">
                      View Details
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CIcon icon={cilBell} />
                  </CTableHeaderCell>
                  <CTableDataCell>24 Dec 2020 - 12.45 PM</CTableDataCell>
                  <CTableDataCell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac tortor
                    nibh …
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm">
                      View Details
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CIcon icon={cilBell} />
                  </CTableHeaderCell>
                  <CTableDataCell>24 Dec 2020 - 12.45 PM</CTableDataCell>
                  <CTableDataCell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac tortor
                    nibh …
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm">
                      View Details
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CIcon icon={cilBell} />
                  </CTableHeaderCell>
                  <CTableDataCell>24 Dec 2020 - 12.45 PM</CTableDataCell>
                  <CTableDataCell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac tortor
                    nibh …
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm">
                      View Details
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CIcon icon={cilBell} />
                  </CTableHeaderCell>
                  <CTableDataCell>24 Dec 2020 - 12.45 PM</CTableDataCell>
                  <CTableDataCell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac tortor
                    nibh …
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm">
                      View Details
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CIcon icon={cilBell} />
                  </CTableHeaderCell>
                  <CTableDataCell>24 Dec 2020 - 12.45 PM</CTableDataCell>
                  <CTableDataCell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac tortor
                    nibh …
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm">
                      View Details
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CIcon icon={cilBell} />
                  </CTableHeaderCell>
                  <CTableDataCell>24 Dec 2020 - 12.45 PM</CTableDataCell>
                  <CTableDataCell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac tortor
                    nibh …
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm">
                      View Details
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">
                    <CIcon icon={cilBell} />
                  </CTableHeaderCell>
                  <CTableDataCell>24 Dec 2020 - 12.45 PM</CTableDataCell>
                  <CTableDataCell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac tortor
                    nibh …
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm">
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

export default Notifications
