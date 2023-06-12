import styled from "@emotion/styled";

interface IStyleProp {
  isFocused: boolean;
}

export const CommentInput = styled.input<IStyleProp>`
  border: ${(props) =>
    props.isFocused ? "1px solid #e76161" : "1px solid #ddd"};
  border-radius: 2px;
  padding: 10px;
  font-size: 16px;
  outline: none;

  ::placeholder {
    color: #a9a9a9;
    font-size: 16px;
  }
`;
