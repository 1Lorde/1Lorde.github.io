import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CImage, CSidebar, CSidebarBrand, CSidebarFooter, CSidebarNav } from '@coreui/react'

import { AppSidebarNav } from './AppSidebarNav'

import logo from 'src/assets/images/ekoop_logo.png'
import logo_small from 'src/assets/images/ekoop_logo_small.png'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import { admin_nav, koperasi_nav } from '../navigation/_nav'
import { UserContext } from '../helpers/user'
import { Roles } from '../helpers/role'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const { userState } = useContext(UserContext)

  function getSidebarBrand() {
    if (userState.company) {
      return <strong>{userState.company.company}</strong>
    }

    if (Roles[userState.user.role] === Roles['app-owner']) {
      return <CImage className="m-3" src={logo_small} height={60} />
    }
  }

  function getAppSideBarNav() {
    if (Roles[userState.user.role] === Roles['app-owner']) {
      return <AppSidebarNav items={admin_nav} />
    }
    return <AppSidebarNav items={koperasi_nav} />
  }

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        {getSidebarBrand()}
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>{getAppSideBarNav()}</SimpleBar>
      </CSidebarNav>
      <CSidebarFooter>
        <div className="text-center">
          <h6>Powered by:</h6>
          <CImage className="mt-1" src={logo} height={25} />
        </div>
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
