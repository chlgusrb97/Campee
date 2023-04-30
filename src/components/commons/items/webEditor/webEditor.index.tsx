import {
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";
import {WebEditor} from "./webEditor.styles";
import {ICreateUseditemInput} from "../../../../commons/types/generated/types";

interface IWebEditorItemProps {
  placeHolder?: string;
  register: UseFormRegister<ICreateUseditemInput>;
  setValue: UseFormSetValue<ICreateUseditemInput>;
  trigger: UseFormTrigger<ICreateUseditemInput>;
}

export default function WebEditorItem(props: IWebEditorItemProps) {
  const onChageWebEditorItem = (value: string) => {
    console.log(value);
    props.setValue("contents", value === "<p><br></p>" ? "" : value);
    void props.trigger("contents");
  };

  return (
    <WebEditor
      placeholder={props.placeHolder ?? ""}
      onChange={onChageWebEditorItem}
    />
  );
}
