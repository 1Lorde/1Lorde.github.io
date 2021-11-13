import React, { useReducer } from 'react'
import { HashRouter, Switch } from 'react-router-dom'
import ReactNotification from 'react-notifications-component'

import './scss/style.scss'
import 'react-notifications-component/dist/theme.css'
import 'animate.css'

import PublicRoute from './routes/PublicRoute'
import PrivateRoute from './routes/PrivateRoute'
import Loader from './components/Loader'
import { UserContext, userReducer } from './helpers/user'
import { allRoles } from './helpers/role'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const ResetPassword = React.lazy(() => import('./views/pages/reset_password/ResetPassword'))
const InputOtp = React.lazy(() => import('./views/pages/input_otp/InputOtp'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page401 = React.lazy(() => import('./views/pages/page401/Page401'))

export default function App() {
  const [userState, userDispatch] = useReducer(userReducer, {})

  return (
    <HashRouter>
      <React.Suspense fallback={Loader()}>
        <ReactNotification />
        <UserContext.Provider value={{ userState, userDispatch }}>
          <Switch>
            <PublicRoute exact restricted component={Login} path="/login" />
            <PublicRoute exact restricted component={ResetPassword} path="/reset_password" />
            <PublicRoute exact component={InputOtp} path="/input_otp" />
            <PublicRoute exact component={Page404} path="/404" />
            <PublicRoute exact component={Page401} path="/401" />
            <PrivateRoute allowedRoles={allRoles()} component={DefaultLayout} path="/" />
          </Switch>
        </UserContext.Provider>
      </React.Suspense>
    </HashRouter>
  )
}