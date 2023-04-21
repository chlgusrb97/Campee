import styled from "@emotion/styled";

interface IStyleProps {
  color: string;
  fontSize: string;
  fontFamily: string;
}

export const Title = styled.h2<IStyleProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
`;
