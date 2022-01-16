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
import { Table } from '../../../components/Table'
import { getNasabahList } from '../../../api/api_nasabah'
import { cilPen } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useTranslation } from 'react-i18next'

const NasabahList = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const [hasLoaded, setHasLoaded] = useState()
  const [nasabahList, setNasabah] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [status, setStatus] = useState('')
  const [pageCount, setPageCount] = useState(0)
  const fetchIdRef = useRef(0)

  const fetchData = useCallback(
    ({ skip }) => {
      const fetchId = ++fetchIdRef.current
      if (fetchId === fetchIdRef.current) {
        setHasLoaded(false)
        getNasabahList(skip, searchQuery, status).then((data) => {
          console.log(data)
          let pages = Math.floor(data.pagination.total / data.pagination.limit)
          if (data.pagination.total / data.pagination.limit > pageCount) {
            pages += 1
          }
          setPageCount(pages)
          setNasabah(
            data.data?.map((item) => {
              return {
                name: item.name,
                number: item.wa_number,
                location: item.address,
                status: item.active ? (
                  <CBadge className="mt-1" color="success" shape="rounded-pill">
                    {t('active').toUpperCase()}
                  </CBadge>
                ) : (
                  <CBadge className="mt-1" color="secondary" shape="rounded-pill">
                    {t('inactive').toUpperCase()}
                  </CBadge>
                ),
                action: (
                  <CButton
                    color="dark"
                    size={'sm'}
                    onClick={() => history.push('/nasabah/' + item.id)}
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
    [history, searchQuery, status],
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
        Header: t('location'),
        accessor: 'location',
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
            <option value="false">{t('inactive')}</option>
            <option value="true">{t('active')}</option>
          </CFormSelect>
        </CCol>
        <CCol className={'d-flex justify-content-end'}>
          <CButton color="primary" onClick={() => history.push('/nasabah/create')}>
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
              data={nasabahList}
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

export default NasabahList
