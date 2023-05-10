import styled from "@emotion/styled";

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

export const Date = styled.p`
  color: #888;
`;

export const AnswerContents = styled.p`
  margin-top: 30px;
`;

export const AnswerSubmit = styled.div`
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
