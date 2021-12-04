import { mixinsFlexCenter } from "src/common/styles/mixins";
import styled from "styled-components";

export const SResultItem = styled.div`
  padding: 15px 15px 15px 51px;
  position: relative;
  border-bottom: 1px solid #ced4da;

  .avt {
    position: absolute;
    left: 15px;
    top: 15px;
  }
  .detail {
    margin-left: 10px;
    .name {
      font-weight: 500;
      padding-right: 60px;
      color: black;
      margin-bottom: 8px;
    }
    .group-icon {
      display: flex;
      justify-content: flex-end;
      margin: 0 -4px;
      .icon {
        cursor: pointer;
        margin: 0 4px;
        width: 30px;
        height: 24px;
        border-radius: 4px;
        background-color: white;
        ${mixinsFlexCenter};
        border: 1px solid #ced4da;
      }
    }
  }
`;
