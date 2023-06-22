import {Modal} from "antd";
import {InputMaybe, Scalars} from "../../../../commons/types/generated/types";
import {useMutationUpdateBoardComment} from "../useMutations/useMutations";
import {Dispatch, SetStateAction} from "react";

interface IUpdateCommentSubmitProps {
  boardCommentId: string | undefined;
  setIsCommentEdit: Dispatch<SetStateAction<boolean>> | undefined;
}

interface IUpdateFieldValues {
  password?: InputMaybe<Scalars["String"]>;
  contents?: InputMaybe<Scalars["String"]>;
  rating?: InputMaybe<Scalars["Float"]>;
}

export const useUpdateBoardComment = () => {
  const [updateBoardComment] = useMutationUpdateBoardComment();

  const updateCommentSubmit =
    (props: IUpdateCommentSubmitProps) => async (data: IUpdateFieldValues) => {
      try {
        await updateBoardComment({
          variables: {
            boardCommentId: String(props.boardCommentId),
            password: data.password,
            updateBoardCommentInput: {
              contents: data.contents,
              rating: 0,
            },
          },
        });
        if (props.setIsCommentEdit) props.setIsCommentEdit(false);
        Modal.success({content: "댓글이 수정되었습니다."});
      } catch (error) {
        Modal.error({
          content: "비밀번호를 잘못 입력하셨습니다. 다시 시도해주세요.",
        });
      }
    };

  return {updateCommentSubmit};
};
