import { Input } from "antd";
import React, { useContext } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { ToggleSidebarContext } from "src/common/context/ToggleSidebarContext";
import { ThemeContext } from "styled-components";
import { SInnerSidebar } from "../CustomerManagement/styles";

export default function Accountmanagement() {
  const { theme } = useContext(ThemeContext);
  const onSearch = (value: any) => {
    console.log(value);
  };

  const { toggleSidebar } = useContext(ToggleSidebarContext);

  return (
    <SInnerSidebar>
      <div className="top">
        <h3
          className="header"
          onClick={() => toggleSidebar && toggleSidebar(false)}
        >
          <FaChevronLeft color={theme.text.main} size={16} />
          Quản lý tài khoản
        </h3>
      </div>
    </SInnerSidebar>
  );
}
