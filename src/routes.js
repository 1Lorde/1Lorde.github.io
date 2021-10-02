import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const CompanyInfo = React.lazy(() => import('./views/company_info/CompanyInfo'))
const MyProfile = React.lazy(() => import('./views/my_profile/MyProfile'))
const Notifications = React.lazy(() => import('./views/notifications/Notifications'))
const Task = React.lazy(() => import('./views/notifications/task/Task'))
const ChangePassword = React.lazy(() => import('./views/change_password/ChangePassword'))
const UserList = React.lazy(() => import('./views/user_list/UserList'))

const NasabahList = React.lazy(() => import('./views/nasabah/nasabah_list/NasabahList'))
const NasabahDetail = React.lazy(() => import('./views/nasabah/nasabah_detail/NasabahDetail'))
const NasabahTransfer = React.lazy(() => import('./views/nasabah/nasabah_transfer/NasabahTransfer'))
const NasabahCashIn = React.lazy(() => import('./views/nasabah/nasabah_cash_in/NasabahCashIn'))
const NasabahCashOut = React.lazy(() => import('./views/nasabah/nasabah_cash_out/NasabahCashOut'))

const ProductsSavings = React.lazy(() =>
  import('./views/products/products_savings/ProductsSavings'),
)
const ProductsSavingsDetails = React.lazy(() =>
  import('./views/products/products_savings_details/ProductSavingsDetails'),
)

const ProductsPpob = React.lazy(() => import('./views/products/products_ppob/ProductsPpob'))
const ProductPpobDetails = React.lazy(() =>
  import('./views/products/products_ppob_details/ProductPpobDetails'),
)
const ProductPpobDetailsBuy = React.lazy(() =>
  import('./views/products/products_ppob_details_buy/ProductsPpobDetailsBuy'),
)

const TicketsList = React.lazy(() => import('./views/support/tickets_list/TicketsList'))
const NewTicket = React.lazy(() => import('./views/support/new_ticket/NewTicket'))
const TicketDetails = React.lazy(() => import('./views/support/ticket_details/TicketDetails'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/profile', name: 'My profile', component: MyProfile },
  { path: '/profile/change_password', name: 'Change password', component: ChangePassword },
  { path: '/company_info', name: 'Company Info', component: CompanyInfo },
  { path: '/notifications', name: 'Notifications', component: Notifications },
  { path: '/notifications/task', name: 'Task', component: Task },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users', name: 'User List', component: UserList },
  { path: '/users/details', name: 'Detail User', component: MyProfile },
  { path: '/nasabah', name: 'Nasabah List', component: NasabahList },
  { path: '/nasabah/details', name: 'Detail Nasabah', component: NasabahDetail },
  { path: '/nasabah/details/transfer', name: 'Transfer', component: NasabahTransfer },
  { path: '/nasabah/details/cashIn', name: 'Cash-In', component: NasabahCashIn },
  { path: '/nasabah/details/cashOut', name: 'Cash-Out', component: NasabahCashOut },
  { path: '/products', exact: true, name: 'Products List' },
  { path: '/products/savings', name: 'Savings', component: ProductsSavings },
  {
    path: '/products/savings/details',
    name: 'Detail Product',
    component: ProductsSavingsDetails,
  },
  { path: '/products/ppob', name: 'PPOB List', component: ProductsPpob },
  {
    path: '/products/ppob/details',
    name: 'Detail PPOB',
    component: ProductPpobDetails,
  },
  {
    path: '/products/ppob/details/buy',
    name: 'Buy',
    component: ProductPpobDetailsBuy,
  },
  { path: '/support', exact: true, name: 'Support' },
  { path: '/support/tickets', name: 'Tickets List', component: TicketsList },
  { path: '/support/tickets/new', name: 'New Ticket', component: NewTicket },
  { path: '/support/tickets/details', name: 'Ticket Details', component: TicketDetails },
]

export default routes
