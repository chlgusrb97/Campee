import styled from "@emotion/styled";

interface IStyleProps {
  border: string;
  padding: string;
  color: string;
  backgroundColor: string;
  fontSize: string;
}

export const Button = styled.button<IStyleProps>`
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize};
  cursor: pointer;
`;
