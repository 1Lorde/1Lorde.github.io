import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { getUserRole, isTempTokenExist } from '../helpers/user'
import { Roles } from '../helpers/role'

function PrivateRoute(props: RouteProps): React.ReactElement {
  const userRole = getUserRole()
  const { component: Component, allowedRoles, ...rest } = props

  const render = () => {
    if (isTempTokenExist() || !localStorage.getItem('token')) {
      return <Redirect to="/login" />
    }

    if (allowedRoles.includes(Roles[userRole])) {
      return <Component {...rest} />
    }

    return <Redirect to="/401" />
  }

  return <Route {...rest} render={render} />
}

export default PrivateRoute
