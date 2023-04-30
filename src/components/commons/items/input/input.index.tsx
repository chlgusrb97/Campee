import {UseFormRegisterReturn} from "react-hook-form";
import {Input} from "./input.styles";

interface IInputItemProps {
  value?: string;
  width?: string;
  height?: string;
  padding?: string;
  backgroundColor?: string;
  fontSize?: string;
  placeHolder?: string;
  type?: string;
  register?: UseFormRegisterReturn;
  disabled?: boolean;
}

export default function InputItem(props: IInputItemProps) {
  return (
    <Input
      value={props.value}
      width={props.width ?? "auto"}
      height={props.height ?? "auto"}
      padding={props.padding ?? "0px"}
      backgroundColor={props.backgroundColor ?? "#e9e9e9"}
      fontSize={props.fontSize ?? "14px"}
      placeholder={props.placeHolder ?? ""}
      type={props.type ?? "text"}
      disabled={props.disabled ?? false}
      {...props.register}
    />
  );
}
