import {Dispatch, SetStateAction, useState} from "react";
import {useMutationDeleteBoardComment} from "../useMutations/useMutations";
import {Modal} from "antd";
import {useRouter} from "next/router";
import {FETCH_BOARD_COMMENTS} from "../../queries/queries";

export const useDeleteBoardComment = () => {
  const router = useRouter();

  const [boardCommentId, setBoardCommentId] = useState("");
  const [deletePassword, setDeletePassword] = useState("");

  const [deleteBoardComment] = useMutationDeleteBoardComment();

  const handleOkDeleteComment =
    (setIsDeleteModalOpen: Dispatch<SetStateAction<boolean>>) => async () => {
      try {
        await deleteBoardComment({
          variables: {
            boardCommentId,
            password: deletePassword,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: {boardId: router.query.boardsId},
            },
          ],
        });
        Modal.success({content: "댓글이 삭제되었습니다."});
        setIsDeleteModalOpen(false);
      } catch (error) {
        Modal.error({
          content: "비밀번호가 틀렸습니다. 다시 시도해주세요.",
        });
      }
    };

  return {handleOkDeleteComment, setBoardCommentId, setDeletePassword};
};
