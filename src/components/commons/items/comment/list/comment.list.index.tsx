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
        <div>
          <S.CreationDate>2023. 6. 3</S.CreationDate>
          <S.CommentAnwser>답글 달기</S.CommentAnwser>
        </div>
      </S.CommentInfo>
    </S.CommentListWrapper>
  );
}
