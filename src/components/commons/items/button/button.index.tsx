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
  cursor?: string;
  disabled?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function ButtonItem(props: IButtonItemProps) {
  return (
    <Button
      title={props.title ?? ""}
      width={props.width ?? "auto"}
      height={props.height ?? "auto"}
      border={props.border ?? "none"}
      padding={props.padding ?? "none"}
      color={props.color}
      backgroundColor={props.backgroundColor}
      fontSize={props.fontSize}
      fontFamily={props.fontFamilly ?? "NanumRegular"}
      cursor={props.cursor ?? "pointer"}
      disabled={props.disabled ?? false}
      type={props.type ?? "submit"}
      onClick={props.onClick}
    >
      {props.title}
    </Button>
  );
}
