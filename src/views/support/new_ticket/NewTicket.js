import React from 'react'
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

const NewTicket = () => {
  return (
    <CContainer className="d-flex justify-content-center">
      <CCard style={{ width: '35rem' }}>
        <CCardBody>
          <CForm>
            <div className="mb-3">
              <CFormLabel htmlFor="title">Title</CFormLabel>
              <CFormInput type="text" id="title" />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="description">Description</CFormLabel>
              <CFormTextarea type="text" id="description" rows={5} />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="upload">Upload Pictures</CFormLabel>
              <CFormInput type="file" id="upload" aria-label="Upload" />
            </div>
            <div className="d-flex justify-content-end">
              <CButton color="primary">Submit</CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default NewTicket
