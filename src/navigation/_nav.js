import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilApplications,
  cilBarChart,
  cilBell,
  cilCaretRight,
  cilCash,
  cilHome,
  cilPen,
  cilSend,
  cilUser,
} from '@coreui/icons'
import { CNavItem, CNavGroup } from '@coreui/react'

export const admin_nav = [
  {
    component: CNavItem,
    name: 'Notifications',
    to: '/notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
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
    name: 'Client',
    to: '/clients',
    icon: <CIcon icon={cilCash} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Package',
    icon: <CIcon icon={cilApplications} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Package',
        to: '/packages',
        icon: <CIcon icon={cilCaretRight} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'PPOB',
        to: '/products/ppob',
        icon: <CIcon icon={cilCaretRight} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'PPOB Vendor',
        to: 'PPOB',
        icon: <CIcon icon={cilCaretRight} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Web & Template',
    to: '/404',
    icon: <CIcon icon={cilPen} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Contents',
        to: '/404',
        icon: <CIcon icon={cilCaretRight} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Notification',
        to: '/404',
        icon: <CIcon icon={cilCaretRight} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'WA USSD',
        to: '/404',
        icon: <CIcon icon={cilCaretRight} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Transactions',
        to: '/404',
        icon: <CIcon icon={cilCaretRight} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Registration',
        to: '/404',
        icon: <CIcon icon={cilCaretRight} customClassName="nav-icon" />,
      },
    ],
  },
]

export const koperasi_nav = [
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

export const account_officer_nav = [
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
