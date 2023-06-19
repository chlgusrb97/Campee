import {Title} from "./title.styles";

interface ITitleItemProps {
  title: string;
  color?: string;
  fontSize?: string;
  fontFamily?: string;
}

export default function TitleItem(props: ITitleItemProps) {
  return (
    <Title
      color={props.color ?? "#000"}
      fontSize={props.fontSize ?? "24px"}
      fontFamily={props.fontFamily ?? "NanumBold"}
    >
      {props.title}
    </Title>
  );
}
