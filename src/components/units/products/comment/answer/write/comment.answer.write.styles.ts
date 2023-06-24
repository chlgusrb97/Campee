import styled from "@emotion/styled";
import {FaUserCircle} from "react-icons/fa";

export const CommentAnswerWriteWrapper = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const UserIconBox = styled.div`
  width: 30px;
  height: 30px;
  margin-top: 3.75px;
  margin-right: 12px;
  border-radius: 50%;
  background-color: #fff;
`;

export const UserIcon = styled(FaUserCircle)`
  font-size: 30px;
  color: #ddd;
`;
