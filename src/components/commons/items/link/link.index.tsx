import Link from "next/link";
import {HyperLink} from "./link.styles";

interface ILinkItemProps {
  path: string;
  name: string;
  border?: string;
  padding?: string;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontFamily?: string;
  hoverColor?: string;
  hoverBackgroundColor?: string;
}

export default function LinkItem(props: ILinkItemProps) {
  return (
    <Link href={props.path}>
      <HyperLink
        border={props.border ?? "none"}
        padding={props.padding ?? "none"}
        color={props.color ?? "#000"}
        backgroundColor={props.backgroundColor ?? "transparent"}
        fontSize={props.fontSize ?? "16px"}
        fontFamily={props.fontFamily ?? "NanumRegular"}
        hoverColor={props.hoverColor}
        hoverBackgroundColor={props.hoverBackgroundColor}
      >
        {props.name}
      </HyperLink>
    </Link>
  );
}
