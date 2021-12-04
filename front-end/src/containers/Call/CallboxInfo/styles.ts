import { mixinsScrollBar } from "src/common/styles/mixins";
import styled from "styled-components";

export const SCallboxInfo = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 300px;
  z-index: 5;
  height: 100%;
  right: ${(props) => (props.isOpen ? "0px" : "-300px")};
  transition: 0.2s;
  background-color: ${(props) => props.theme.theme.bg.main};
  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  .header {
    color: ${(props) => props.theme.theme.text.main};
    font-weight: 700;
    margin-top: 10px;
  }

  .module-content {
    margin-top: 15px;
    flex-grow: 1;
    width: 100%;
    overflow-y: auto;
    ${(props) =>
      mixinsScrollBar(
        "3px",
        "3px",
        "3px",
        "transparent",
        props.theme.theme.border
      )};
  }

  .ant-collapse {
    width: 100%;
    border-color: ${(props) => props.theme.theme.border};
    .custom-panel {
      width: 100%;
      border-color: ${(props) => props.theme.theme.border};

      .ant-collapse-header {
        padding: 5px;
        color: ${(props) => props.theme.theme.text.main};
        background-color: ${(props) => props.theme.theme.bg.main};
        border-radius: unset;
      }

      .ant-collapse-content {
        background-color: ${(props) => props.theme.theme.bg.dropdown};
        border-color: ${(props) => props.theme.theme.border};
        border-radius: unset;
      }
    }
  }
`;
