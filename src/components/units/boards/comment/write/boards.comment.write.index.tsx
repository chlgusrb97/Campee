import CommentInputItem from "../../../../commons/items/comment/input/comment.input.index";
import CommentWrite from "../../../../commons/items/comment/write/comment.write.index";
import {useFormBoardsCommentWrite} from "../../../../commons/useForm/useForm";
import * as S from "./boards.comment.write.styles";
import {useCreateBoardComment} from "../../../../commons/customs/hooks/useCreateBoardComment";
import {IBoardComment} from "../../../../../commons/types/generated/types";
import {Dispatch, SetStateAction} from "react";
import {useUpdateBoardComment} from "../../../../commons/customs/hooks/useUpdateBoardComment";

interface IBoardsCommentWriteUIProps {
  isCommentEdit?: boolean;
  setIsCommentEdit?: Dispatch<SetStateAction<boolean>>;
  CommentList?: IBoardComment;
}

export default function BoardsCommentWriteUI(
  props: IBoardsCommentWriteUIProps
) {
  const {register, setValue, handleSubmit} = useFormBoardsCommentWrite();
  const {createCommentSubmit} = useCreateBoardComment();
  const {updateCommentSubmit} = useUpdateBoardComment();

  return (
    <S.CommentWriteWrapper
      onSubmit={handleSubmit(
        props.isCommentEdit
          ? updateCommentSubmit({
              boardCommentId: props.CommentList?._id,
              setIsCommentEdit: props.setIsCommentEdit,
            })
          : createCommentSubmit(setValue)
      )}
    >
      <S.UserIconBox>
        <S.UserIcon />
      </S.UserIconBox>
      <S.TextBox>
        <ul>
          <li>
            <CommentInputItem
              defaultValue={
                props.isCommentEdit ? String(props.CommentList?.writer) : ""
              }
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
          defaultValue={props.CommentList?.contents ?? ""}
          placeHolder="댓글을 입력해주세요."
          isCommentEdit={props.isCommentEdit ?? false}
          register={register("contents")}
        />
      </S.TextBox>
    </S.CommentWriteWrapper>
  );
}
