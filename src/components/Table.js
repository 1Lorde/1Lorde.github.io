import { usePagination, useTable } from 'react-table'
import {
  CContainer,
  CFormInput,
  CHeaderText,
  CPagination,
  CPaginationItem,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React, { useEffect } from 'react'
import Loader from './Loader'

// eslint-disable-next-line react/prop-types
export function Table({ columns, data, controlledPageCount, fetchData, hasLoaded }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: 10,
      },
      manualPagination: true,
      pageCount: controlledPageCount,
    },
    usePagination,
  )

  useEffect(() => {
    const skip = pageIndex * 10
    fetchData && fetchData({ skip })
  }, [fetchData, pageIndex])
  return hasLoaded ? (
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
          max={controlledPageCount}
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
        <CPaginationItem aria-label="First" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </CPaginationItem>
        <CPaginationItem
          aria-label="Previous"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {'<'}
        </CPaginationItem>
        <CPaginationItem aria-label="Current" style={{ pointerEvents: 'none' }}>
          Page <strong>{pageIndex + 1}</strong> of <strong>{pageOptions.length}</strong>
        </CPaginationItem>
        <CPaginationItem aria-label="Next" onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </CPaginationItem>
        <CPaginationItem
          aria-label="Last"
          onClick={() => gotoPage(controlledPageCount - 1)}
          disabled={!canNextPage}
        >
          {'>>'}
        </CPaginationItem>
      </CPagination>
    </>
  ) : (
    Loader()
  )
}
