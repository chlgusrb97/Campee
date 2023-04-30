import styled from "@emotion/styled";

interface IStyleProps {
  border: string;
  padding: string;
  color: string;
  backgroundColor: string;
  fontSize: string;
  fontFamily: string;
}

export const LinkWrapper = styled.div<IStyleProps>`
  a {
    display: inline-block;
    width: 100%;
    border: ${(props) => props.border};
    padding: ${(props) => props.padding};
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    font-size: ${(props) => props.fontSize};
    font-family: ${(props) => props.fontFamily};
  }
`;
