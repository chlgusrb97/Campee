import styled from "@emotion/styled";
import {Modal} from "antd";
import {FaUserCircle} from "react-icons/fa";

export const AnswerWrapper = styled.div`
  margin-left: 42px;
`;

export const AnswerList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  > li {
    display: flex;
    flex-direction: row;
    border-radius: 4px;
    padding: 20px;
    background-color: #fbf8f8;

    :not(:last-of-type) {
      margin-bottom: 20px;
    }
  }
`;

export const UserIconBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 30px;
  height: 30px;
  margin-right: 12px;
  border-radius: 50%;
  background-color: #fff;
`;

export const UserIcon = styled(FaUserCircle)`
  width: 100%;
  height: 100%;
  font-size: 30px;
  color: #ddd;
`;

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    margin-top: 2px;
    font-size: 16px;
    font-family: NanumBold;
  }

  > p {
    margin: 12px 0;
    font-size: 16px;
  }

  > ul {
    display: flex;
    flex-direction: row;
    align-items: center;

    > li {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
`;

export const Dotted = styled.i`
  display: inline-block;
  margin: 0px 4px;
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
  font-style: normal;
  color: rgb(194, 200, 204);

  ::before {
    content: "·";
  }
`;

export const CreationDate = styled.p`
  display: inline-block;
  font-size: 12px;
  color: #777;
`;

export const CommentDeleteModal = styled(Modal)`
  .ant-modal-title {
    font-family: NanumBold;
  }

  input {
    width: 100%;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0 10px;
    margin: 20px 0 10px;
    outline: none;
  }
`;

export const CommentAnswerWrite = styled.form`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
`;

export const AnswerUserIconBox = styled.div`
  width: 30px;
  height: 30px;
  margin-top: 3.75px;
  margin-right: 12px;
  border-radius: 50%;
  background-color: #fff;
`;

export const AnswerUserIcon = styled(FaUserCircle)`
  font-size: 30px;
  color: #ddd;
`;

///

export const AnswerSubmit = styled.form`
  border-top: 1px dotted #c0c0c0;
  padding-top: 30px;
  margin-top: 40px;

  > textarea {
    width: 100%;
    height: 76px;
    padding: 30px;
    background-color: #e9e9e9;
    outline: none;
    resize: none;

    ::placeholder {
      color: #a9a9a9;
    }
  }

  > ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 17px;

    > li:last-of-type {
      margin-left: 23px;
    }
  }
`;
