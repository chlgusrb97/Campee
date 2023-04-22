import {Label} from "./label.styles";

interface ILabelItemProps {
  label: string;
  fontSize?: string;
}

export default function LabelItem(props: ILabelItemProps) {
  return <Label fontSize={props.fontSize ?? "24px"}>{props.label}</Label>;
}
