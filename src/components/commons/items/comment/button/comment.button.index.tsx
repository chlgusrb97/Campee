import {MouseEvent} from "react";
import {CommentButton} from "./comment.button.styles";

interface ICommentButtonItemProps {
  name: string;
  id: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function CommentButtonItem(props: ICommentButtonItemProps) {
  return (
    <CommentButton type="button" id={props.id} onClick={props.onClick}>
      {props.name}
    </CommentButton>
  );
}
