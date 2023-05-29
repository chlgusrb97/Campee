import TitleItem from "../title/title.index";
import * as S from "./comment.styles";

export default function CommentItem() {
  return (
    <S.CommentWrapper>
      <span>
        <TitleItem title="댓글" fontSize="20px" />
      </span>
    </S.CommentWrapper>
  );
}
