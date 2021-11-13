import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  CBadge,
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
import { clearLocalToken, UserContext } from '../helpers/user'
import { Roles } from '../helpers/role'
import { store } from 'react-notifications-component'
import { success } from '../helpers/notifications'

const AppHeader = () => {
  const sidebarDispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const { userState, userDispatch } = useContext(UserContext)

  function handleLogOut() {
    userDispatch({ type: 'logout' })
    clearLocalToken()
    store.addNotification(success('Logged out'))
  }

  function getHeaderBrand() {
    if (userState.company) {
      return userState.company.company.toUpperCase()
    }

    if (Roles[userState.user.role] === Roles['app-owner']) {
      return 'EKOOP.ID - KOPERASI DIGITAL INDONESIA'
    }
  }

  return (
    <CHeader position="sticky" className="mb-4">
      <CHeaderToggler
        className="ps-1"
        onClick={() => sidebarDispatch({ type: 'set', sidebarShow: !sidebarShow })}
      >
        <CIcon icon={cilMenu} size="lg" />
        <CHeaderBrand className="ms-4">{getHeaderBrand()}</CHeaderBrand>
      </CHeaderToggler>
      <CHeaderNav className="m-2 align-items-center">
        <CNavItem>
          <h6 className="d-none d-lg-block">{userState.user.name}</h6>
          <CBadge className="d-none d-lg-block" color="dark" shape="rounded-pill">
            {Roles[userState.user.role]}
          </CBadge>
        </CNavItem>
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
