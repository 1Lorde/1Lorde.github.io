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
import { usePagination, useTable } from 'react-table'
import { getNasabah } from '../../../helpers/api_requests'
import Loader from '../../../components/Loader'

const NasabahList = () => {
  const history = useHistory()
  const [hasLoaded, setHasLoaded] = useState()
  const [nasabah, setNasabah] = useState([])

  // eslint-disable-next-line react/prop-types
  function Table({ columns, data }) {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      page,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      state: { pageIndex },
    } = useTable({ columns, data, autoResetPageIndex: true }, usePagination)

    return (
      <>
        <CTable hover responsive style={{ minWidth: '45rem' }} {...getTableProps()}>
          <CTableHead>
            {headerGroups.map((headerGroup, index) => (
              <CTableRow key={index} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => (
                  <CTableHeaderCell key={index} {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </CTableHeaderCell>
                ))}
              </CTableRow>
            ))}
          </CTableHead>
          <CTableBody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row)
              return (
                <CTableRow key={index} {...row.getRowProps()}>
                  {row.cells.map((cell, index) => {
                    return (
                      <CTableDataCell key={index} {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </CTableDataCell>
                    )
                  })}
                </CTableRow>
              )
            })}
          </CTableBody>
        </CTable>

        <CContainer className={'d-flex justify-content-end align-items-center'}>
          <CHeaderText className={'pe-2'}>Go to page:</CHeaderText>
          <CFormInput
            min={1}
            max={pageCount}
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </CContainer>

        <CPagination align="center" aria-label="Page navigation">
          <CPaginationItem
            aria-label="First"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {'<<'}
          </CPaginationItem>
          <CPaginationItem
            aria-label="Previous"
            onClick={() => previousPage()}
            disabled={!canNextPage}
          >
            {'<'}
          </CPaginationItem>
          <CPaginationItem aria-label="Current" style={{ pointerEvents: 'none' }}>
            Page <strong>{pageIndex + 1}</strong> of <strong>{pageOptions.length}</strong>
          </CPaginationItem>
          <CPaginationItem aria-label="Next" onClick={() => nextPage()} disabled={!canPreviousPage}>
            {'>'}
          </CPaginationItem>
          <CPaginationItem
            aria-label="Last"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {'>>'}
          </CPaginationItem>
        </CPagination>
      </>
    )
  }

  useEffect(() => {
    getNasabah().then((data) => {
      console.log(data)
      setNasabah(
        data?.map((item) => {
          return {
            name: item.name,
            number: item.wa_number,
            location: item.address,
            status: item.active ? 'Active' : 'Inactive',
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
  }, [])

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
            {nasabah.length > 0 ? (
              <Table columns={columns} data={nasabah} />
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
