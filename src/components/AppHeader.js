import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  CBadge,
  CContainer,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cifGb, cifId, cilAccountLogout, cilBell, cilGlobeAlt, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { clearLocalToken, UserContext } from '../helpers/user'
import { Roles } from '../helpers/role'
import { store } from 'react-notifications-component'
import { success } from '../helpers/notifications'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const AppHeader = () => {
  const { t } = useTranslation()
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
      return t('header')
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
        <CDropdown variant="nav-item">
          <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
            <CIcon icon={cilGlobeAlt} size="lg" />
          </CDropdownToggle>
          <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownHeader className="bg-light fw-semibold py-2">
              {t('change_language')}
            </CDropdownHeader>
            <CDropdownItem
              style={{ cursor: 'pointer' }}
              onClick={() => {
                i18next.changeLanguage('en').then((t) => {
                  window.location.reload()
                })
              }}
            >
              <CIcon icon={cifGb} className="me-2" />
              English
            </CDropdownItem>
            <CDropdownItem
              style={{ cursor: 'pointer' }}
              onClick={() => {
                i18next.changeLanguage('id').then((t) => {
                  window.location.reload()
                })
              }}
            >
              <CIcon icon={cifId} className="me-2" />
              Indonesian
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
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
