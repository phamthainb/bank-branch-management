import React, { useContext, useEffect } from "react";
import { useRouteMatch } from "react-router";
import Overlay from "src/common/components/Overlay";
import { NavigatorContext } from "src/common/context/NavigatorContext";
import { SidebarAdminContext } from "src/common/context/SidebarAdminContext";
import { ToggleSidebarContext } from "src/common/context/ToggleSidebarContext";
import Accountmanagement from "./Accountmanagement";
import { SSidebar } from "./styles";

export default function SidebarAdmin() {
  const { indexAdmin } = useContext(SidebarAdminContext);
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
        {indexAdmin === 0 && <Accountmanagement />}
      </SSidebar>
    </>
  );
}
