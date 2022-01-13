import axios from 'axios'
import { authHeader } from './requestHeaders'

const API_URL = 'https://api.ekoop.id/v01'

export function getTickets(skip, searchQuery) {
  return axios
    .get(API_URL + '/tiket/tickets?skip=' + skip + '&search=' + searchQuery, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      console.log(reason)
    })
}

export function getTicket(uid) {
  return axios
    .get(API_URL + '/tiket/tickets/' + uid, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      console.log(reason)
    })
}

export function closeTicket(id) {
  return axios
    .put(
      API_URL + '/tiket/tickets/' + id,
      { status: 3 },
      {
        headers: authHeader(),
      },
    )
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      console.log(reason)
    })
}

export function createTicket(ticket) {
  return axios
    .post(
      API_URL + '/tiket/tickets',
      {
        subject: ticket.title,
        description: ticket.description,
        type: 'Issue',
        priority: 'Normal',
      },
      {
        headers: authHeader(),
      },
    )
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      console.log(reason.response.data)
    })
}

export function createComment(ticketId, comment) {
  return axios
    .post(
      API_URL + '/tiket/tickets/comment',
      {
        ticket_id: ticketId,
        text: comment,
      },
      {
        headers: authHeader(),
      },
    )
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      console.log(reason.response.data)
    })
}

export function createUser(userId, wa_number, fullname) {
  return axios
    .post(
      API_URL + '/tiket/users',
      {
        ekoop_user_id: userId,
        username: wa_number.replace('+', ''),
        password: wa_number.replace('+', '') + '123!',
        email: wa_number.replace('+', '') + '@example.com',
        fullname: fullname,
      },
      {
        headers: authHeader(),
      },
    )
    .then((response) => {
      return response.data
    })
    .catch((reason) => {
      console.log(reason.response.data)
    })
}
