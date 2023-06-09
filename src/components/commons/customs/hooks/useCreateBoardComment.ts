import {useRouter} from "next/router";
import {useMutationCreateBoardComment} from "../useMutations/useMutations";
import {ICreateBoardCommentInput} from "../../../../commons/types/generated/types";
import {Modal} from "antd";
import {UseFormSetValue} from "react-hook-form";
import {FETCH_BOARD_COMMENTS} from "../../queries/queries";

export const useCreateBoardComment = () => {
  const router = useRouter();
  const [createBoardComment] = useMutationCreateBoardComment();

  const createCommentSubmit =
    (setValue: UseFormSetValue<ICreateBoardCommentInput>) =>
    async (data: ICreateBoardCommentInput): Promise<void> => {
      try {
        await createBoardComment({
          variables: {
            boardId: String(router.query.boardsId),
            createBoardCommentInput: {
              writer: data.writer,
              password: data.password,
              contents: data.contents,
              rating: 0,
            },
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: {
                boardId: router.query.boardsId,
              },
            },
          ],
        });
        setValue("writer", "");
        setValue("password", "");
        setValue("contents", "");
      } catch (error) {
        Modal.error({
          content: "댓글 등록에 실패하였습니다. 다시 시도해주세요.",
        });
      }
    };

  return {createCommentSubmit};
};
