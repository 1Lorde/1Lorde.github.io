import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import AuthService from '../services/auth.service'

function PrivateRoute(props: RouteProps): React.ReactElement {
  const { component: Component, ...rest } = props

  const render = (props) => {
    if (!AuthService.isAuthenticated()) {
      return <Redirect to="/login" />
    }

    return <Component {...props} />
  }

  return <Route {...rest} render={render} />
}

export default PrivateRoute
