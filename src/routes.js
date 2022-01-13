import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const MyCompany = React.lazy(() => import('./views/my_company/MyCompany'))
const MyProfile = React.lazy(() => import('./views/my_profile/MyProfile'))
const Notifications = React.lazy(() =>
  import('./views/notifications/notification_list/Notifications'),
)
const Task = React.lazy(() => import('./views/notifications/task/Task'))
const ChangePassword = React.lazy(() => import('./views/change_password/ChangePassword'))
const UserList = React.lazy(() => import('./views/user/user_list/UserList'))
const UserDetails = React.lazy(() => import('./views/user/user_details/UserDetails'))
const UserCreate = React.lazy(() => import('./views/user/user_create/UserCreate'))
const ClientList = React.lazy(() => import('./views/client/client_list/ClientList'))
const ClientDetail = React.lazy(() => import('./views/client/client_detail/ClientDetail'))

const NasabahList = React.lazy(() => import('./views/nasabah/nasabah_list/NasabahList'))
const NasabahDetail = React.lazy(() => import('./views/nasabah/nasabah_detail/NasabahDetail'))
const NasabahCreate = React.lazy(() => import('./views/nasabah/nasabah_create/NasabahCreate'))
const NasabahTransfer = React.lazy(() => import('./views/nasabah/nasabah_transfer/NasabahTransfer'))
const NasabahCashIn = React.lazy(() => import('./views/nasabah/nasabah_cash_in/NasabahCashIn'))
const NasabahCashOut = React.lazy(() => import('./views/nasabah/nasabah_cash_out/NasabahCashOut'))

const PackageList = React.lazy(() => import('./views/packages/package_list/PackageList'))
const PackageCreate = React.lazy(() => import('./views/packages/package_create/PackageCreate'))

const Products = React.lazy(() => import('./views/products/products/Products'))
const ProductCreate = React.lazy(() => import('./views/products/product_create/ProductCreate'))
const ProductDetails = React.lazy(() => import('./views/products/product_details/ProductDetails'))

const ProductsPpob = React.lazy(() => import('./views/products/products_ppob/ProductsPpob'))
const VendorList = React.lazy(() => import('./views/vendor/vendor_list/VendorList'))

const TicketsList = React.lazy(() => import('./views/support/tickets_list/TicketsList'))
const TicketCreate = React.lazy(() => import('./views/support/ticket_create/TicketCreate'))
const TicketDetails = React.lazy(() => import('./views/support/ticket_details/TicketDetails'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/profile', name: 'My profile', component: MyProfile },
  { path: '/profile/change_password', name: 'Change password', component: ChangePassword },
  { path: '/company_info', name: 'Company Info', component: MyCompany },
  { path: '/notifications', name: 'Notifications', component: Notifications },
  { path: '/notifications/task', name: 'Task', component: Task },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users', name: 'User List', component: UserList },
  { path: '/users/details', name: 'User Detail', component: UserDetails },
  { path: '/users/create', name: 'Create User', component: UserCreate },
  { path: '/clients', name: 'Client List', component: ClientList },
  { path: '/clients/details', name: 'Client Detail', component: ClientDetail },
  { path: '/nasabah', name: 'Nasabah List', component: NasabahList },
  { path: '/nasabah/details', name: 'Nasabah Detail', component: NasabahDetail },
  { path: '/nasabah/create', name: 'Create Nasabah', component: NasabahCreate },
  { path: '/nasabah/details/transfer', name: 'Transfer', component: NasabahTransfer },
  { path: '/nasabah/details/cashIn', name: 'Cash-In', component: NasabahCashIn },
  { path: '/nasabah/details/cashOut', name: 'Cash-Out', component: NasabahCashOut },
  { path: '/packages', name: 'Packages', component: PackageList },
  { path: '/packages/create', name: 'Create Package', component: PackageCreate },
  { path: '/products/savings', name: 'Savings', component: Products },
  { path: '/products/credits', name: 'Credits', component: Products },
  { path: '/products', exact: true, name: 'Products' },
  {
    path: '/products/details',
    name: 'Detail Product',
    component: ProductDetails,
  },
  { path: '/products/create', name: 'Create Product', component: ProductCreate },

  { path: '/products/ppob', name: 'PPOB', component: ProductsPpob },
  { path: '/ppob', name: 'PPOB', component: {} },
  { path: '/ppob/vendors', name: 'PPOB Vendors', component: VendorList },
  { path: '/support', name: 'Support', disabled: true },
  { path: '/support/tickets', name: 'Tickets List', component: TicketsList },
  { path: '/support/tickets/new', name: 'New Ticket', component: TicketCreate },
  { path: '/support/tickets/details', name: 'Ticket Details', component: TicketDetails },
]

export default routes
