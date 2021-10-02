import React, { Component } from 'react'
import { HashRouter, Switch } from 'react-router-dom'
import './scss/style.scss'
import PublicRoute from './routes/PublicRoute'
import PrivateRoute from './routes/PrivateRoute'
import { CCol, CContainer, CRow, CSpinner } from '@coreui/react'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const ResetPassword = React.lazy(() => import('./views/pages/reset_password/ResetPassword'))
const InputOtp = React.lazy(() => import('./views/pages/input_otp/InputOtp'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense
          fallback={
            <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
              <CContainer>
                <CRow>
                  <CCol className="d-flex justify-content-center">
                    <CSpinner color="primary" />
                  </CCol>
                </CRow>
              </CContainer>
            </div>
          }
        >
          <Switch>
            <PublicRoute exact restricted component={Login} path="/login" />
            <PublicRoute exact restricted component={ResetPassword} path="/reset_password" />
            <PublicRoute exact restricted component={InputOtp} path="/input_otp" />
            <PublicRoute exact component={Page404} path="/404" />
            <PrivateRoute component={DefaultLayout} path="/" />
          </Switch>
        </React.Suspense>
      </HashRouter>
    )
  }
}

export default App
