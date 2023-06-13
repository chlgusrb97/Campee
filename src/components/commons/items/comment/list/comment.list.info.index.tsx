import {getDate} from "../../../../../commons/libraries/utils";
import {
  IBoardComment,
  IQuery,
} from "../../../../../commons/types/generated/types";
import CommentButtonItem from "../button/comment.button.index";
import * as S from "./comment.list.styles";

interface ICommentListInfoUIProps {
  CommentList: IBoardComment;
}

export default function CommentListInfoUI(props: ICommentListInfoUIProps) {
  return (
    <S.CommentListWrapper>
      <S.UserIconBox>
        <S.UserIcon />
      </S.UserIconBox>
      <S.CommentInfo>
        <h1>{props.CommentList.writer}</h1>
        <p>{props.CommentList.contents}</p>
        <ul>
          <li>
            <S.CreationDate>
              {getDate(props.CommentList.createdAt)}
            </S.CreationDate>
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
