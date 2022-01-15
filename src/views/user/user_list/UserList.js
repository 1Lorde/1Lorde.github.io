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
import { Roles } from '../../../helpers/role'
import { Table } from '../../../components/Table'
import { getUsers } from '../../../api/api_user'
import { cilPen } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useTranslation } from 'react-i18next'

const UserList = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const [hasLoaded, setHasLoaded] = useState(false)
  const [users, setUsers] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [status, setStatus] = useState('')
  const [role, setRole] = useState('')
  const [sort, setSort] = useState('')
  const [pageCount, setPageCount] = useState(0)
  const fetchIdRef = useRef(0)

  function getStatusBadge(status) {
    switch (status.toLowerCase()) {
      case 'active':
        return (
          <CBadge className="mt-1" color="success" shape="rounded-pill">
            {t('active')}
          </CBadge>
        )
      case 'inactive':
        return (
          <CBadge className="mt-1" color="secondary" shape="rounded-pill">
            {t('inactive')}
          </CBadge>
        )
      default:
        return (
          <CBadge className="mt-1" color="dark" shape="rounded-pill">
            {t('unknown')}
          </CBadge>
        )
    }
  }

  const fetchData = useCallback(
    ({ skip }) => {
      const fetchId = ++fetchIdRef.current
      if (fetchId === fetchIdRef.current) {
        setHasLoaded(false)
        getUsers(skip, searchQuery, status, role, sort).then((data) => {
          console.log(data)
          let pages = Math.floor(data.pagination.total / data.pagination.limit)
          if (data.pagination.total / data.pagination.limit > pageCount) {
            pages += 1
          }
          setPageCount(pages)
          setUsers(
            data.data?.map((item) => {
              return {
                name: item.name,
                number: item.wa_number,
                role: Roles[item.role],
                status: getStatusBadge(item.status.toUpperCase()),
                action: (
                  <CButton
                    color="dark"
                    size={'sm'}
                    onClick={() => history.push('/users/' + item.id)}
                  >
                    <CIcon icon={cilPen} className="me-1" />
                    {t('edit')}
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
    [history, searchQuery, status, role, sort],
  )

  const columns = React.useMemo(
    () => [
      {
        Header: t('name'),
        accessor: 'name',
      },
      {
        Header: t('whatsapp'),
        accessor: 'number',
      },
      {
        Header: t('role'),
        accessor: 'role',
      },
      {
        Header: t('status'),
        accessor: 'status',
      },
      {
        Header: t('action'),
        accessor: 'action',
      },
    ],
    [t],
  )

  return (
    <CContainer>
      <CRow className="align-items-center">
        <CCol>
          <CFormLabel htmlFor="searchInput">{t('search')}</CFormLabel>
          <CFormInput
            type="text"
            id="searchInput"
            placeholder={t('enter_search_query')}
            onChange={(e) => {
              setSearchQuery(e.target.value)
            }}
          />
        </CCol>
        <CCol>
          <CFormLabel htmlFor="statusInput">{t('status')}</CFormLabel>
          <CFormSelect
            id="statusInput"
            onChange={(e) => {
              setStatus(e.target.value)
            }}
          >
            <option value="">{t('all')}</option>
            <option value="inactive">{t('inactive')}</option>
            <option value="active">{t('active')}</option>
          </CFormSelect>
        </CCol>
        <CCol>
          <CFormLabel htmlFor="roleInput">{t('role')}</CFormLabel>
          <CFormSelect
            id="roleInput"
            onChange={(e) => {
              setRole(e.target.value)
            }}
          >
            <option value="">{t('all')}</option>
            <option value="app-owner">{t('app_owner')}</option>
            <option value="product-technical">{t('product_technical')}</option>
            <option value="marketing-finance">{t('marketing_finance')}</option>
            <option value="koperasi-owner">{t('koperasi_owner')}</option>
            <option value="credit-analyst">{t('credit_analyst')}</option>
            <option value="account-officer">{t('account_officer')}</option>
          </CFormSelect>
        </CCol>
        <CCol>
          <CFormLabel htmlFor="sortInput">{t('sort_by')}</CFormLabel>
          <CFormSelect
            id="sortInput"
            onChange={(e) => {
              setSort(e.target.value)
            }}
          >
            <option value="name:asc">{t('name') + ' (' + t('ascending') + ')'}</option>
            <option value="name:desc">{t('name') + ' (' + t('descending') + ')'}</option>
            <option value="created_at:desc">{t('created_new')}</option>
            <option value="created_at:asc">{t('created_old')}</option>
          </CFormSelect>
        </CCol>
        <CCol className={'d-flex justify-content-end'}>
          <CButton color="primary" onClick={() => history.push('/users/create')}>
            {t('add_new')}
          </CButton>
        </CCol>
      </CRow>
      <br />
      <CRow>
        <CCard>
          <CCardBody>
            <Table
              columns={columns}
              data={users}
              controlledPageCount={pageCount}
              fetchData={fetchData}
              hasLoaded={hasLoaded}
            />
          </CCardBody>
        </CCard>
      </CRow>
    </CContainer>
  )
}

export default UserList
