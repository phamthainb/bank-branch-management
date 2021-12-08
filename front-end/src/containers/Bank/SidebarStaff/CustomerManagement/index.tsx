import { Input } from "antd";
import React, { useContext } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { NavigatorContext } from "src/common/context/NavigatorContext";
import { ToggleSidebarContext } from "src/common/context/ToggleSidebarContext";
import { ThemeContext } from "styled-components";
import { SInnerSidebar } from "./styles";

export default function CustomerManagement() {
  const { theme } = useContext(ThemeContext);
  const onSearch = (value: any) => {
    console.log(value);
  };

  const { toggleSidebar } = useContext(ToggleSidebarContext);
  const { setIndex } = useContext(NavigatorContext);

  return (
    <SInnerSidebar>
      <div className="top">
        <h3
          className="header"
          onClick={() => toggleSidebar && toggleSidebar(false)}
        >
          <FaChevronLeft color={theme.text.main} size={16} />
          Quản lý khách hàng
        </h3>
      </div>
    </SInnerSidebar>
  );
}
