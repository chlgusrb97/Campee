import styled from "@emotion/styled";

interface IStyleProps {
  width: string;
  height: string;
  border: string;
  borderRadius: string;
  padding: string;
  color: string;
  backgroundColor: string;
  fontSize: string;
  textAlign: string;
}

export const Input = styled.input<IStyleProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.textAlign};
  outline: none;

  ::placeholder {
    color: #a9a9a9;
    font-size: ${(props) => props.fontSize};
  }
`;
