import React, { useContext, useEffect, useState } from 'react'
import { AppContent, AppFooter, AppHeader, AppSidebar } from '../components/index'
import { clearLocalToken, getClientProfile, getProfile, UserContext } from '../helpers/user'
import Loader from '../components/Loader'
import { Roles } from '../helpers/role'

const DefaultLayout = () => {
  const [hasLoaded, setHasLoaded] = useState()
  const { userDispatch } = useContext(UserContext)

  useEffect(
    () => {
      getProfile().then((profile_data) => {
        if (profile_data === null) {
          clearLocalToken()
          userDispatch({ type: 'logout' })
        } else {
          if (
            [Roles['koperasi-owner'], Roles['account-officer']].includes(Roles[profile_data.role])
          ) {
            getClientProfile().then((data) => {
              userDispatch({ type: 'login', user: profile_data, company: data })
              setHasLoaded(true)
            })
          } else {
            userDispatch({ type: 'login', user: profile_data, company: null })
            setHasLoaded(true)
          }
        }
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  return hasLoaded ? (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  ) : (
    Loader()
  )
}

export default DefaultLayout
