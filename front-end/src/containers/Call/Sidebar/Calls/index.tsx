import { Input } from "antd";
import React, { useContext } from "react";
import { FaChevronLeft, FaPlusCircle, FaUsers } from "react-icons/fa";
import IconButton from "src/common/components/IconButton";
import { NavigatorContext } from "src/common/context/NavigatorContext";
import { ToggleSidebarContext } from "src/common/context/ToggleSidebarContext";
import { ThemeContext } from "styled-components";
import CallList from "./List";
import { SInnerSidebar } from "./styles";

export default function Calls() {
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
          Calls
        </h3>

        <div className="icons">
          <IconButton
            tooltipTitle="Start a new call"
            onClick={() => {
              setIndex(1);
            }}
            tooltipPosition="bottom"
          >
            <FaPlusCircle color={theme.icon.inactive} size={16} />
          </IconButton>

          <IconButton
            tooltipPosition="bottom"
            tooltipTitle="Create a new group call"
          >
            <FaUsers color={theme.icon.inactive} size={16} />
          </IconButton>
        </div>
      </div>

      <div className="search">
        <Input.Search placeholder="Search" onSearch={onSearch} enterButton />
      </div>

      <CallList />
    </SInnerSidebar>
  );
}
