import styled from "@emotion/styled";
import {FaUserCircle} from "react-icons/fa";

interface WriteBoxProps {
  text: string;
}

export const CommentRegistrationWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;

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

export const CommentWriteBox = styled.div<WriteBoxProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border: ${(props) =>
    props.text === "" ? "1px solid #ddd" : "1px solid #f17373"};
  border-radius: 2px;
  overflow: hidden;

  > textarea {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    resize: none;
    outline: none;

    ::placeholder {
      color: #aaa;
    }
  }

  > div {
    padding: 10px;
    background-color: #fff;
    white-space: nowrap;
  }
`;
