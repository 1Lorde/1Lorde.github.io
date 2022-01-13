import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CContainer,
  CForm,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CFormTextarea,
} from '@coreui/react'
import { useHistory } from 'react-router-dom'
import { store } from 'react-notifications-component'
import { danger, success } from '../../../helpers/notifications'
import { createTicket } from '../../../api/api_ticket'

const TicketCreate = () => {
  const history = useHistory()
  const [ticket, setTicket] = useState({})
  const [validated, setValidated] = useState(false)

  function handleCreate(event) {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    }
    setValidated(true)

    if (form.checkValidity()) {
      console.log(ticket)
      createTicket(ticket).then((data) => {
        if (data.ok) {
          store.addNotification(success('Ticket created successfully.'))
          history.push('/support/tickets')
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

  return (
    <CContainer className="d-flex justify-content-center">
      <CCard style={{ width: '35rem' }}>
        <CCardBody>
          <CForm noValidate validated={validated} onSubmit={handleCreate}>
            <div className="mb-3">
              <CFormLabel htmlFor="title">Title</CFormLabel>
              <CFormInput
                type="text"
                id="name"
                required
                onChange={(e) => {
                  setTicket((ticket) => ({ ...ticket, title: e.target.value }))
                }}
              />
              <CFormFeedback invalid>Please provide a title.</CFormFeedback>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="description">Description</CFormLabel>
              <CFormTextarea
                type="text"
                id="description"
                required
                onChange={(e) => {
                  setTicket((ticket) => ({
                    ...ticket,
                    description: e.target.value,
                  }))
                }}
              />
              <CFormFeedback invalid>Please provide an description.</CFormFeedback>
            </div>
            <div className="d-flex justify-content-end">
              <CButton color="primary" type="submit">
                Create
              </CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default TicketCreate
