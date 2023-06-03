import TitleItem from "../title/title.index";
import * as S from "./comment.styles";
import CommentListUI from "./list/comment.list.index";
import CommentRegistrationUI from "./registration/comment.registration.index";

export default function CommentItem() {
  return (
    <S.CommentWrapper>
      <span>
        <TitleItem title="댓글" fontSize="20px" />
      </span>
      <CommentRegistrationUI />
      <CommentListUI />
    </S.CommentWrapper>
  );
}
