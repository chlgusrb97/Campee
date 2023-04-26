import {UseFormRegisterReturn} from "react-hook-form";
import {Input} from "./input.styles";

interface IInputItemProps {
  width?: string;
  height?: string;
  padding?: string;
  backgroundColor?: string;
  fontSize?: string;
  placeHolder?: string;
  type?: string;
  register?: UseFormRegisterReturn;
}

export default function InputItem(props: IInputItemProps) {
  return (
    <Input
      width={props.width ?? "auto"}
      height={props.height ?? "auto"}
      padding={props.padding ?? "0px"}
      backgroundColor={props.backgroundColor ?? "#e9e9e9"}
      fontSize={props.fontSize ?? "14px"}
      placeholder={props.placeHolder ?? ""}
      type={props.type ?? "text"}
      {...props.register}
    />
  );
}
