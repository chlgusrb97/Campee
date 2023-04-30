import {
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";
import {WebEditor} from "./webEditor.styles";
import {IData} from "../../useForm/useForm";

interface IWebEditorItemProps {
  placeHolder?: string;
  register: UseFormRegister<IData>;
  setValue: UseFormSetValue<IData>;
  trigger: UseFormTrigger<IData>;
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
