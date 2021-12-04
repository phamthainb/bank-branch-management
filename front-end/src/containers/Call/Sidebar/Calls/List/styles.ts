import { mixinsScrollBar, mixinTextOverflow } from "src/common/styles/mixins";
import styled, { css } from "styled-components";

export const SCallItem = styled.div<{ seen: boolean; active: boolean }>`
  padding: 15px 15px 15px 51px;
  position: relative;
  border-bottom: 1px solid ${(props) => props.theme.theme.border};
  transition: 0.15s;
  ${(props) =>
    props.active &&
    css`
      border-left: 4px solid ${props.theme.theme.logo};
      background-color: ${(props) => props.theme.theme.bg.sub};
    `}
  ${props => !props.active && css`
    &:hover {
      background-color: ${props => props.theme.theme.bg.hover};
    }
  `}
  .avt {
    position: absolute;
    left: 15px;
    top: 15px;
  }
  .detail {
    margin-left: 10px;
    .name {
      font-weight: ${(props) => (props.seen ? 600 : 500)};
      ${mixinTextOverflow(1)};
      padding-right: 60px;
      color: ${(props) => props.theme.theme.text.main};
      margin-bottom: 8px;
    }
    .timestamp {
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 12px;
      color: ${(props) =>
        props.seen ? props.theme.theme.logo : props.theme.theme.text.sub};
    }
    .message-preview {
      display: flex;
      align-items: center;
      .content {
        ${mixinTextOverflow(1)};
        color: ${(props) =>
          props.seen ? props.theme.theme.logo : props.theme.theme.text.sub};
        font-size: 14px;
      }
    }
    .badge {
      margin-left: auto;
      width: 16px;
      min-width: 16px;
      height: 16px;
      background-color: ${(props) => props.theme.theme.badge};
      font-size: 10px;
      line-height: 18px;
      border-radius: 8px;
      text-align: center;
      color: white;
      padding: 0 5px;
      font-weight: 600;
    }
  }
`;

export const SList = styled.div`
  margin-top: 10px;
  flex-grow: 1;
  height: 100%;
  overflow: auto;
  a {
    width: 100%;
  }
  ${(props) =>
    mixinsScrollBar(
      "3px",
      "3px",
      "3px",
      "transparent",
      props.theme.theme.border
    )};
`;
