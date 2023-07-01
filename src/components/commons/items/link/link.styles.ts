import {css} from "@emotion/react";
import styled from "@emotion/styled";

interface IStyleProps {
  border: string;
  padding: string;
  color: string;
  backgroundColor: string;
  fontSize: string;
  fontFamily: string;
  hoverColor?: string;
  hoverBackgroundColor?: string;
}

export const HyperLink = styled.a<IStyleProps>`
  display: inline-block;
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  cursor: pointer;

  ${(props) =>
    (props.hoverColor || props.hoverBackgroundColor) &&
    css`
      &:hover {
        color: ${props.hoverColor};
        background-color: ${props.hoverBackgroundColor};
      }
    `}
`;
