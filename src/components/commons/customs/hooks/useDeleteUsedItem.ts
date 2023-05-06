import {useRouter} from "next/router";
import {useMutationDeleteUsedItem} from "../useMutations/useMutations";
import {Modal} from "antd";
import {routes} from "../../../../commons/routes/routes";
import {PRODUCTS_LIST_PATH} from "../../../../commons/paths/paths";

export const useDeleteUsedItem = () => {
  const router = useRouter();
  const [deleteUseditem] = useMutationDeleteUsedItem();
  const {pageRouting} = routes();

  const onClickDeleteUsedItem = async (): Promise<void> => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: String(router.query.productsId),
        },
      });
      Modal.success({
        content: "상품이 삭제되었습니다.",
        onOk: () => pageRouting(PRODUCTS_LIST_PATH),
      });
    } catch (error) {
      Modal.error({content: "상품 삭제 권한이 존재하지 않습니다."});
    }
  };

  return {onClickDeleteUsedItem};
};
