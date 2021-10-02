import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CImage, CSidebar, CSidebarBrand, CSidebarFooter, CSidebarNav } from '@coreui/react'

import { AppSidebarNav } from './AppSidebarNav'

import logo from 'src/assets/images/ekoop_logo.png'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

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
        COMPANY LOGO
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarFooter>
        <div className="text-center">
          <h6>Powered by:</h6>
          <CImage className="mt-1" src={logo} height={30} />
        </div>
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
