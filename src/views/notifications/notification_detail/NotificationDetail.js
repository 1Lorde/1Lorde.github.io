import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
} from '@coreui/react'

import { useHistory, useParams } from 'react-router-dom'
import Loader from '../../../components/Loader'
import { getNotification } from '../../../api/api_notification'
import { useTranslation } from 'react-i18next'

const NotificationDetail = () => {
  const { t } = useTranslation()
  const history = useHistory()
  let { id } = useParams()
  const [notification, setNotification] = useState()
  const [hasLoaded, setHasLoaded] = useState()

  useEffect(
    () => {
      getNotification(id).then((data) => {
        setNotification(data.data)
        setHasLoaded(true)
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  return hasLoaded ? (
    <CContainer className="d-flex justify-content-center">
      <CCard style={{ width: '35rem' }}>
        <CCardBody>
          <CForm>
            <div className="mb-3">
              <CFormLabel htmlFor="date">{t('date')}</CFormLabel>
              <CFormInput type="text" id="date" readOnly defaultValue={notification.created} />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="sender">{t('sender')}</CFormLabel>
              <CFormInput type="text" id="sender" readOnly defaultValue={notification.sender} />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="title">{t('title')}</CFormLabel>
              <CFormInput type="text" id="title" readOnly defaultValue={notification.title} />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="content">{t('content')}</CFormLabel>
              <CFormTextarea
                type="text"
                id="content"
                readOnly
                defaultValue={notification.content}
              />
            </div>
            <div className="mb-3">
              <CButton
                onClick={() => {
                  history.push('/notifications')
                }}
              >
                {t('return_back')}
              </CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </CContainer>
  ) : (
    Loader()
  )
}

export default NotificationDetail
