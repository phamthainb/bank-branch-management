import React, { useContext, useEffect } from "react";
import { useRouteMatch } from "react-router";
import Overlay from "src/common/components/Overlay";
import { NavigatorContext } from "src/common/context/NavigatorContext";
import { ToggleSidebarContext } from "src/common/context/ToggleSidebarContext";
import CustomerManagement from "./CustomerManagement";
import Accountmanagement from "./Accountmanagement";
import { SSidebar } from "./styles";
import { SidebarStaffContext } from "src/common/context/Staff/SidebarStaffContext";

export default function SidebarStaff() {
  const { indexStaff } = useContext(SidebarStaffContext);
  const { open, toggleSidebar } = useContext(ToggleSidebarContext);

  const router = useRouteMatch();

  useEffect(() => {
    toggleSidebar && toggleSidebar(false);
  }, [router, toggleSidebar])

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
        {indexStaff === 0 && <CustomerManagement />}
        {indexStaff === 1 && <Accountmanagement />}
      </SSidebar>
    </>
  );
}
