import {Button} from "./button.styles";

interface IButtonItemProps {
  title: string;
  width?: string;
  height?: string;
  border?: string;
  padding?: string;
  color: string;
  backgroundColor: string;
  fontSize: string;
  fontFamilly?: string;
}

export default function ButtonItem(props: IButtonItemProps) {
  return (
    <Button
      title={props.title}
      width={props.width ?? "auto"}
      height={props.height ?? "auto"}
      border={props.border ?? "0px"}
      padding={props.padding ?? "0px"}
      color={props.color}
      backgroundColor={props.backgroundColor}
      fontSize={props.fontSize}
      fontFamily={props.fontFamilly ?? "NanumRegular"}
    >
      {props.title}
    </Button>
  );
}
