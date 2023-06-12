import CommentListUI from "../../../commons/items/comment/list/comment.list.index";
import TitleItem from "../../../commons/items/title/title.index";
import {CommentWrapper} from "./boards.comment.styles";
import BoardsCommentWriteUI from "./write/boards.comment.write.index";

export default function BoardsCommentUI() {
  return (
    <CommentWrapper>
      <span>
        <TitleItem title="댓글" fontSize="20px" />
      </span>
      <BoardsCommentWriteUI />
      <CommentListUI />
    </CommentWrapper>
  );
}
