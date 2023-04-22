import styled from "@emotion/styled";

interface IStyleProps {
  width: string;
  height: string;
  border: string;
  padding: string;
  color: string;
  backgroundColor: string;
  fontSize: string;
  fontFamily: string;
}

export const Button = styled.button<IStyleProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  cursor: pointer;
`;
