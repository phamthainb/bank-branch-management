import { Avatar } from "antd";
import React from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { SCallItem } from "./styles";

export default function CallItem({ id }: { id: number }) {
  const { params } = useRouteMatch() as any;

  return (
    <Link to={`/c/${id}`}>
      <SCallItem seen={id === 1} active={params?.id === id.toString()}>
        <Avatar src="/images/avt-placeholder.png" className="avt" />
        <div className="detail">
          <div className="timestamp">00:00 AM</div>
          <p className="name">Huy NQ</p>
          <div className="message-preview">
            <div className="content">
              Last call from three day ago
            </div>
            {/* {id === 1 && <span className="badge">2</span>} */}
          </div>
        </div>
      </SCallItem>
    </Link>
  );
}
