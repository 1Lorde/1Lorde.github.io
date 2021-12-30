import { useTable } from 'react-table'
import {
  CCol,
  CSpinner,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React, { useEffect } from 'react'

// eslint-disable-next-line react/prop-types
export function SimpleTable({ columns, data, fetchData, hasLoaded }) {
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } = useTable({
    columns,
    data,
  })

  useEffect(() => {
    fetchData()
  }, [fetchData])
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
          {rows.map((row, index) => {
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
    </>
  ) : (
    <CCol className="d-flex justify-content-center">
      <CSpinner color="primary" />
    </CCol>
  )
}
