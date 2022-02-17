import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer } from '@coreui/react'
import PrivateRoute from '../routes/PrivateRoute'
import { allRoles, Roles } from '../helpers/role'
import Loader from './Loader'
import { useTranslation } from 'react-i18next'

const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'))
const MyCompany = React.lazy(() => import('../views/my_company/MyCompany'))
const MyProfile = React.lazy(() => import('../views/my_profile/MyProfile'))
const ChangePassword = React.lazy(() => import('../views/change_password/ChangePassword'))
const Notifications = React.lazy(() =>
  import('../views/notifications/notification_list/Notifications'),
)
const NotificationDetail = React.lazy(() =>
  import('../views/notifications/notification_detail/NotificationDetail'),
)
const Task = React.lazy(() => import('../views/notifications/task/Task'))
const UserList = React.lazy(() => import('../views/user/user_list/UserList'))
const UserDetails = React.lazy(() => import('../views/user/user_details/UserDetails'))
const UserCreate = React.lazy(() => import('../views/user/user_create/UserCreate'))
const ClientList = React.lazy(() => import('../views/client/client_list/ClientList'))
const ClientDetail = React.lazy(() => import('../views/client/client_detail/ClientDetail'))

const NasabahList = React.lazy(() => import('../views/nasabah/nasabah_list/NasabahList'))
const NasabahDetail = React.lazy(() => import('../views/nasabah/nasabah_detail/NasabahDetail'))
const NasabahCreate = React.lazy(() => import('../views/nasabah/nasabah_create/NasabahCreate'))
const NasabahTransfer = React.lazy(() =>
  import('../views/nasabah/nasabah_transfer/NasabahTransfer'),
)
const NasabahCashIn = React.lazy(() => import('../views/nasabah/nasabah_cash_in/NasabahCashIn'))
const NasabahCashOut = React.lazy(() => import('../views/nasabah/nasabah_cash_out/NasabahCashOut'))

const PackageList = React.lazy(() => import('../views/packages/package_list/PackageList'))
const PackageDetail = React.lazy(() => import('../views/packages/package_detail/PackageDetail'))
const PackageCreate = React.lazy(() => import('../views/packages/package_create/PackageCreate'))

const Products = React.lazy(() => import('../views/products/products/Products'))
const ProductCreate = React.lazy(() => import('../views/products/product_create/ProductCreate'))
const ProductDetails = React.lazy(() => import('../views/products/product_details/ProductDetails'))

const ProductsPpob = React.lazy(() => import('../views/products/products_ppob/ProductsPpob'))
const ProductPpobDetails = React.lazy(() =>
  import('../views/products/products_ppob_details/ProductPpobDetails'),
)
const VendorList = React.lazy(() => import('../views/vendor/vendor_list/VendorList'))
const VendorDetails = React.lazy(() => import('../views/vendor/vendor_details/VendorDetails'))
const VendorCreate = React.lazy(() => import('../views/vendor/vendor_create/VendorCreate'))

const ProductPpobDetailsBuy = React.lazy(() =>
  import('../views/products/products_ppob_details_buy/ProductsPpobDetailsBuy'),
)

const TicketsList = React.lazy(() => import('../views/support/tickets_list/TicketsList'))
const TicketCreate = React.lazy(() => import('../views/support/ticket_create/TicketCreate'))
const TicketDetails = React.lazy(() => import('../views/support/ticket_details/TicketDetails'))

