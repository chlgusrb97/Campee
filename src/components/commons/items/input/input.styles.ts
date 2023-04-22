import styled from "@emotion/styled";

interface IStyleProps {
  width: string;
  height: string;
  padding: string;
  backgroundColor: string;
  fontSize: string;
}

export const Input = styled.input<IStyleProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  color: #000;
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize};
  outline: none;

  ::placeholder {
    color: #a9a9a9;
    font-size: ${(props) => props.fontSize};
  }
`;
