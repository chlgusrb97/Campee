import styled from "@emotion/styled";
import Link from "next/link";

interface IStyleProps {
  color: string;
  fontFamily: string;
}

export const LinkWrapper = styled.span<IStyleProps>`
  a {
    color: ${(props) => props.color};
    font-family: ${(props) => props.fontFamily};
  }
`;
