import Avatar from "antd/lib/avatar/avatar";
import { FaEllipsisV } from "react-icons/fa";
import IconButton from "src/common/components/IconButton";
import StatusDot from "src/common/components/StatusDot";
import { SCallHeader } from "../styles";
import { ThemeContext } from "styled-components";
import React, { useContext } from "react";
import { Dropdown, Menu } from "antd";
import { CallboxInfoContext } from "src/common/context/CallboxInfoContext";

export default function CallHeader() {
  const { theme } = useContext(ThemeContext);

  const { handleToggleCallboxInfo } = useContext(CallboxInfoContext);

  return (
    <SCallHeader>
      <div className="avt">
        <Avatar src="/images/avt-placeholder.png" size={40} />
        <StatusDot />
      </div>
      <div className="detail">
        <span className="name">Ngan</span>
      </div>
      <div className="group-button">
        <Dropdown
          overlay={overlay(theme, handleToggleCallboxInfo)}
          placement="bottomRight"
          trigger={["click"]}
        >
          <div>
            <IconButton>
              <FaEllipsisV color={theme.icon.inactive} size={16} />
            </IconButton>
          </div>
        </Dropdown>
      </div>
    </SCallHeader>
  );
}

const overlay = (
  theme: any,
  handleToggleCallboxInfo: React.Dispatch<React.SetStateAction<number>>
) => {
  return (
    <Menu>
      <Menu.Item onClick={() => handleToggleCallboxInfo(1)}>Info</Menu.Item>
      <Menu.Divider />
      <Menu.Item style={{ color: theme.badge }}>Leave</Menu.Item>
    </Menu>
  );
};
