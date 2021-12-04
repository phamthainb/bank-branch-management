import React, { useContext } from "react";
import Overlay from "src/common/components/Overlay";
import { ReactsContext } from "src/common/context/ReactContext";
import styled, { keyframes } from "styled-components";

export default function Reacts() {
  const { messageId, setMessageId } = useContext(ReactsContext);

  if (!messageId) return <></>;

  return (
    <Overlay
      onClick={() => setMessageId(null)}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SReacts>
        <span
          onClick={() => {
            console.log("123");
          }}
        >
          😀
        </span>
        <span
          onClick={() => {
            console.log("123");
          }}
        >
          😙
        </span>
        <span
          onClick={() => {
            console.log("123");
          }}
        >
          😱
        </span>
        <span
          onClick={() => {
            console.log("123");
          }}
        >
          🥴️
        </span>
        <span
          onClick={() => {
            console.log("123");
          }}
        >
          😳
        </span>
      </SReacts>
    </Overlay>
  );
}

const zoomOut = keyframes`
  from {
    transform: scale(0);
  }
  80% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1)
  }
`

export const SReacts = styled.div`
  background-color: white;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  border-radius: 20px;
  & > span {
    animation: ${zoomOut} 0.2s ease-out forwards;
    font-size: 20px;
    padding: 0 5px;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      margin-bottom: 5px;
    }
  }
`;
