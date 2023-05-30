import styled from "@emotion/styled";
import {FaUserCircle} from "react-icons/fa";

export const CommentRegistrationWrapper = styled.form`
  display: flex;
  flex-direction: column;

  > div:first-of-type {
    display: flex;
    flex-direction: row;
    align-items: center;

    :first-of-type {
      margin-bottom: 20px;
    }
  }
`;

export const UserIconBox = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 12px;
  border-radius: 50%;
  background-color: #fff;
`;

export const UserIcon = styled(FaUserCircle)`
  font-size: 30px;
  color: #ddd;
`;

export const InputBox = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  > li:first-of-type {
    margin-right: 6px;
  }
`;

export const CommentWriteBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border: 1px solid #ddd;
  border-radius: 2px;

  > textarea {
    width: 100%;
    min-height: 100px;
    padding: 10px;
    font-size: 16px;
    resize: none;
    outline: none;

    ::placeholder {
      color: #aaa;
    }
  }

  > div {
    padding: 10px;
    white-space: nowrap;
  }
`;
