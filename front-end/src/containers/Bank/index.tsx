import React, { useContext } from 'react'
import { RoleContext } from 'src/common/context/RoleContext'
import Navigator from './Navigator'
import SidebarCustomer from './SidebarCustomer'
import SidebarStaff from './SidebarStaff'
import { SBank } from './styles'

export default function Bank() {
  const { role } = useContext(RoleContext);

  return (
    <SBank>
      <Navigator role={role} />
      {
        role === "staff" ? (
          <SidebarStaff />
        ) : role === "customer" ? (
          <SidebarCustomer />
        ) : ""
      }
    </SBank>
  )
}
