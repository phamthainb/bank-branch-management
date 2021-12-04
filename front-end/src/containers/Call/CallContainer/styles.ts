import {
  mixinsFlexCenter,
  mixinsScrollBar,
  mixinTextOverflow,
} from "src/common/styles/mixins";
import styled, { css } from "styled-components";

export const SCallContainer = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  border-left: ${(props) => `1px solid ${props.theme.theme.border}`};
`;

export const SMainCallContainer = styled(SCallContainer)`
  flex-direction: column;
`;

export const SCallHeader = styled.div`
  height: 80px;
  padding: 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.theme.border};
  width: 100%;
  .avt {
    position: relative;
    margin-right: 15px;
    @media (max-width: 991px) {
      display: none;
    }
  }
  .detail {
    flex-grow: 1;
    .name {
      color: ${(props) => props.theme.theme.text.main};
      font-weight: 600;
      font-size: 18px;
    }
  }
  .group-button {
    margin: 0 -4px -4px;
  }
`;

export const SCallBody = styled.div`
  flex-grow: 1;
  background-image: url("/images/Call-bg.png");
  background-color: ${(props) => props.theme.theme.bg.Call};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
  padding: 15px;

  .scroll-button {
    position: fixed;
    bottom: -30px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    left: calc(50% - 15px);
    z-index: 10;
    background-color: ${(props) => props.theme.theme.logo};
    cursor: pointer;
    padding-top: 7px;
    text-align: center;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
    transition: 0.2s;
    &.show {
      bottom: 80px;
    }
  }

  .ant-divider-horizontal {
    &:after,
    &:before {
      border: none;
    }
  }

  .ant-divider-inner-text {
    border-color: ${(props) => props.theme.theme.border};
    color: ${(props) => props.theme.theme.text.sub};
    background-color: ${(props) => props.theme.theme.bg.main};
    font-size: 12px;
    border-radius: 4px;
  }

  @media (max-width: 575px) {
    padding: 15px 5px;
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

export const SMessage = styled.div<{ fromMe: boolean }>`
  display: flex;
  align-items: flex-end;
  max-width: 80%;
  margin-bottom: 4px;
  position: relative;
  padding-left: 46px;
  ${(props) =>
    props.fromMe &&
    css`
      margin-left: auto;
    `}
  &.is_first {
    .detail {
      .name {
        display: block;
      }
    }
  }
  &.is_last {
    .ant-avatar {
      display: block;
    }
  }
  .ant-avatar {
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .detail {
    .name {
      display: none;
    }
    .name {
      margin-bottom: 4px;
      font-size: 12px;
      font-weight: 500;
      color: ${(props) => props.theme.theme.text.main};
    }
    .timestamp {
      text-align: right;
      margin-bottom: 0;
      margin-top: -4px;
      & > span {
        font-size: 10px;
        margin-left: 4px;
      }
    }
    .content {
      position: relative;
      margin-bottom: 0;
      color: ${(props) =>
        props.fromMe
          ? props.theme.theme.text.message.send
          : props.theme.theme.text.message.receive};
      padding: 6px 8px;
      border-radius: 4px;
      background-color: ${(props) =>
        props.fromMe
          ? props.theme.theme.bg.message.send
          : props.theme.theme.bg.message.receive};
    }
  }
`;

export const SCallFooter = styled.form`
  min-height: 70px;
  display: flex;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
  border-top: 1px solid ${(props) => props.theme.theme.border};
  margin: 0 -4px;
  justify-content: center;

  .submit {
    width: 32px;
    min-width: 32px;
    height: 32px;
    ${mixinsFlexCenter};
    margin: 0 4px;
    border-radius: 4px;
  }
`;

export const SReplying = styled.div`
  padding: 10px 40px;
  position: relative;
  border-left: 4px solid ${(props) => props.theme.theme.logo};
  display: flex;
  align-items: center;
  max-width: 100%;

  .icon {
    position: absolute;
    &.reply {
      left: 10px;
    }
    &.close {
      right: 10px;
    }
  }

  .detail {
    flex-grow: 1;
    .name {
      font-weight: 600;
      font-size: 12px;
      color: ${(props) => props.theme.theme.logo};
    }
    .content {
      color: ${(props) => props.theme.theme.text.main};
      font-size: 12px;
      ${mixinTextOverflow(1)};
    }
  }
`;
