import { Input } from "antd";
import React, { useContext } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { ToggleSidebarContext } from "src/common/context/ToggleSidebarContext";
import { ThemeContext } from "styled-components";
import { SInnerSidebar } from "../Calls/styles";
import AddFriendButton from "./AddFriendButton";
import FriendList from "./List";

export default function Friends() {
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
          {" "}
          <FaChevronLeft color={theme.text.main} size={16} />
          Friends
        </h3>

        <div className="icons">
          <AddFriendButton theme={theme} />
        </div>
      </div>

      <div className="search">
        <Input.Search placeholder="Search" onSearch={onSearch} enterButton />
      </div>

      <FriendList />
    </SInnerSidebar>
  );
}
