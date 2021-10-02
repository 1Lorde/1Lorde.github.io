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
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { useHistory } from 'react-router-dom'

const NasabahList = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push('/nasabah/details')
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
            <CTable hover responsive style={{ minWidth: '45rem' }}>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Full Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">WhatsApp Number</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Location</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    <CButton color="primary" size="sm">
                      Add New
                    </CButton>
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>Lorem ipsum dolor sit amet</CTableDataCell>
                  <CTableDataCell>0812345678910</CTableDataCell>
                  <CTableDataCell>Jakarta - Grogol </CTableDataCell>
                  <CTableDataCell>Active</CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm" onClick={handleClick}>
                      Edit
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Lorem ipsum dolor sit amet</CTableDataCell>
                  <CTableDataCell>0812345678910</CTableDataCell>
                  <CTableDataCell>Jakarta - Grogol </CTableDataCell>
                  <CTableDataCell>Active</CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm" onClick={handleClick}>
                      Edit
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Lorem ipsum dolor sit amet</CTableDataCell>
                  <CTableDataCell>0812345678910</CTableDataCell>
                  <CTableDataCell>Jakarta - Grogol </CTableDataCell>
                  <CTableDataCell>Active</CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm" onClick={handleClick}>
                      Edit
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Lorem ipsum dolor sit amet</CTableDataCell>
                  <CTableDataCell>0812345678910</CTableDataCell>
                  <CTableDataCell>Jakarta - Grogol </CTableDataCell>
                  <CTableDataCell>Active</CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm" onClick={handleClick}>
                      Edit
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Lorem ipsum dolor sit amet</CTableDataCell>
                  <CTableDataCell>0812345678910</CTableDataCell>
                  <CTableDataCell>Jakarta - Grogol </CTableDataCell>
                  <CTableDataCell>Active</CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm" onClick={handleClick}>
                      Edit
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Lorem ipsum dolor sit amet</CTableDataCell>
                  <CTableDataCell>0812345678910</CTableDataCell>
                  <CTableDataCell>Jakarta - Grogol </CTableDataCell>
                  <CTableDataCell>Active</CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm" onClick={handleClick}>
                      Edit
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Lorem ipsum dolor sit amet</CTableDataCell>
                  <CTableDataCell>0812345678910</CTableDataCell>
                  <CTableDataCell>Jakarta - Grogol </CTableDataCell>
                  <CTableDataCell>Active</CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm" onClick={handleClick}>
                      Edit
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

export default NasabahList
