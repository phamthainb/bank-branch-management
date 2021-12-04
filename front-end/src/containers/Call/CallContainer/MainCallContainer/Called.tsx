import { Avatar, Dropdown, Menu } from "antd";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { FaEye, FaRegLaughSquint } from "react-icons/fa";
import { ReactsContext } from "src/common/context/ReactContext";
import { ReplyingContext } from "src/common/context/ReplyingContext";
import { SMessage } from "../styles";

interface IMessage {
  fromMe?: boolean;
  isLast?: boolean;
  isFirst?: boolean;
}

export default function Called({
  fromMe = false,
  isLast = false,
  isFirst = false,
}: IMessage) {
  const { setMessageId } = useContext(ReactsContext);
  const { setReplying } = useContext(ReplyingContext);

  const handleReplying = () => {
    setReplying(1);
  }

  return (
    <Dropdown
      overlay={overlay(setMessageId, handleReplying)}
      trigger={["contextMenu"]}
    >
      <SMessage
        fromMe={fromMe}
        className={`${isFirst ? "is_first" : ""} ${isLast ? "is_last" : ""}`}
      >
        {!fromMe && <Avatar src="/images/avt-placeholder.png" size={36} />}
        <div className="detail">
          {!fromMe && <p className="name">Caller</p>}
          <div className="content">
            The miss call
            <div className="timestamp">
              {fromMe && <FaEye size={10} color="white" />}
              <span>00:00 AM</span>
            </div>
          </div>
        </div>
      </SMessage>
    </Dropdown>
  );
}

const overlay = (
  setMessageId: Dispatch<SetStateAction<number | null>>,
  handleReplying: () => void,
) => {
  return (
    <Menu>
      <Menu.Item key={1} onClick={handleReplying}>Reply</Menu.Item>
      <Menu.Divider />
      <Menu.Item
        key={2}
        onClick={() => {
          setMessageId(Math.random());
        }}
      >
        <FaRegLaughSquint size={14} />
      </Menu.Item>
    </Menu>
  );
};
