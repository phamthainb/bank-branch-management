import React, { useContext, useEffect } from "react";
import { useRouteMatch } from "react-router";
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
        {indexCustomer === 0 && <Accountmanagement />}
        {indexCustomer === 1 && <Recharge />}
        {indexCustomer === 2 && <Payment />}
        {indexCustomer === 3 && <TransactionHistory />}
        {indexCustomer === 4 && <UpdateProfile />}
      </SSidebar>
    </>
  );
}
