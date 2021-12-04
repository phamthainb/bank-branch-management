import { Collapse } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React, { useContext, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import IconButton from "src/common/components/IconButton";
import Overlay from "src/common/components/Overlay";
import { CallboxInfoContext } from "src/common/context/CallboxInfoContext";
import { ThemeContext } from "styled-components";
import { SCallboxInfo } from "./styles";

export default function CallboxInfo() {
  const { theme } = useContext(ThemeContext);
  const { CallboxInfo, openCallboxInfo, toggleCallboxInfo } =
    useContext(CallboxInfoContext);

  useEffect(() => {
    console.log(CallboxInfo);
  }, [CallboxInfo]);

  return (
    <>
      {openCallboxInfo && <Overlay onClick={() => toggleCallboxInfo(false)} />}
      <SCallboxInfo isOpen={openCallboxInfo}>
        <IconButton
          onClick={() => toggleCallboxInfo(false)}
          style={{ position: "absolute", left: "15px", right: "15px" }}
        >
          <FaTimes color={theme.text.main} />
        </IconButton>
        <Avatar size={60} src="/images/avt-placeholder.png" />
        <h3 className="header">Box Call</h3>

        <div className="module-content">
          <Collapse>
            <Collapse.Panel
              key={1}
              className="custom-panel"
              header="Member (30)"
            >
              <div> Custom panel</div>
              <div> Custom panel</div>
            </Collapse.Panel>
          </Collapse>
        </div>
      </SCallboxInfo>
    </>
  );
}
