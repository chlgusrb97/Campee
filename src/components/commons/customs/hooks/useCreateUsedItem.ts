import {useState} from "react";
import {ICreateUseditemInput} from "../../../../commons/types/generated/types";
import {
  useMutationCreateUsedItem,
  useMutationUploadFile,
} from "../useMutations/useMutations";
import {Modal, UploadFile} from "antd";
import {routes} from "../../../../commons/routes/routes";
import {PRODUCTS_DETAIL_PATH} from "../../../../commons/paths/paths";

export const useCreateUsedItem = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const [createUseditem] = useMutationCreateUsedItem();
  const [uploadFile] = useMutationUploadFile();
  const {pageRouting} = routes();

  const createUsedItemSubmit = async (
    data: ICreateUseditemInput
  ): Promise<void> => {
    const tags = data.tags?.toString().split(" ").filter(Boolean);
    const files = fileList.map((file) => file.originFileObj);

    try {
      const fileResult = await Promise.all(
        files.map((file) => uploadFile({variables: {file}}))
      );
      const images = fileResult
        .map((file) => file.data?.uploadFile.url)
        .filter((url): url is string => Boolean(url));

      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags,
            images,
            useditemAddress: {
              zipcode: data.useditemAddress?.zipcode,
              address: data.useditemAddress?.address,
              addressDetail: data.useditemAddress?.addressDetail,
            },
          },
        },
      });
      Modal.success({
        content: "상품이 등록되었습니다.",
        onOk: () =>
          pageRouting(
            `${PRODUCTS_DETAIL_PATH}/${result.data?.createUseditem._id}`
          ),
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({content: "상품 등록에 실패했습니다."});
    }
  };

  return {createUsedItemSubmit, fileList, setFileList};
};
