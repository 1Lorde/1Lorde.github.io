import React, { useCallback, useContext, useRef, useState } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
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
import { approveClient, getClients, rejectClient } from '../../../api/api_client'
import CIcon from '@coreui/icons-react'
import { cilCheck, cilPen, cilXCircle } from '@coreui/icons'
import { store } from 'react-notifications-component'
import { danger, info } from '../../../helpers/notifications'
import { createNotification } from '../../../api/api_notification'
import { Services } from '../../../helpers/notification_types'
import { UserContext } from '../../../helpers/user'
import { useTranslation } from 'react-i18next'

const ClientList = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const { userState } = useContext(UserContext)
  const [hasLoaded, setHasLoaded] = useState()
  const [clients, setClients] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [status, setStatus] = useState('')
  const [sort, setSort] = useState('')
  const [pageCount, setPageCount] = useState(0)
  const fetchIdRef = useRef(0)

  function handleApprove(id, name) {
    approveClient(id).then((data) => {
      if (data.ok) {
        createNotification(userState.user.wa_number, Services.clientReject, '').then((resp) => {
          console.log('Notification created: ' + resp.id)
        })
        store.addNotification(info(t('notifications.client_approve', { name: name })))
        window.location.reload()
      } else {
        console.log(data)
        store.addNotification(danger(t('notifications.error')))
      }
    })
  }

  function handleReject(id, name) {
    rejectClient(id).then((data) => {
      if (data.ok) {
        createNotification(userState.user.wa_number, Services.clientApprove, '').then((resp) => {
          console.log('Notification created: ' + resp)
        })
        store.addNotification(info(t('notifications.client_reject', { name: name })))
        window.location.reload()
      } else {
        console.log(data)
        store.addNotification(danger(t('notifications.error')))
      }
    })
  }

  function getStatusBadge(status) {
    switch (status.toLowerCase()) {
      case 'request':
        return (
          <CBadge className="mt-1" color="warning" shape="rounded-pill">
            {t('request')}
          </CBadge>
        )
      case 'verified':
        return (
          <CBadge className="mt-1" color="info" shape="rounded-pill">
            {t('verified')}
          </CBadge>
        )
      case 'active':
        return (
          <CBadge className="mt-1" color="success" shape="rounded-pill">
            {t('active')}
          </CBadge>
        )
      case 'reject':
        return (
          <CBadge className="mt-1" color="danger" shape="rounded-pill">
            {t('reject')}
          </CBadge>
        )
      default:
        return (
          <CBadge className="mt-1" color="secondary" shape="rounded-pill">
            {t('unknown')}
          </CBadge>
        )
    }
  }

  function getApprovalBar(status, id, name) {
    switch (status) {
      case 'verified':
        return (
          <CButtonGroup role="group" className="ms-3">
            <CButton
              color="success"
              variant="outline"
              size={'sm'}
              onClick={() => {
                handleApprove(id, name)
              }}
            >
              <div className="d-inline-flex align-items-center">
                <span>{t('approve')}</span>
                <CIcon icon={cilCheck} className="ms-1" />
              </div>
            </CButton>
            <CButton
              color="danger"
              variant="outline"
              size={'sm'}
              onClick={() => handleReject(id, name)}
            >
              <div className="d-inline-flex align-items-center">
                <span>{t('reject')}</span>
                <CIcon icon={cilXCircle} className="ms-1" />
              </div>
            </CButton>
          </CButtonGroup>
        )
      case 'reject':
        return (
          <CButton
            color="success"
            variant="outline"
            size={'sm'}
            onClick={() => handleApprove(id, name)}
          >
            <div className="d-inline-flex align-items-center">
              <span>{t('approve')}</span>
              <CIcon icon={cilCheck} className="ms-1" />
            </div>
          </CButton>
        )
      default:
        return <p className="text-medium-emphasis">{t('no_actions')}</p>
    }
  }

  const fetchData = useCallback(
    ({ skip }) => {
      const fetchId = ++fetchIdRef.current
      if (fetchId === fetchIdRef.current) {
        setHasLoaded(false)
        getClients(skip, searchQuery, status, sort).then((data) => {
          console.log(data)
          let pages = Math.floor(data.pagination.total / data.pagination.limit)
          if (data.pagination.total / data.pagination.limit > pageCount) {
            pages += 1
          }
          setPageCount(pages)
          setClients(
            data.data?.map((item) => {
              return {
                name: item.company,
                contact_wa_number: item.contact.wa_number,
                contact_name: item.contact.dir_name,
                status: getStatusBadge(item.status),
                actions: (
                  <CCol>
                    <CButton
                      color="dark"
                      size={'sm'}
                      onClick={() => history.push('/clients/' + item.id)}
                    >
                      <CIcon icon={cilPen} className="me-1" />
                      <span>{t('edit')}</span>
                    </CButton>
                  </CCol>
                ),
                approval: getApprovalBar(item.status.toLowerCase(), item.id, item.company),
              }
            }),
          )
          setHasLoaded(true)
        })
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [history, searchQuery, status, sort],
  )

  const columns = React.useMemo(
    () => [
      {
        Header: t('company_name'),
        accessor: 'name',
      },
      {
        Header: t('whatsapp'),
        accessor: 'contact_wa_number',
      },
      {
        Header: t('director_name'),
        accessor: 'contact_name',
      },
      {
        Header: t('status'),
        accessor: 'status',
      },
      {
        Header: t('approval'),
        accessor: 'approval',
      },
      {
        Header: '',
        accessor: 'actions',
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
            <option value="REQUEST">{t('request')}</option>
            <option value="VERIFIED">{t('verified')}</option>
            <option value="ACTIVE">{t('active')}</option>
            <option value="REJECT">{t('reject')}</option>
            <option value="NON_ACTIVE">{t('inactive')}</option>
            <option value="FAILED">{t('failed')}</option>
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
            <option value="created_at:desc">{t('created_new')}</option>
            <option value="created_at:asc">{t('created_old')}</option>
            <option value="company:asc">{t('company_name') + ' (' + t('ascending') + ')'}</option>
            <option value="company:desc">{t('company_name') + ' (' + t('descending') + ')'}</option>
            <option value="NPWP:asc">{t('npwp') + ' (' + t('ascending') + ')'}</option>
            <option value="NPWP:desc">{t('npwp') + ' (' + t('descending') + ')'}</option>
            <option value="contact_dir_name:asc">
              {t('contact') + ' ' + t('name') + ' (' + t('ascending') + ')'}
            </option>
            <option value="contact_dir_name:desc">
              {t('contact') + ' ' + t('name') + ' (' + t('descending') + ')'}
            </option>
            <option value="contact_ktp_id:asc">
              {t('contact') + ' ' + t('ktp') + ' (' + t('ascending') + ')'}
            </option>
            <option value="contact_ktp_id:desc">
              {t('contact') + ' ' + t('ktp') + ' (' + t('descending') + ')'}
            </option>
          </CFormSelect>
        </CCol>
        <CCol className={'d-flex justify-content-end'}>
          <CButton color="primary" onClick={() => history.push('/register')}>
            {t('register')}
          </CButton>
        </CCol>
      </CRow>
      <br />
      <CRow>
        <CCard>
          <CCardBody>
            <Table
              columns={columns}
              data={clients}
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

export default ClientList