const AppContent = () => {
  const { t } = useTranslation()
  return (
    <CContainer lg>
      <Suspense fallback={Loader()}>
        <Switch>
          <PrivateRoute
            exact
            allowedRoles={[Roles['account-officer'], Roles['koperasi-owner']]}
            path="/company_info"
            name={t('company_info')}
            component={MyCompany}
          />
          <PrivateRoute
            exact
            allowedRoles={allRoles()}
            path="/profile"
            name={t('my_profile')}
            component={MyProfile}
          />
          <PrivateRoute
            exact
            allowedRoles={allRoles()}
            path="/profile/change_password"
            name={t('change_password')}
            component={ChangePassword}
          />
          <PrivateRoute
            exact
            allowedRoles={allRoles()}
            path="/notifications"
            name={t('notifications_entry')}
            component={Notifications}
          />
          <PrivateRoute
            exact
            allowedRoles={allRoles()}
            path="/notifications/:id"
            name={t('notification_detail')}
            component={NotificationDetail}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['account-officer']]}
            path="/notifications/task"
            name={t('task')}
            component={Task}
          />
          <PrivateRoute
            exact
            allowedRoles={allRoles()}
            path="/dashboard"
            name={t('dashboard')}
            component={Dashboard}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['app-owner'], Roles['koperasi-owner']]}
            path="/users"
            name={t('user_list')}
            component={UserList}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['app-owner'], Roles['koperasi-owner']]}
            path="/users/create"
            name={t('user_create')}
            component={UserCreate}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['app-owner'], Roles['koperasi-owner']]}
            path="/users/:id"
            name={t('user_detail')}
            component={UserDetails}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['app-owner'], Roles['marketing-finance']]}
            path="/clients"
            name={t('client_list')}
            component={ClientList}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['app-owner']]}
            path="/clients/:id"
            name={t('client_detail')}
            component={ClientDetail}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['koperasi-owner'], Roles['account-officer']]}
            path="/nasabah"
            name={t('nasabah_list')}
            component={NasabahList}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['koperasi-owner'], Roles['account-officer']]}
            path="/nasabah/create"
            name={t('nasabah_create')}
            component={NasabahCreate}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['koperasi-owner'], Roles['account-officer']]}
            path="/nasabah/:id"
            name={t('nasabah_detail')}
            component={NasabahDetail}
          />
          <PrivateRoute
            exact
            allowedRoles={[
              Roles['koperasi-owner'],
              Roles['account-officer'],
              Roles['credit-analyst'],
            ]}
            path="/nasabah/details/transfer"
            name={t('transfer')}
            component={NasabahTransfer}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['account-officer']]}
            path="/nasabah/details/cashIn"
            name={t('cash_in')}
            component={NasabahCashIn}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['account-officer']]}
            path="/nasabah/details/cashOut"
            name={t('cash_out')}
            component={NasabahCashOut}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['app-owner']]}
            path="/packages"
            name={t('packages')}
            component={PackageList}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['app-owner']]}
            path="/packages/create"
            name={t('package_create')}
            component={PackageCreate}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['app-owner']]}
            path="/packages/:id"
            name={t('package_detail')}
            component={PackageDetail}
          />
          <PrivateRoute
            exact
            allowedRoles={[
              Roles['koperasi-owner'],
              Roles['credit-analyst'],
              Roles['account-officer'],
            ]}
            path="/products/savings"
            name={t('savings')}
            component={Products}
            typeFilter="savings"
          />
          <PrivateRoute
            exact
            allowedRoles={[
              Roles['koperasi-owner'],
              Roles['credit-analyst'],
              Roles['account-officer'],
            ]}
            path="/products/credits"
            name={t('loan')}
            component={Products}
            typeFilter="credits"
          />
          <PrivateRoute
            exact
            allowedRoles={[
              Roles['koperasi-owner'],
              Roles['credit-analyst'],
              Roles['account-officer'],
            ]}
            path="/products/create"
            name={t('product_create')}
            component={ProductCreate}
          />
          <PrivateRoute
            exact
            allowedRoles={[
              Roles['app-owner'],
              Roles['koperasi-owner'],
              Roles['credit-analyst'],
              Roles['account-officer'],
            ]}
            path="/products/ppob"
            name={t('ppob_list')}
            component={ProductsPpob}
          />
          <PrivateRoute
            exact
            allowedRoles={[
              Roles['app-owner'],
              Roles['koperasi-owner'],
              Roles['credit-analyst'],
              Roles['account-officer'],
            ]}
            path="/products/ppob/:id"
            name={t('ppob_detail')}
            component={ProductPpobDetails}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['app-owner']]}
            path="/ppob/vendors"
            name={t('ppob_vendors')}
            component={VendorList}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['app-owner']]}
            path="/ppob/vendors/create"
            name={t('ppob_vendor_create')}
            component={VendorCreate}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['app-owner']]}
            path="/ppob/vendors/:id"
            name={t('ppob_vendor_detail')}
            component={VendorDetails}
          />
          <PrivateRoute
            exact
            allowedRoles={[
              Roles['koperasi-owner'],
              Roles['credit-analyst'],
              Roles['account-officer'],
            ]}
            path="/products/ppob/:id/buy"
            name={t('buy')}
            component={ProductPpobDetailsBuy}
          />
          <PrivateRoute
            allowedRoles={[
              Roles['koperasi-owner'],
              Roles['credit-analyst'],
              Roles['account-officer'],
            ]}
            path="/products/:id"
            name={t('product_detail')}
            component={ProductDetails}
          />
          <Route exact path="/support/tickets" name={t('ticket_list')} component={TicketsList} />
          <Route
            exact
            path="/support/tickets/new"
            name={t('ticket_create')}
            component={TicketCreate}
          />
          <Route
            exact
            path="/support/tickets/:uid"
            name={t('ticket_detail')}
            component={TicketDetails}
          />
          <Redirect from="/" to="/dashboard" />
          <Redirect to="/404" />
        </Switch>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
