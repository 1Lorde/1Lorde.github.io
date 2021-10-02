import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CCol, CContainer, CRow, CSpinner } from '@coreui/react'

const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'))
const CompanyInfo = React.lazy(() => import('../views/company_info/CompanyInfo'))
const MyProfile = React.lazy(() => import('../views/my_profile/MyProfile'))
const ChangePassword = React.lazy(() => import('../views/change_password/ChangePassword'))
const Notifications = React.lazy(() => import('../views/notifications/Notifications'))
const Task = React.lazy(() => import('../views/notifications/task/Task'))
const UserList = React.lazy(() => import('../views/user_list/UserList'))

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
      <Suspense
        fallback={
          <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
              <CRow>
                <CCol className="d-flex justify-content-center">
                  <CSpinner color="primary" />
                </CCol>
              </CRow>
            </CContainer>
          </div>
        }
      >
        <Switch>
          <Route exact path="/company_info" name="Company Info" component={CompanyInfo} />
          <Route exact path="/profile" name="My Profile" component={MyProfile} />
          <Route
            path="/profile/change_password"
            name="Change password"
            component={ChangePassword}
          />
          <Route exact path="/notifications" name="Notifications" component={Notifications} />
          <Route exact path="/notifications/task" name="Task" component={Task} />
          <Route exact path="/dashboard" name="Dashboard" component={Dashboard} />
          <Route exact path="/users" name="User List" component={UserList} />
          <Route exact path="/users/details" name="Detail User" component={MyProfile} />
          <Route exact path="/nasabah" name="Nasabah List" component={NasabahList} />
          <Route exact path="/nasabah/details" name="Detail Nasabah" component={NasabahDetail} />
          <Route
            exact
            path="/nasabah/details/transfer"
            name="Transfer"
            component={NasabahTransfer}
          />
          <Route exact path="/nasabah/details/cashIn" name="Cash-In" component={NasabahCashIn} />
          <Route exact path="/nasabah/details/cashOut" name="Cash-Out" component={NasabahCashOut} />
          <Route exact path="/nasabah/details/cashOut" name="Cash-Out" component={NasabahCashOut} />
          <Route exact path="/products/savings" name="Savings" component={ProductsSavings} />
          <Route
            path="/products/savings/details"
            name="Detail Product"
            component={ProductsSavingsDetails}
          />
          <Route exact path="/products/ppob" name="PPOB List" component={ProductsPpob} />
          <Route
            exact
            path="/products/ppob/details"
            name="Detail PPOB"
            component={ProductPpobDetails}
          />
          <Route
            exact
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
          <Redirect from="/" to="/company_info" />
          <Redirect to="/404" />
        </Switch>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
