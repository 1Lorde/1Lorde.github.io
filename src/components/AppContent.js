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
const Notifications = React.lazy(() => import('../views/notifications/Notifications'))
const Task = React.lazy(() => import('../views/notifications/task/Task'))
const UserList = React.lazy(() => import('../views/user/user_list/UserList'))
const UserDetails = React.lazy(() => import('../views/user/user_details/UserDetails'))
const UserCreate = React.lazy(() => import('../views/user/user_create/UserCreate'))
const ClientList = React.lazy(() => import('../views/client/client_list/ClientList'))
const ClientDetail = React.lazy(() => import('../views/client/client_detail/ClientDetail'))

const NasabahList = React.lazy(() => import('../views/nasabah/nasabah_list/NasabahList'))
const NasabahDetail = React.lazy(() => import('../views/nasabah/nasabah_detail/NasabahDetail'))
const NasabahTransfer = React.lazy(() =>
  import('../views/nasabah/nasabah_transfer/NasabahTransfer'),
)
const NasabahCashIn = React.lazy(() => import('../views/nasabah/nasabah_cash_in/NasabahCashIn'))
const NasabahCashOut = React.lazy(() => import('../views/nasabah/nasabah_cash_out/NasabahCashOut'))

const ProductsSavings = React.lazy(() =>
  import('../views/products/products_savings/ProductsSavings'),
)
const ProductsSavingsCreate = React.lazy(() =>
  import('../views/products/products_savings_create/ProductsSavingsCreate'),
)
const ProductsSavingsDetails = React.lazy(() =>
  import('../views/products/products_savings_details/ProductSavingsDetails'),
)

const ProductsPpob = React.lazy(() => import('../views/products/products_ppob/ProductsPpob'))
const ProductPpobDetails = React.lazy(() =>
  import('../views/products/products_ppob_details/ProductPpobDetails'),
)
const ProductPpobDetailsBuy = React.lazy(() =>
  import('../views/products/products_ppob_details_buy/ProductsPpobDetailsBuy'),
)

const TicketsList = React.lazy(() => import('../views/support/tickets_list/TicketsList'))
const NewTicket = React.lazy(() => import('../views/support/new_ticket/NewTicket'))
const TicketDetails = React.lazy(() => import('../views/support/ticket_details/TicketDetails'))

const AppContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={Loader()}>
        <Switch>
          <PrivateRoute
            exact
            allowedRoles={[Roles['koperasi-owner']]}
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
          <Route exact path="/notifications" name="Notifications" component={Notifications} />
          <Route exact path="/notifications/task" name="Task" component={Task} />
          <Route exact path="/dashboard" name="Dashboard" component={Dashboard} />
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
            path="/nasabah/details"
            name="Detail Nasabah"
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
            allowedRoles={[
              Roles['koperasi-owner'],
              Roles['credit-analyst'],
              Roles['account-officer'],
            ]}
            path="/products/savings"
            name="Savings"
            component={ProductsSavings}
          />
          <PrivateRoute
            exact
            allowedRoles={[
              Roles['koperasi-owner'],
              Roles['credit-analyst'],
              Roles['account-officer'],
            ]}
            path="/products/savings/create"
            name="Create Savings"
            component={ProductsSavingsCreate}
          />
          <PrivateRoute
            allowedRoles={[
              Roles['koperasi-owner'],
              Roles['credit-analyst'],
              Roles['account-officer'],
            ]}
            path="/products/savings/details"
            name="Detail Product"
            component={ProductsSavingsDetails}
          />
          <PrivateRoute
            exact
            allowedRoles={[
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
              Roles['koperasi-owner'],
              Roles['credit-analyst'],
              Roles['account-officer'],
            ]}
            path="/products/ppob/details"
            name="Detail PPOB"
            component={ProductPpobDetails}
          />
          <PrivateRoute
            exact
            allowedRoles={[
              Roles['koperasi-owner'],
              Roles['credit-analyst'],
              Roles['account-officer'],
            ]}
            path="/products/ppob/details/buy"
            name="Buy"
            component={ProductPpobDetailsBuy}
          />
          <Route exact path="/support/tickets" name="Tickets List" component={TicketsList} />
          <Route exact path="/support/tickets/new" name="New Ticket" component={NewTicket} />
          <Route
            exact
            path="/support/tickets/details"
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
