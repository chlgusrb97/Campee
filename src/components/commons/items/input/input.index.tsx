import {Input} from "./input.styles";

interface IInputItemProps {
  width?: string;
  height?: string;
  padding?: string;
  fontSize?: string;
  placeHolder?: string;
}

export default function InputItem(props: IInputItemProps) {
  return (
    <Input
      width={props.width ?? "auto"}
      height={props.height ?? "auto"}
      padding={props.padding ?? "0px"}
      fontSize={props.fontSize ?? "14px"}
      placeholder={props.placeHolder ?? ""}
    />
  );
}
