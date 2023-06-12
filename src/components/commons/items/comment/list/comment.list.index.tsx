import CommentButtonItem from "../button/comment.button.index";
import * as S from "./comment.list.styles";

export default function CommentListUI() {
  return (
    <S.CommentListWrapper>
      <S.UserIconBox>
        <S.UserIcon />
      </S.UserIconBox>
      <S.CommentInfo>
        <h1>홍길동</h1>
        <p>댓글내용</p>
        <ul>
          <li>
            <S.CreationDate>2023. 6. 3</S.CreationDate>
            <S.Dotted />
          </li>
          <li>
            <CommentButtonItem name="답글 달기" />
            <S.Dotted></S.Dotted>
          </li>
          <li>
            <CommentButtonItem name="수정" />
            <S.Dotted></S.Dotted>
          </li>
          <li>
            <CommentButtonItem name="삭제" />
          </li>
        </ul>
      </S.CommentInfo>
    </S.CommentListWrapper>
  );
}
