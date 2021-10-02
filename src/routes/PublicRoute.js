import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import AuthService from '../services/auth.service'

interface PublicRouteProps {
  restricted?: boolean;
}

function PublicRoute(props: PublicRouteProps & RouteProps): React.ReactElement {
  const { component: Component, restricted = false, ...rest } = props

  const render = (props) => {
    if (AuthService.isAuthenticated() && restricted) {
      return <Redirect to="/profile" />
    }

    return <Component {...props} />
  }

  return <Route {...rest} render={render} />
}

export default PublicRoute
