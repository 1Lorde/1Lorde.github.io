import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilAccountLogout, cilBell, cilCog, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import AuthService from '../services/auth.service'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  function handleLogOut() {
    AuthService.logout()
    window.location.reload()
  }

  return (
    <CHeader position="sticky" className="mb-4">
      <CHeaderToggler
        className="ps-1"
        onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
      >
        <CIcon icon={cilMenu} size="lg" />
        <CHeaderBrand className="ms-4">COMPANY NAME</CHeaderBrand>
      </CHeaderToggler>
      <CHeaderNav className="m-2 align-items-baseline">
        <h6 className="d-none d-lg-block">Full Name of User</h6>
        <CHeaderNav className="ms-2">
          <AppHeaderDropdown />
        </CHeaderNav>
        <CNavItem>
          <CNavLink href="#">
            <CIcon icon={cilBell} size="lg" />
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">
            <CIcon icon={cilCog} size="lg" />
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#" onClick={handleLogOut}>
            <CIcon icon={cilAccountLogout} size="lg" />
          </CNavLink>
        </CNavItem>
      </CHeaderNav>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
