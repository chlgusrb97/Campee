import {Button} from "./button.styles";

interface IButtonItemProps {
  title: string;
  border: string;
  padding: string;
  color: string;
  backgroundColor: string;
  fontSize: string;
}

export default function ButtonItem(props: IButtonItemProps) {
  return (
    <Button
      title={props.title}
      border={props.border}
      padding={props.padding}
      color={props.color}
      backgroundColor={props.backgroundColor}
      fontSize={props.fontSize}
    >
      {props.title}
    </Button>
  );
}
