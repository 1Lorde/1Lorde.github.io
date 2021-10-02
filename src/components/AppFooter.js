import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="d-flex justify-content-center mt-4">
      <div>
        <a href="https://ekoop.id/" target="_blank" rel="noopener noreferrer">
          Ekoop.id
        </a>
        <span className="ms-1"> - Koperasi Digital Indonesia &copy; 2020</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
