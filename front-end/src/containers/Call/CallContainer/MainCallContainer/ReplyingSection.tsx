import React, { useContext } from "react";
import { FaReply, FaTimes } from "react-icons/fa";
import { ReplyingContext } from "src/common/context/ReplyingContext";
import { ThemeContext } from "styled-components";
import { SReplying } from "../styles";

export default function ReplyingSection() {
  const { replying, setReplying } = useContext(ReplyingContext);
  const { theme } = useContext(ThemeContext);

  if (!replying) return null;

  return (
    <SReplying>
      <div className="icon reply">
        <FaReply color={theme.logo} size={16} />
      </div>
      <div className="detail">
        <div className="name">Son sieu nhan</div>
        <div className="content">
          Sunt ea dolor irure elit mollit. Lorem eu eu ullamco veniam fugiat do
          dolore. Culpa voluptate incididunt elit cillum proident commodo
          reprehenderit laboris magna et amet non tempor mollit. In ea ea
          occaecat irure incididunt laborum qui labore cupidatat occaecat sint
          duis nulla adipisicing. Ea dolor do nisi cupidatat sint adipisicing.
          Amet aute dolor mollit tempor pariatur cupidatat ad. Sit culpa dolor
          laboris Lorem dolore magna. Consequat ad elit sunt aliquip occaecat
          consectetur id proident incididunt. Sunt nulla officia eiusmod amet
          voluptate laboris duis aliquip ex eu. Ut et anim consectetur aute est
          in veniam proident ut reprehenderit velit ipsum esse pariatur. Lorem
          voluptate ut consequat minim aliqua est sint consectetur do dolore.
          Cillum ea mollit officia consectetur deserunt est anim mollit quis
          labore adipisicing. Id aute velit do irure. In quis proident nisi
          magna adipisicing. Occaecat sint nostrud occaecat laborum amet amet
          aliquip ullamco. Mollit consectetur do ea deserunt est consectetur qui
          exercitation nisi deserunt id laboris. Ad non ullamco irure aute nisi
          pariatur nostrud in proident voluptate elit aliquip velit irure. Quis
          et ad ea veniam officia labore minim ea ad culpa consectetur
          excepteur. Deserunt culpa tempor eiusmod sunt consectetur nisi cillum
          est dolore. Laboris culpa consequat laborum ut duis duis tempor
          consectetur. Duis ad nisi aliqua ex in mollit. Officia mollit laboris
          nisi non nulla aliqua eu quis adipisicing eiusmod duis quis consequat
          amet. Tempor tempor anim nostrud sint labore. Nulla cupidatat ad
          voluptate proident esse aliquip voluptate consectetur qui. Non laboris
          consequat est dolore est reprehenderit cillum.
        </div>
      </div>
      <div className="icon close">
        <FaTimes
          size={20}
          color={theme.icon.inactive}
          onClick={() => setReplying(null)}
        />
      </div>
    </SReplying>
  );
}
