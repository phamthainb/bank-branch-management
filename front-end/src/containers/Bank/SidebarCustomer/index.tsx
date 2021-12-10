import React, { useContext, useEffect } from "react";
import Overlay from "src/common/components/Overlay";
import { NavigatorContext } from "src/common/context/NavigatorContext";
import { SidebarCustomerContext } from "src/common/context/SidebarCustomerContext";
import { ToggleSidebarContext } from "src/common/context/ToggleSidebarContext";
import Accountmanagement from "./Accountmanagement";
import Payment from "./Payment";
import Recharge from "./Recharge";
import { SSidebar } from "./styles";
import TransactionHistory from "./TransactionHistory";
import UpdateProfile from "./UpdateProfile";
import { Route, Switch, useHistory, useRouteMatch } from "react-router";

export default function SidebarCustomer() {
  const { indexCustomer } = useContext(SidebarCustomerContext);
  const { open, toggleSidebar } = useContext(ToggleSidebarContext);
  const router = useRouteMatch();

  useEffect(() => {
    toggleSidebar && toggleSidebar(false);
  }, [router, toggleSidebar]);

  return (
    <>
      {open && (
        <Overlay
          onClick={() => {
            toggleSidebar && toggleSidebar(false);
          }}
        />
      )}
      <SSidebar open={open}>
        <Switch>
          <Route path={`${router.path}`}>
            <Accountmanagement />
          </Route>
          <Route path={`${router.path}/2`}>
            <Payment />
          </Route>
          <Route path={`${router.path}/3`}>
            <TransactionHistory />
          </Route>
          <Route path={`${router.path}/4`}>
            <UpdateProfile />
          </Route>
        </Switch>
        {/* {indexCustomer === 0 && <Accountmanagement />}
        {indexCustomer === 1 && <Recharge />}
        {indexCustomer === 2 && <Payment />}
        {indexCustomer === 3 && <TransactionHistory />}
        {indexCustomer === 4 && <UpdateProfile />} */}
      </SSidebar>
    </>
  );
}
