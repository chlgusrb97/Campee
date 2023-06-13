import {useRef, useState} from "react";
import CommentInputItem from "../../../../commons/items/comment/input/comment.input.index";
import CommentWrite from "../../../../commons/items/comment/write/comment.write.index";
import {useFormBoardsCommentAnswer} from "../../../../commons/useForm/useForm";
import * as S from "./boards.comment.write.styles";

export default function BoardsCommentWriteUI() {
  const [isFocused, setIsFocused] = useState(false);
  const textRef = useRef<HTMLInputElement | null>(null);

  const {register, handleSubmit} = useFormBoardsCommentAnswer();

  return (
    <S.CommentWriteWrapper>
      <S.UserIconBox>
        <S.UserIcon />
      </S.UserIconBox>
      <S.TextBox>
        <ul>
          <li>
            <CommentInputItem
              isFocused={isFocused}
              textRef={textRef}
              placeHolder="이름"
              register={register("writer")}
            />
          </li>
          <li>
            <CommentInputItem
              isFocused={isFocused}
              textRef={textRef}
              placeHolder="비밀번호"
              type="password"
              register={register("password")}
            />
          </li>
        </ul>
        <CommentWrite
          placeHolder="댓글을 입력해주세요."
          register={register("contents")}
        />
      </S.TextBox>
    </S.CommentWriteWrapper>
  );
}
