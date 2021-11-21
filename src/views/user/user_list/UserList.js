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
import { getUsers } from '../../../helpers/api_requests'
import Loader from '../../../components/Loader'
import { useTable, usePagination } from 'react-table'
import { Roles } from '../../../helpers/role'

const UserList = () => {
  const history = useHistory()
  const [hasLoaded, setHasLoaded] = useState()
  const [users, setUsers] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

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
    getUsers(searchQuery).then((data) => {
      setUsers(
        data?.map((item) => {
          return {
            name: item.name,
            number: item.wa_number,
            role: Roles[item.role],
            status: item.status,
            action: (
              <CButton color="dark" size={'sm'} onClick={() => history.push('/users/' + item.id)}>
                Edit
              </CButton>
            ),
          }
        }),
      )
      setHasLoaded(true)
    })
  }, [history, searchQuery])

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
        Header: 'Role',
        accessor: 'role',
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
          <CFormSelect>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </CFormSelect>
        </CCol>
        <CCol className={'d-flex justify-content-end'}>
          <CButton color="primary" onClick={() => history.push('/users/create')}>
            Add New
          </CButton>
        </CCol>
      </CRow>
      <br />
      <CRow>
        <CCard>
          <CCardBody>
            {users.length > 0 ? (
              <Table columns={columns} data={users} />
            ) : (
              <>
                <div className="d-flex justify-content-center">
                  <CHeaderText>No users found</CHeaderText>
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

export default UserList
