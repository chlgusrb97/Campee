import {css} from "@emotion/react";
import styled from "@emotion/styled";

interface IStyleProps {
  width: string;
  height: string;
  border: string;
  borderRadius: string;
  padding: string;
  margin: string;
  color: string;
  backgroundColor: string;
  hoverColor?: string;
  hoverBackgroundColor?: string;
  fontSize: string;
  fontFamily: string;
  cursor: string;
  transition?: string;
}

export const Button = styled.button<IStyleProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  cursor: ${(props) => props.cursor};
  transition: ${(props) => props.transition};

  ${(props) =>
    (props.hoverColor || props.hoverBackgroundColor) &&
    css`
      &:hover {
        color: ${props.hoverColor};
        background-color: ${props.hoverBackgroundColor};
      }
    `}
`;
