import {Modal} from "antd";
import {
  ICreateBoardCommentInput,
  IUpdateBoardCommentInput,
  InputMaybe,
  Scalars,
} from "../../../../commons/types/generated/types";
import {useMutationUpdateBoardComment} from "../useMutations/useMutations";
import {Dispatch, SetStateAction} from "react";

interface IUpdateFieldValues {
  password?: InputMaybe<Scalars["String"]>;
  contents?: InputMaybe<Scalars["String"]>;
  rating?: InputMaybe<Scalars["Float"]>;
}

export const useUpdateBoardComment = () => {
  const [updateBoardComment] = useMutationUpdateBoardComment();

  const updateCommentSubmit =
    (
      boardCommentId: string,
      setIsCommentEdit: Dispatch<SetStateAction<boolean>>
    ) =>
    async (data: IUpdateFieldValues) => {
      try {
        await updateBoardComment({
          variables: {
            boardCommentId,
            password: data.password,
            updateBoardCommentInput: {
              contents: data.contents,
              rating: 0,
            },
          },
        });
        Modal.success({content: "댓글이 수정되었습니다."});
        setIsCommentEdit(false);
      } catch (error) {
        Modal.error({
          content: "비밀번호를 잘못 입력하셨습니다. 다시 시도해주세요.",
        });
      }
    };

  return {updateCommentSubmit};
};
