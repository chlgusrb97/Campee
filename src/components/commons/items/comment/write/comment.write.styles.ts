import styled from "@emotion/styled";

interface IStyleProps {
  isFocused: boolean;
}

export const CommentWriteBox = styled.div<IStyleProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border: ${(props) =>
    props.isFocused ? "1px solid #e76161" : "1px solid #ddd"};
  border-radius: 2px;
  overflow: hidden;

  > textarea {
    width: 100%;
    height: 40px;
    padding: 10px;
    font-size: 16px;
    resize: none;
    outline: none;

    ::placeholder {
      color: #a9a9a9;
      font-size: 16px;
    }
  }

  > button {
    padding: 10px;
    color: ${(props) => (props.isFocused ? "#e76161" : "#a9a9a9")};
    background-color: #fff;
    font-size: 16px;
    font-family: NanumBold;
    white-space: nowrap;
    cursor: pointer;
  }
`;

export const TextareaBox = styled.div``;
