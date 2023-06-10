import {Modal} from "antd";
import {FETCH_BOARD} from "../../queries/queries";
import {useMutationLikeBoard} from "../useMutations/useMutations";

export const useLikeBoard = () => {
  const [likeBoard] = useMutationLikeBoard();

  const onClickLikeButton = (boardId: string) => async () => {
    try {
      await likeBoard({
        variables: {
          boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId,
            },
          },
        ],
      });
    } catch (error) {
      Modal.error({
        content: "추천이 정상적으로 이뤄지지 않았습니다. 다시 시도해주세요.",
      });
    }
  };

  return {onClickLikeButton};
};
