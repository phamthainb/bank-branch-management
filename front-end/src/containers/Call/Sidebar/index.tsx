import React, { useContext, useEffect } from "react";
import { useRouteMatch } from "react-router";
import Overlay from "src/common/components/Overlay";
import { NavigatorContext } from "src/common/context/NavigatorContext";
import { ToggleSidebarContext } from "src/common/context/ToggleSidebarContext";
import Calls from "./Calls";
import Friends from "./Friends";
import { SSidebar } from "./styles";

export default function Sidebar() {
  const { index } = useContext(NavigatorContext);
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
        {index === 0 && <Calls />}
        {index === 1 && <Friends />}
      </SSidebar>
    </>
  );
}
