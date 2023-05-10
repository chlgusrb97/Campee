import {CloseOutlined, CommentOutlined, FormOutlined} from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  border-top: 1px solid #c0c0c0;
  border-bottom: 1px solid #c0c0c0;
  margin: 0 50px;

  > div {
    display: flex;
    flex-direction: row;
    padding: 40px 15px;

    :not(:last-of-type) {
      border-bottom: 1px solid #c0c0c0;
    }
  }
`;

export const Name = styled.span`
  height: 27px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  margin-right: 40px;
  color: #fff;
  background-color: #000;
  white-space: nowrap;
`;

export const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Question = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  line-height: 27px;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const Date = styled.p`
  color: #888;
`;

export const EditIcon = styled(FormOutlined)`
  margin: 0 20px;
  color: #bdbdbd;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    color: #000;
  }
`;

export const DeleteIcon = styled(CloseOutlined)`
  color: #bdbdbd;
  font-size: 20px;
  cursor: pointer;

  transition: all 0.3s ease-in-out;

  :hover {
    color: #000;
  }
`;

export const AnswerIcon = styled(CommentOutlined)`
  margin-left: 60px;
  color: #bdbdbd;
  font-size: 20px;
  cursor: pointer;

  transition: all 0.3s ease-in-out;

  :hover {
    color: #000;
  }
`;

export const Answer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px dotted #c0c0c0;
  padding-top: 30px;
  margin-top: 30px;

  > span {
    font-family: NanumBold;
    margin-bottom: 10px;
  }
`;

export const AnswerContents = styled.p`
  margin-top: 30px;
`;

export const EditBox = styled.form`
  display: flex;
  flex-direction: column;

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
