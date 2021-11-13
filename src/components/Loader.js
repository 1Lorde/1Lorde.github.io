import { CCol, CContainer, CRow, CSpinner } from '@coreui/react'
import React from 'react'

const Loader = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow>
          <CCol className="d-flex justify-content-center">
            <CSpinner color="primary" />
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}
export default Loader
