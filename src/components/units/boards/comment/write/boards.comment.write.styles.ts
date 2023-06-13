import styled from "@emotion/styled";
import {FaUserCircle} from "react-icons/fa";

export const CommentWriteWrapper = styled.form`
  display: flex;
  flex-direction: row;
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

export const TextBox = styled.div`
  width: 100%;

  > ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 12px;

    > li {
      :first-of-type {
        margin-right: 6px;
      }
    }
  }
`;
