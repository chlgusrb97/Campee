import {CommentButton} from "./comment.button.styles";

interface ICommentButtonItemProps {
  name: string;
}

export default function CommentButtonItem(props: ICommentButtonItemProps) {
  return <CommentButton>{props.name}</CommentButton>;
}
