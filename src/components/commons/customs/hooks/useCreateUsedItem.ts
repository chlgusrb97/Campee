import {useState} from "react";
import {ICreateUseditemInput} from "../../../../commons/types/generated/types";
import {
  useMutationCreateUsedItem,
  useMutationUploadFile,
} from "../useMutations/useMutations";
import {Modal, UploadFile} from "antd";

export const useCreateUsedItem = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const [createUseditem] = useMutationCreateUsedItem();
  const [uploadFile] = useMutationUploadFile();

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
          },
        },
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) Modal.error({content: error.message});
    }
  };

  return {createUsedItemSubmit, fileList, setFileList};
};
