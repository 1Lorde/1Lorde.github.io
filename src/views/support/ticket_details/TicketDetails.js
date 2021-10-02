import React from 'react'
import 'react-chat-elements/dist/main.css'

import { MessageList } from 'react-chat-elements'
import { CButton, CCallout, CContainer } from '@coreui/react'

const TicketDetails = () => {
  return (
    <CContainer>
      <CCallout className="mb-5" color="info" style={{ backgroundColor: 'white' }}>
        <div className="d-flex justify-content-between">
          <span>Created: 24 Dec 2020 - 12:45</span>
          <span>Ticket ID #00123456789</span>
        </div>
        <hr />
        <div className="d-flex justify-content-start">
          <h5>Title:</h5>
          <span className="ms-3">Ticket title</span>
        </div>
      </CCallout>

      <MessageList
        className="message-list"
        lockable={true}
        toBottomHeight={'100%'}
        dataSource={[
          {
            position: 'right',
            type: 'text',
            text:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac\n' +
              'tortor nibh. Aenean blandit faucibus augue pretium hendrerit.\n' +
              'Aliquam erat volutpat. Praesent lorem lorem, mollis convallis nibh\n' +
              'nec, aliquet ultricies purus.',
            dateString: '24 Dec 2020 - 12:45',
            status: 'read',
          },
          {
            position: 'right',
            type: 'photo',
            dateString: '24 Dec 2020 - 12:45',
            data: {
              uri: 'https://via.placeholder.com/256x256?text=image',
              status: {
                click: true,
                loading: 0.54,
              },
            },
            status: 'read',
          },
          {
            position: 'left',
            type: 'text',
            text:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac\n' +
              'tortor nibh. Aenean blandit faucibus augue pretium hendrerit.\n' +
              'Aliquam erat volutpat. Praesent lorem lorem, mollis convallis nibh\n' +
              'nec, aliquet ultricies purus.',
            dateString: '24 Dec 2020 - 12:45',
            status: 'read',
          },
        ]}
      />
      <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
        <CButton color="primary" className="me-md-2" variant="outline">
          Close Ticket
        </CButton>
        <CButton color="dark" className="me-md-2" variant="outline">
          Send Picture
        </CButton>
        <CButton color="dark" className="me-md-2" variant="outline">
          New Comment
        </CButton>
      </div>
    </CContainer>
  )
}

export default TicketDetails
