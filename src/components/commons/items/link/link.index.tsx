import Link from "next/link";
import {LinkWrapper} from "./link.styles";

interface ILinkItemProps {
  path: string;
  name: string;
  border?: string;
  padding?: string;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontFamily?: string;
}

export default function LinkItem(props: ILinkItemProps) {
  return (
    <LinkWrapper
      border={props.border ?? "none"}
      padding={props.padding ?? "none"}
      color={props.color ?? "#000"}
      backgroundColor={props.backgroundColor ?? "transparent"}
      fontSize={props.fontSize ?? "16px"}
      fontFamily={props.fontFamily ?? "NanumRegular"}
    >
      <Link href={props.path}>
        <a>{props.name}</a>
      </Link>
    </LinkWrapper>
  );
}
