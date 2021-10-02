import React from 'react'
import { CButton, CCard, CCardBody, CContainer, CForm, CFormInput, CFormLabel } from '@coreui/react'

const ChangePassword = () => {
  return (
    <CContainer class="d-flex justify-content-center">
      <CCard style={{ width: '35rem' }}>
        <CCardBody>
          <CForm>
            <div className="mb-3">
              <CFormLabel htmlFor="old_pass">Old Password</CFormLabel>
              <CFormInput type="text" id="old_pass" />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="new_pass">New Password</CFormLabel>
              <CFormInput type="text" id="new_pass" />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="confirm_new_pass">Confirm New Password</CFormLabel>
              <CFormInput type="text" id="confirm_new_pass" />
            </div>
            <div className="d-flex justify-content-end">
              <CButton color="primary">Save</CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default ChangePassword
