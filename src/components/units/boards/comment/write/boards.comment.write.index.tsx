import CommentInputItem from "../../../../commons/items/comment/input/comment.input.index";
import CommentWrite from "../../../../commons/items/comment/write/comment.write.index";
import * as S from "./boards.comment.write.styles";

export default function BoardsCommentWriteUI() {
  return (
    <S.CommentWriteWrapper>
      <S.UserIconBox>
        <S.UserIcon />
      </S.UserIconBox>
      <S.TextBox>
        <ul>
          <li>
            <CommentInputItem placeHolder="이름" />
          </li>
          <li>
            <CommentInputItem placeHolder="비밀번호" type="password" />
          </li>
        </ul>
        <CommentWrite placeHolder="댓글을 입력해주세요." />
      </S.TextBox>
    </S.CommentWriteWrapper>
  );
}
