import styled from "@emotion/styled";

interface IStyleProps {
  fontSize: string;
  fontFamily: string;
}

export const Label = styled.label<IStyleProps>`
  color: #000;
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
`;
