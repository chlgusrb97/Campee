import styled from "@emotion/styled";
import {Modal} from "antd";

interface IStyleProps {
  fontFamily: string;
}

export const NewModal = styled(Modal)<IStyleProps>`
  .ant-modal-title {
    font-family: ${(props) => props.fontFamily};
  }
`;
