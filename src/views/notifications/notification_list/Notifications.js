import React, { useCallback, useRef, useState } from 'react'
import { CButton, CCard, CCardBody, CContainer, CRow } from '@coreui/react'
import { getNotifications } from '../../../api/api_notification'
import { Table } from '../../../components/Table'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Notifications = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const [notifications, setNotifications] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [hasLoaded, setHasLoaded] = useState(false)
  const fetchIdRef = useRef(0)

  const fetchData = useCallback(({ skip }) => {
    const fetchId = ++fetchIdRef.current
    if (fetchId === fetchIdRef.current) {
      setHasLoaded(false)
      getNotifications(skip).then((data) => {
        if (data.ok) {
          console.log(data)
          let pages = Math.floor(data.pagination.total / data.pagination.limit)
          if (data.pagination.total / data.pagination.limit > pageCount) {
            pages += 1
          }
          setPageCount(pages)
          setNotifications(
            data.data?.map((item) => {
              return {
                created: item.created,
                sender: item.sender,
                title: item.title,
                content: item.content,
                action: (
                  <CButton
                    color="dark"
                    size={'sm'}
                    onClick={() => history.push('/notifications/' + item.id)}
                  >
                    {t('view')}
                  </CButton>
                ),
              }
            }),
          )
          setHasLoaded(true)
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const columns = React.useMemo(
    () => [
      {
        Header: t('date'),
        accessor: 'created',
      },
      {
        Header: t('sender'),
        accessor: 'sender',
      },
      {
        Header: t('title'),
        accessor: 'title',
      },
      {
        Header: t('content'),
        accessor: 'content',
      },
      {
        Header: t('action'),
        accessor: 'action',
      },
    ],
    [t],
  )

  return (
    <CContainer fluid>
      <CRow>
        <CCard>
          <CCardBody>
            <Table
              columns={columns}
              data={notifications}
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

export default Notifications
