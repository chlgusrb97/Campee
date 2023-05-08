import {Modal, UploadFile} from "antd";
import {
  ICreateUseditemInput,
  IUpdateUseditemInput,
} from "../../../../commons/types/generated/types";
import {
  useMutationUpdateUsedItem,
  useMutationUploadFile,
} from "../useMutations/useMutations";
import {routes} from "../../../../commons/routes/routes";
import {PRODUCTS_DETAIL_PATH} from "../../../../commons/paths/paths";
import {useRouter} from "next/router";
import {USED_ITEM} from "../../queries/queries";

export const useUpdateUsedItem = () => {
  const router = useRouter();

  const [updateUseditem] = useMutationUpdateUsedItem();
  const [uploadFile] = useMutationUploadFile();
  const {pageRouting} = routes();

  const createUpdateItemSubmit =
    (fileList: UploadFile<any>[]) =>
    async (data: IUpdateUseditemInput): Promise<void> => {
      const tags = data.tags?.toString().split(" ").filter(Boolean);

      try {
        const result = await updateUseditem({
          variables: {
            useditemId: String(router.query.productsId),
            updateUseditemInput: {
              name: data.name,
              remarks: data.remarks,
              contents: data.contents,
              price: data.price,
              tags,
              // images,
              useditemAddress: {
                zipcode: data.useditemAddress?.zipcode,
                address: data.useditemAddress?.address,
                addressDetail: data.useditemAddress?.addressDetail,
              },
            },
          },
          refetchQueries: [
            {
              query: USED_ITEM,
              variables: {useditemId: router.query.productsId},
            },
          ],
        });
        console.log(result, "상품 수정!");
        Modal.success({
          content: "상품이 수정되었습니다.",
          // onOk: () =>
          //   pageRouting(
          //     `${PRODUCTS_DETAIL_PATH}/${result.data?.updateUseditem._id}`
          //   ),
        });
      } catch (error) {
        Modal.error({content: "상품 수정에 실패했습니다."});
      }
    };

  return {createUpdateItemSubmit};
};
