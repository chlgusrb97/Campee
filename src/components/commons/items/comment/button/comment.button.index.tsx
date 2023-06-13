import {CommentButton} from "./comment.button.styles";

interface ICommentButtonItemProps {
  name: string;
}

export default function CommentButtonItem(props: ICommentButtonItemProps) {
  return <CommentButton type="button">{props.name}</CommentButton>;
}
