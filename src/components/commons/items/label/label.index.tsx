import {Label} from "./label.styles";

interface ILabelItemProps {
  label: string;
  fontSize?: string;
  fontFamily?: string;
}

export default function LabelItem(props: ILabelItemProps) {
  return (
    <Label
      fontSize={props.fontSize ?? "18px"}
      fontFamily={props.fontFamily ?? "NanumBold"}
    >
      {props.label}
    </Label>
  );
}
