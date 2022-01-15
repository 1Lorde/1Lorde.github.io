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
import i18next from 'i18next'

export const admin_nav = [
  {
    component: CNavItem,
    name: i18next.t('notifications_entry'),
    to: '/notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: i18next.t('dashboard'),
    to: '/dashboard',
    icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: i18next.t('user'),
    to: '/users',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: i18next.t('client'),
    to: '/clients',
    icon: <CIcon icon={cilCash} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: i18next.t('package'),
    icon: <CIcon icon={cilApplications} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: i18next.t('package'),
        to: '/packages',
        icon: <CIcon icon={cilCaretRight} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: i18next.t('ppob'),
        to: '/products/ppob',
        icon: <CIcon icon={cilCaretRight} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: i18next.t('ppob_vendors'),
        to: '/ppob/vendors',
        icon: <CIcon icon={cilCaretRight} customClassName="nav-icon" />,
      },
    ],
  },
]

export const koperasi_nav = [
  {
    component: CNavItem,
    name: i18next.t('company_info'),
    to: '/company_info',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: i18next.t('notifications_entry'),
    to: '/notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: i18next.t('dashboard'),
    to: '/dashboard',
    icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: i18next.t('user'),
    to: '/users',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: i18next.t('nasabah'),
    to: '/nasabah',
    icon: <CIcon icon={cilCash} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: i18next.t('products'),
    icon: <CIcon icon={cilApplications} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: i18next.t('savings'),
        to: '/products/savings',
        icon: <CIcon icon={cilCaretRight} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: i18next.t('loan'),
        to: '/products/credits',
        icon: <CIcon icon={cilCaretRight} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: i18next.t('ppob'),
        to: '/products/ppob',
        icon: <CIcon icon={cilCaretRight} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavItem,
    name: i18next.t('support'),
    to: '/support/tickets',
    icon: <CIcon icon={cilSend} customClassName="nav-icon" />,
  },
]

export const account_officer_nav = [
  {
    component: CNavItem,
    name: i18next.t('company_info'),
    to: '/company_info',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: i18next.t('notifications_entry'),
    to: '/notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: i18next.t('task'),
    to: '/notifications/task',
    icon: <CIcon icon={cilCaretRight} customClassName="nav-icon ms-2" />,
  },
  {
    component: CNavItem,
    name: i18next.t('dashboard'),
    to: '/dashboard',
    icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: i18next.t('nasabah'),
    to: '/nasabah',
    icon: <CIcon icon={cilCash} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: i18next.t('products'),
    icon: <CIcon icon={cilApplications} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: i18next.t('savings'),
        to: '/products/savings',
        icon: <CIcon icon={cilCaretRight} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: i18next.t('loan'),
        to: '/products/credits',
        icon: <CIcon icon={cilCaretRight} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: i18next.t('ppob'),
        to: '/products/ppob',
        icon: <CIcon icon={cilCaretRight} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavItem,
    name: i18next.t('support'),
    to: '/support/tickets',
    icon: <CIcon icon={cilSend} customClassName="nav-icon" />,
  },
]
