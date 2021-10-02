import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilApplications,
  cilBarChart,
  cilBell,
  cilCaretRight,
  cilCash,
  cilHome,
  cilSend,
  cilUser,
} from '@coreui/icons'
import { CNavItem, CNavGroup } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Company Info',
    to: '/company_info',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Notifications',
    to: '/notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Task',
    to: '/notifications/task',
    icon: <CIcon icon={cilCaretRight} customClassName="nav-icon ms-2" />,
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'User',
    to: '/users',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Nasabah',
    to: '/nasabah',
    icon: <CIcon icon={cilCash} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Products',
    icon: <CIcon icon={cilApplications} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Savings',
        to: '/products/savings',
        icon: <CIcon icon={cilCaretRight} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Loan',
        to: '/404',
        icon: <CIcon icon={cilCaretRight} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'PPOB',
        to: '/products/ppob',
        icon: <CIcon icon={cilCaretRight} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Support',
    to: '/support/tickets',
    icon: <CIcon icon={cilSend} customClassName="nav-icon" />,
  },
]

export default _nav
