import CallboxInfo from "../../CallboxInfo";
import { SMainCallContainer } from "../styles";
import CallBody from "./CallBody";
import CallHeader from "./CallHeader";
import Reacts from "./Reacts";

export default function MainCallContainer() {
  return (
    <>
      <SMainCallContainer>
        <CallHeader />
        <CallBody />
        <CallboxInfo />
      </SMainCallContainer>
      <Reacts />
    </>
  );
}
