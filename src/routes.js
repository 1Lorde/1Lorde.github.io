import React from 'react'
import i18next from 'i18next'

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
const VendorCreate = React.lazy(() => import('./views/vendor/vendor_create/VendorCreate'))

const TicketsList = React.lazy(() => import('./views/support/tickets_list/TicketsList'))
const TicketCreate = React.lazy(() => import('./views/support/ticket_create/TicketCreate'))
const TicketDetails = React.lazy(() => import('./views/support/ticket_details/TicketDetails'))

const routes = [
  { path: '/', exact: true, name: i18next.t('home') },
  { path: '/profile', name: i18next.t('my_profile'), component: MyProfile },
  {
    path: '/profile/change_password',
    name: i18next.t('change_password'),
    component: ChangePassword,
  },
  { path: '/company_info', name: i18next.t('company_info'), component: MyCompany },
  { path: '/notifications', name: i18next.t('notifications_entry'), component: Notifications },
  { path: '/notifications/task', name: i18next.t('task'), component: Task },
  { path: '/dashboard', name: i18next.t('dashboard'), component: Dashboard },
  { path: '/users', name: i18next.t('user_list'), component: UserList },
  { path: '/users/details', name: i18next.t('user_detail'), component: UserDetails },
  { path: '/users/create', name: i18next.t('user_create'), component: UserCreate },
  { path: '/clients', name: i18next.t('client_list'), component: ClientList },
  { path: '/clients/details', name: i18next.t('client_detail'), component: ClientDetail },
  { path: '/nasabah', name: i18next.t('nasabah_list'), component: NasabahList },
  { path: '/nasabah/details', name: i18next.t('nasabah_detail'), component: NasabahDetail },
  { path: '/nasabah/create', name: i18next.t('nasabah_create'), component: NasabahCreate },
  { path: '/nasabah/details/transfer', name: i18next.t('transfer'), component: NasabahTransfer },
  { path: '/nasabah/details/cashIn', name: i18next.t('cash_in'), component: NasabahCashIn },
  { path: '/nasabah/details/cashOut', name: i18next.t('cash_out'), component: NasabahCashOut },
  { path: '/packages', name: i18next.t('packages'), component: PackageList },
  { path: '/packages/create', name: i18next.t('package_create'), component: PackageCreate },
  { path: '/products/savings', name: i18next.t('savings'), component: Products },
  { path: '/products/credits', name: i18next.t('credits'), component: Products },
  { path: '/products', exact: true, name: i18next.t('products') },
  {
    path: '/products/details',
    name: i18next.t('product_detail'),
    component: ProductDetails,
  },
  { path: '/products/create', name: i18next.t('product_create'), component: ProductCreate },

  { path: '/products/ppob', name: i18next.t('ppob'), component: ProductsPpob },
  { path: '/ppob', name: i18next.t('ppob'), component: {} },
  { path: '/ppob/vendors', name: i18next.t('ppob_vendors'), component: VendorList },
  { path: '/ppob/vendors/create', name: i18next.t('ppob_vendor_create'), component: VendorCreate },
  { path: '/support', name: i18next.t('support'), disabled: true },
  { path: '/support/tickets', name: i18next.t('ticket_list'), component: TicketsList },
  { path: '/support/tickets/new', name: i18next.t('ticket_create'), component: TicketCreate },
  { path: '/support/tickets/details', name: i18next.t('ticket_detail'), component: TicketDetails },
]

export default routes
