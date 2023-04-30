import {ErrorMessage} from "./validation.styles";

interface IValidationItemProps {
  error: string | undefined;
  height?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  color?: string;
  fontSize?: string;
}

export default function ValidationItem(props: IValidationItemProps) {
  return (
    <ErrorMessage
      height={props.height ?? "auto"}
      marginTop={props.marginTop ?? "none"}
      marginRight={props.marginRight ?? "none"}
      marginBottom={props.marginBottom ?? "none"}
      marginLeft={props.marginLeft ?? "none"}
      fontSize={props.fontSize ?? "12px"}
    >
      {props.error}
    </ErrorMessage>
  );
}
