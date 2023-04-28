import Link from "next/link";
import {LinkWrapper} from "./link.styles";

interface ILinkItemProps {
  path: string;
  name: string;
  color?: string;
  fontFamily?: string;
}

export default function LinkItem(props: ILinkItemProps) {
  return (
    <LinkWrapper
      color={props.color ?? "#000"}
      fontFamily={props.fontFamily ?? "NanumRegular"}
    >
      <Link href={props.path}>
        <a>{props.name}</a>
      </Link>
    </LinkWrapper>
  );
}
