import {Button} from "./button.styles";

interface IButtonItemProps {
  title: string;
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  color?: string;
  backgroundColor?: string;
  hoverColor?: string;
  hoverBackgroundColor?: string;
  fontSize?: string;
  fontFamilly?: string;
  cursor?: string;
  transition?: string;
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
      border={props.border ?? "0px"}
      borderRadius={props.borderRadius ?? "0px"}
      padding={props.padding ?? "0px"}
      margin={props.margin ?? "0px"}
      color={props.color ?? "#000"}
      backgroundColor={props.backgroundColor ?? "#fff"}
      hoverColor={props.hoverColor}
      hoverBackgroundColor={props.hoverBackgroundColor}
      fontSize={props.fontSize ?? "14px"}
      fontFamily={props.fontFamilly ?? "NanumRegular"}
      cursor={props.cursor ?? "pointer"}
      transition={props.transition}
      disabled={props.disabled ?? false}
      type={props.type ?? "submit"}
      onClick={props.onClick}
    >
      {props.title}
    </Button>
  );
}
