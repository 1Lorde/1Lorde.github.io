import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CFormCheck,
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

const Task = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push('/users/details')
  }
  return (
    <CContainer fluid>
      <CRow className="mb-4">
        <CCol className="d-grid m-2">
          <CFormCheck
            button={{ color: 'primary', variant: 'outline' }}
            type="radio"
            name="options"
            id="option1"
            autoComplete="off"
            label="Today"
            defaultChecked
          />
        </CCol>
        <CCol className="d-grid m-2">
          <CFormCheck
            button={{ color: 'primary', variant: 'outline' }}
            type="radio"
            name="options"
            id="option2"
            autoComplete="off"
            label="Tomorrow"
          />
        </CCol>
        <CCol className="d-grid m-2">
          <CFormCheck
            button={{ color: 'primary', variant: 'outline' }}
            type="radio"
            name="options"
            id="option3"
            autoComplete="off"
            label="History"
          />
        </CCol>
      </CRow>
      <hr />
      <CRow className="mb-4 mt-4">
        <CCol className="d-grid m-2">
          <CFormCheck
            button={{ color: 'primary', variant: 'outline' }}
            type="radio"
            name="options2"
            id="cash_in"
            autoComplete="off"
            label="Cash-In"
            defaultChecked
          />
        </CCol>
        <CCol className="d-grid m-2">
          <CFormCheck
            button={{
              color: 'primary',
              variant: 'outline',
            }}
            type="radio"
            name="options2"
            id="cash_out"
            autoComplete="off"
            label="Cash Out - Total: Rp. 190.876.543,-"
          />
        </CCol>
      </CRow>
      <hr />
      <CRow className="align-items-center mt-4 mb-5">
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
      <CRow>
        <CCard>
          <CCardBody>
            <CTable hover responsive style={{ minWidth: '30rem' }}>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Address</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Account Number</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nominal</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>Lorem ipsum dolor sit amet</CTableDataCell>
                  <CTableDataCell>Jakarta - Kebagusan</CTableDataCell>
                  <CTableDataCell>123-00456789-01</CTableDataCell>
                  <CTableDataCell>Rp. 12.345.678,-</CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm" onClick={handleClick}>
                      View
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Lorem ipsum dolor sit amet</CTableDataCell>
                  <CTableDataCell>Jakarta - Kebagusan</CTableDataCell>
                  <CTableDataCell>123-00456789-01</CTableDataCell>
                  <CTableDataCell>Rp. 12.345.678,-</CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm" onClick={handleClick}>
                      View
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Lorem ipsum dolor sit amet</CTableDataCell>
                  <CTableDataCell>Jakarta - Kebagusan</CTableDataCell>
                  <CTableDataCell>123-00456789-01</CTableDataCell>
                  <CTableDataCell>Rp. 12.345.678,-</CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm" onClick={handleClick}>
                      View
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Lorem ipsum dolor sit amet</CTableDataCell>
                  <CTableDataCell>Jakarta - Kebagusan</CTableDataCell>
                  <CTableDataCell>123-00456789-01</CTableDataCell>
                  <CTableDataCell>Rp. 12.345.678,-</CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm" onClick={handleClick}>
                      View
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Lorem ipsum dolor sit amet</CTableDataCell>
                  <CTableDataCell>Jakarta - Kebagusan</CTableDataCell>
                  <CTableDataCell>123-00456789-01</CTableDataCell>
                  <CTableDataCell>Rp. 12.345.678,-</CTableDataCell>
                  <CTableDataCell>
                    <CButton color={'dark'} size="sm" onClick={handleClick}>
                      View
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

export default Task
