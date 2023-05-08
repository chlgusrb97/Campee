import {UseFormRegisterReturn} from "react-hook-form";
import {Input} from "./input.styles";
import {Maybe} from "yup";

interface IInputItemProps {
  defaultValue?: string | Maybe<number> | Maybe<string[]>;
  width?: string;
  height?: string;
  border?: string;
  padding?: string;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  textAlign?: string;
  placeHolder?: string;
  type?: string;
  register?: UseFormRegisterReturn;
  disabled?: boolean;
}

export default function InputItem(props: IInputItemProps) {
  return (
    <Input
      defaultValue={props.defaultValue ?? ""}
      width={props.width ?? "auto"}
      height={props.height ?? "auto"}
      border={props.border ?? "0px"}
      padding={props.padding ?? "0px"}
      color={props.color ?? "#000"}
      backgroundColor={props.backgroundColor ?? "#e9e9e9"}
      fontSize={props.fontSize ?? "14px"}
      textAlign={props.textAlign ?? "start"}
      placeholder={props.placeHolder ?? ""}
      type={props.type ?? "text"}
      disabled={props.disabled ?? false}
      {...props.register}
    />
  );
}
