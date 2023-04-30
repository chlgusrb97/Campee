import {NewModal} from "./modal.styles";

interface IModalItemProps {
  title: string;
  fontFamily?: string;
  contents: unknown;
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

export default function ModalItem(props: IModalItemProps) {
  return (
    <NewModal
      title={props.title}
      fontFamily={props.fontFamily ?? "NanumBold"}
      open={props.isModalOpen}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
    >
      {props.contents}
    </NewModal>
  );
}
