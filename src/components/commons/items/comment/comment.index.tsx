import TitleItem from "../title/title.index";
import * as S from "./comment.styles";
import CommentRegistrationUI from "./registration/comment.registration.index";

export default function CommentItem() {
  return (
    <S.CommentWrapper>
      <span>
        <TitleItem title="댓글" fontSize="20px" />
      </span>
      <CommentRegistrationUI />
    </S.CommentWrapper>
  );
}
