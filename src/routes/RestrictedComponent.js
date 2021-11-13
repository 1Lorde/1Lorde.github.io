import PropTypes from 'prop-types'
import { getUserRole } from '../helpers/user'

const RestrictedComponent = ({ children, allowedRoles }) => {
  const userRole = getUserRole()
  const isAllowed = allowedRoles.includes(userRole)
  return isAllowed && children
}

RestrictedComponent.propTypes = {
  children: PropTypes.element,
  request: PropTypes.array,
}

export default RestrictedComponent
