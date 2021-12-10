import React, { useContext } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { RoleContext } from 'src/common/context/RoleContext'
import Navigator from './Navigator'
import SidebarAdmin from './SidebarAdmin'
import SidebarCustomer from './SidebarCustomer'
import SidebarStaff from './SidebarStaff'
import { SBank } from './styles'

export default function Bank() {
  const { role } = useContext(RoleContext);
  let match = useRouteMatch();

  return (
    <SBank>
      <Navigator role={role} />

      <Switch>
        <Route path={`${match.path}/admin`} >
          <SidebarAdmin />
        </Route>
        <Route path={`${match.path}/staff`} >
          <SidebarStaff />
        </Route>
        <Route path={`${match.path}/customer`} >
          <SidebarCustomer />
        </Route>
      </Switch>
    </SBank>
  )
}
