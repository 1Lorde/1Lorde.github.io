import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { isPermanentTokenExist } from '../helpers/user'

interface PublicRouteProps {
  restricted?: boolean;
}

function PublicRoute(props: PublicRouteProps & RouteProps): React.ReactElement {
  const { component: Component, restricted = false, ...rest } = props

  const render = (props) => {
    if (isPermanentTokenExist() && restricted) {
      return <Redirect to="/profile" />
    }

    return <Component {...props} />
  }

  return <Route {...rest} render={render} />
}

export default PublicRoute
