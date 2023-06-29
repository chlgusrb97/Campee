import {useRouter} from "next/router";
import {useMutationBuyingProducts} from "../useMutations/useMutations";
import {USER_LOGGED_IN} from "../../queries/queries";
import {Modal} from "antd";

export const useBuyingProducts = () => {
  const router = useRouter();
  const [createPointTransactionOfBuyingAndSelling] =
    useMutationBuyingProducts();

  const onClickBuyingProducts = async (): Promise<void> => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: String(router.query.productsId),
        },
        refetchQueries: [
          {
            query: USER_LOGGED_IN,
          },
        ],
      });
      Modal.success({content: "상품이 구매되었습니다."});
    } catch (error) {
      Modal.error({content: "이미 판매된 상품입니다."});
    }
  };

  return {onClickBuyingProducts};
};
