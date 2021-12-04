import { Button, Input } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "styled-components";
import { SCallFooter } from "../styles";
import { BiSend } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { useRouteMatch } from "react-router";
import { ReplyingContext } from "src/common/context/ReplyingContext";
import ReplyingSection from './ReplyingSection'

export default function CallFooter() {
  const { theme } = useContext(ThemeContext);
  const { replying, setReplying } = useContext(ReplyingContext);

  const inputRef = useRef(null);

  const [message, setMessage] = useState("");

  const router = useRouteMatch();

  const reset = () => {
    const inputCurrent = inputRef?.current as any;
    if (inputCurrent) {
      inputCurrent?.focus();
    }
    setMessage("");
  };

  useEffect(() => {
    reset();
    if (replying) {
      setReplying(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const onSubmit = () => {
    console.log(message);
    if (message.trim() !== "") {
      console.log("SUBMIT");
      reset();
    }
  };

  return (
    <>
      <ReplyingSection />
      <SCallFooter>
        <Button
          className="submit"
          type="primary"
          htmlType="submit"
          style={{ width: "32px", height: "32px" }}
        >
          <FiPhoneCall size={16} style={{ minWidth: "16px" }} color="white" />
        </Button>
      </SCallFooter>
    </>
  );
}
