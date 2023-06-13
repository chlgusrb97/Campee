import CommentInputItem from "../../../../commons/items/comment/input/comment.input.index";
import CommentWrite from "../../../../commons/items/comment/write/comment.write.index";
import {useFormBoardsCommentAnswer} from "../../../../commons/useForm/useForm";
import * as S from "./boards.comment.write.styles";
import {useCreateBoardComment} from "../../../../commons/customs/hooks/useCreateBoardComment";

export default function BoardsCommentWriteUI() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useFormBoardsCommentAnswer();
  const {createCommentSubmit} = useCreateBoardComment();

  return (
    <S.CommentWriteWrapper
      onSubmit={handleSubmit(createCommentSubmit(setValue))}
    >
      <S.UserIconBox>
        <S.UserIcon />
      </S.UserIconBox>
      <S.TextBox>
        <ul>
          <li>
            <CommentInputItem
              placeHolder="이름"
              register={register("writer")}
            />
          </li>
          <li>
            <CommentInputItem
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
