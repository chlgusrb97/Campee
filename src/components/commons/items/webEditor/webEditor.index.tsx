import {WebEditor} from "./webEditor.styles";

interface IWebEditorItemProps {
  placeHolder?: string;
}

export default function WebEditorItem(props: IWebEditorItemProps) {
  return <WebEditor placeholder={props.placeHolder ?? ""} />;
}
