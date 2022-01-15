import React, { useContext, useEffect, useState } from 'react'
import 'react-chat-elements/dist/main.css'

import { MessageList } from 'react-chat-elements'
import { SystemMessage } from 'react-chat-elements'
import {
  CBadge,
  CButton,
  CCallout,
  CContainer,
  CForm,
  CFormFeedback,
  CFormInput,
  CFormLabel,
} from '@coreui/react'
import { useHistory, useParams } from 'react-router-dom'
import { closeTicket, createComment, getTicket } from '../../../api/api_ticket'
import Loader from '../../../components/Loader'
import { store } from 'react-notifications-component'
import { danger, success } from '../../../helpers/notifications'
import { UserContext } from '../../../helpers/user'
import { useTranslation } from 'react-i18next'

const TicketDetails = () => {
  const { t } = useTranslation()
  const { userState } = useContext(UserContext)
  const history = useHistory()
  let { uid } = useParams()
  const [ticket, setTicket] = useState()
  const [hasLoaded, setHasLoaded] = useState()
  const [hasNewComment, setHasNewComment] = useState(false)
  const [comment, setComment] = useState('')
  const [validated, setValidated] = useState(false)

  useEffect(
    () => {
      setHasLoaded(false)
      setValidated(false)
      getTicket(uid).then((data) => {
        setTicket(data.data)
        setHasLoaded(true)
        setHasNewComment(false)
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hasNewComment],
  )

  function getStatusBadge(status) {
    switch (status) {
      case 0:
        return (
          <CBadge className="mt-1" color="success" shape="rounded-pill">
            {t('new')}
          </CBadge>
        )
      case 1:
        return (
          <CBadge className="mt-1" color="danger" shape="rounded-pill">
            {t('open')}
          </CBadge>
        )
      case 2:
        return (
          <CBadge className="mt-1" color="info" shape="rounded-pill">
            {t('pending')}
          </CBadge>
        )
      case 3:
        return (
          <CBadge className="mt-1" color="secondary" shape="rounded-pill">
            {t('closed')}
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

  function handleCreateComment(event) {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    }
    setValidated(true)

    if (form.checkValidity()) {
      createComment(ticket._id, comment).then((data) => {
        if (data.ok) {
          setHasNewComment(true)
          store.addNotification(success(t('notifications.comment_create')))
        } else {
          if (data.message) {
            console.log(data)
            store.addNotification(danger(data.message))
          } else {
            console.log(data)
            store.addNotification(danger(data.error))
          }
        }
      })
    }
  }

  function handleClose() {
    closeTicket(ticket._id).then((data) => {
      if (data.ok) {
        store.addNotification(success(t('notifications.ticket_close')))
        history.push('/support/tickets')
      } else {
        store.addNotification(danger('notifications.error'))
      }
    })
  }

  return hasLoaded ? (
    <CContainer>
      <CCallout className="mb-5" color="info" style={{ backgroundColor: 'white' }}>
        <div className="d-flex justify-content-between">
          <span>
            {t('created') + ': '}
            {new Date(ticket.history[0].date).toLocaleString('en-US', {
              weekday: 'short', // long, short, narrow
              day: 'numeric', // numeric, 2-digit
              year: 'numeric', // numeric, 2-digit
              month: 'long', // numeric, 2-digit, long, short, narrow
              hour: 'numeric', // numeric, 2-digit
              minute: 'numeric', // numeric, 2-digit
              second: 'numeric', // numeric, 2-digit)
            })}
          </span>
          <span>
            {t('ticket_id') + ' #' + ticket.uid} {getStatusBadge(ticket.status)}
          </span>
        </div>
        <hr />
        <div className="d-flex justify-content-start">
          <h5>{t('ticket_id') + ':'}</h5>
          <span className="ms-3">{ticket.subject}</span>
        </div>
      </CCallout>
      <div style={{ overflowY: 'scroll', maxHeight: '40vh' }}>
        {ticket.history.map((action, index) => {
          return (
            <SystemMessage key={index} text={action.description + ' by ' + action.owner.fullname} />
          )
        })}
        <MessageList
          className="message-list"
          lockable={true}
          toBottomHeight={'100%'}
          dataSource={ticket.comments.map((comment, index) => {
            return {
              position:
                comment.owner.fullname === userState.company.contact.dir_name ? 'right' : 'left',
              type: 'text',
              text: <div className="mb-1" dangerouslySetInnerHTML={{ __html: comment.text }} />,
              date: new Date(),
            }
          })}
        />
      </div>
      <CForm noValidate validated={validated} onSubmit={handleCreateComment}>
        <div className="m-4">
          <CFormLabel htmlFor="comment">{t('comment')}</CFormLabel>
          <CFormInput
            type="text"
            id="comment"
            disabled={ticket.status === 3}
            required
            onChange={(e) => {
              setComment(e.target.value)
            }}
          />
          <CFormFeedback invalid>{t('invalid_comment')}</CFormFeedback>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <CButton
            color="primary"
            className="me-md-2"
            variant="outline"
            onClick={handleClose}
            disabled={ticket.status === 3}
          >
            {t('close_ticket')}
          </CButton>
          <CButton
            type={'submit'}
            color="dark"
            className="me-md-2"
            variant="outline"
            disabled={ticket.status === 3}
          >
            {t('new_comment')}
          </CButton>
        </div>
      </CForm>
    </CContainer>
  ) : (
    Loader()
  )
}

export default TicketDetails
