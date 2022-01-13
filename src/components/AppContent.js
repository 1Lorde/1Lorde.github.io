import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer } from '@coreui/react'
import PrivateRoute from '../routes/PrivateRoute'
import { allRoles, Roles } from '../helpers/role'
import Loader from './Loader'

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

const ProductPpobDetailsBuy = React.lazy(() =>
  import('../views/products/products_ppob_details_buy/ProductsPpobDetailsBuy'),
)

const TicketsList = React.lazy(() => import('../views/support/tickets_list/TicketsList'))
const TicketCreate = React.lazy(() => import('../views/support/ticket_create/TicketCreate'))
const TicketDetails = React.lazy(() => import('../views/support/ticket_details/TicketDetails'))

const AppContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={Loader()}>
        <Switch>
          <PrivateRoute
            exact
            allowedRoles={[Roles['account-officer'], Roles['koperasi-owner']]}
            path="/company_info"
            name="Company Info"
            component={MyCompany}
          />
          <PrivateRoute
            exact
            allowedRoles={allRoles()}
            path="/profile"
            name="My Profile"
            component={MyProfile}
          />
          <PrivateRoute
            exact
            allowedRoles={allRoles()}
            path="/profile/change_password"
            name="Change password"
            component={ChangePassword}
          />
          <PrivateRoute
            exact
            allowedRoles={allRoles()}
            path="/notifications"
            name="Notifications"
            component={Notifications}
          />
          <PrivateRoute
            exact
            allowedRoles={allRoles()}
            path="/notifications/:id"
            name="Notification Details"
            component={NotificationDetail}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['account-officer']]}
            path="/notifications/task"
            name="Task"
            component={Task}
          />
          <PrivateRoute
            exact
            allowedRoles={allRoles()}
            path="/dashboard"
            name="Dashboard"
            component={Dashboard}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['app-owner'], Roles['koperasi-owner']]}
            path="/users"
            name="User List"
            component={UserList}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['app-owner'], Roles['koperasi-owner']]}
            path="/users/create"
            name="Create User"
            component={UserCreate}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['app-owner'], Roles['koperasi-owner']]}
            path="/users/:id"
            name="Detail User"
            component={UserDetails}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['app-owner'], Roles['marketing-finance']]}
            path="/clients"
            name="Client List"
            component={ClientList}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['app-owner']]}
            path="/clients/:id"
            name="Detail Client"
            component={ClientDetail}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['koperasi-owner'], Roles['account-officer']]}
            path="/nasabah"
            name="Nasabah List"
            component={NasabahList}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['koperasi-owner'], Roles['account-officer']]}
            path="/nasabah/create"
            name="Create Nasabah"
            component={NasabahCreate}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['koperasi-owner'], Roles['account-officer']]}
            path="/nasabah/:id"
            name="Nasabah Detail"
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
            name="Transfer"
            component={NasabahTransfer}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['account-officer']]}
            path="/nasabah/details/cashIn"
            name="Cash-In"
            component={NasabahCashIn}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['account-officer']]}
            path="/nasabah/details/cashOut"
            name="Cash-Out"
            component={NasabahCashOut}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['app-owner']]}
            path="/packages"
            name="Package List"
            component={PackageList}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['app-owner']]}
            path="/packages/create"
            name="Create Package"
            component={PackageCreate}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['app-owner']]}
            path="/packages/:id"
            name="Package Detail"
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
            name="Savings"
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
            name="Loan"
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
            name="Create Product"
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
            name="PPOB List"
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
            name="PPOB Details"
            component={ProductPpobDetails}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['app-owner']]}
            path="/ppob/vendors"
            name="PPOB Vendors"
            component={VendorList}
          />
          <PrivateRoute
            exact
            allowedRoles={[Roles['app-owner']]}
            path="/ppob/vendors/:id"
            name="PPOB Vendor Details"
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
            name="Buy"
            component={ProductPpobDetailsBuy}
          />
          <PrivateRoute
            allowedRoles={[
              Roles['koperasi-owner'],
              Roles['credit-analyst'],
              Roles['account-officer'],
            ]}
            path="/products/:id"
            name="Product Details"
            component={ProductDetails}
          />
          <Route exact path="/support/tickets" name="Tickets List" component={TicketsList} />
          <Route exact path="/support/tickets/new" name="New Ticket" component={TicketCreate} />
          <Route
            exact
            path="/support/tickets/:uid"
            name="Ticket Details"
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
