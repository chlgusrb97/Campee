import {UseFormSetValue, UseFormTrigger} from "react-hook-form";
import {WebEditor} from "./webEditor.styles";
import {IQuery} from "../../../../commons/types/generated/types";
import {useState} from "react";

interface IWebEditorItemProps {
  placeHolder?: string;
  setValue: UseFormSetValue<any>;
  trigger: UseFormTrigger<any>;
  usedItemData?: Pick<IQuery, "fetchUseditem"> | undefined;
}

export default function WebEditorItem(props: IWebEditorItemProps) {
  const [contents, setContents] = useState("");

  const onChageWebEditorItem = (value: string) => {
    props.setValue("contents", value === "<p><br></p>" ? "" : value);
    void props.trigger("contents");
    setContents(value);
  };

  return (
    <WebEditor
      placeholder={props.placeHolder ?? ""}
      onChange={onChageWebEditorItem}
      value={contents ? contents : props.usedItemData?.fetchUseditem.contents}
    />
  );
}
