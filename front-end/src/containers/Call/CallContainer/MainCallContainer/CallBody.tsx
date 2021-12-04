import { Divider } from "antd";
import { useEffect, useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import { SCallBody } from "../styles";
import CallFooter from "./CallFooter";
import Called from "./Called";

export default function CallBody() {
  const bodyRef = useRef(null);
  const scrollButtonRef = useRef(null);

  // scroll events
  useEffect(() => {
    const bodyRefCurrent = bodyRef.current as any;
    if (bodyRefCurrent) {
      bodyRefCurrent.addEventListener("scroll", (e: any) => {
        const scrollTop = e.target.scrollTop;
        const scrollButtonCurrent = scrollButtonRef.current as any;
        if (scrollTop <= -160) {
          scrollButtonCurrent.classList.add("show");
        } else {
          scrollButtonCurrent.classList.remove("show");
        }
      });
    }
  }, []);

  const scrollToBottom = () => {
    if (bodyRef.current) {
      const bodyRefCurrent = bodyRef.current as any;
      // bodyRefCurrent.scrollTop = bodyRefCurrent.scrollHeight
      if (bodyRefCurrent.scrollTop) {
        bodyRefCurrent.scrollTo({
          behavior: "smooth",
          top: 0,
        });
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  });

  // end scroll events

  return (
    <>
      <SCallBody ref={bodyRef}>
        <div className="top"></div>

        <Called fromMe={true} />

        <Called isLast />
        <Called />
        <Called />
        <Called />
        <Called />
        <Called />
        <Called isFirst />
        <Divider>20/09/2021</Divider>

        <div className="bottom"></div>
        <div
          className="scroll-button"
          ref={scrollButtonRef}
          onClick={scrollToBottom}
        >
          <FaArrowDown color="white" size={16} />
        </div>
      </SCallBody>
      <CallFooter />
    </>
  );
}
