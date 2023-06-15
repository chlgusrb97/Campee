import {useRouter} from "next/router";
import {useMutationDeleteBoard} from "../useMutations/useMutations";
import {Modal} from "antd";
import {routes} from "../../../../commons/routes/routes";
import {BOARDS_LIST_PATH} from "../../../../commons/paths/paths";

export const useDeleteBoard = () => {
  const router = useRouter();

  const [deleteBoard] = useMutationDeleteBoard();
  const {pageRouting} = routes();

  const onClickDeleteBoard = async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: String(router.query.boardsId),
        },
      });
      Modal.success({
        content: "게시글이 삭제되었습니다.",
        onOk: () => pageRouting(BOARDS_LIST_PATH),
      });
    } catch (error) {
      Modal.error({content: "게시글 삭제에 실패했습니다."});
    }
  };

  return {onClickDeleteBoard};
};
