import {Modal, UploadFile} from "antd";
import {ICreateBoardInput} from "../../../../commons/types/generated/types";
import {
  useMutationCreateBoard,
  useMutationUploadFile,
} from "../useMutations/useMutations";
import {useState} from "react";

export const useCreateBoard = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [createBoard] = useMutationCreateBoard();
  const [uploadFile] = useMutationUploadFile();

  const createBoardSubmit = async (data: ICreateBoardInput): Promise<void> => {
    const files = fileList.map((file) => file.originFileObj);

    try {
      const fileResult = await Promise.all(
        files.map((file) => uploadFile({variables: {file}}))
      );
      const images = fileResult
        .map((file) => file.data?.uploadFile.url)
        .filter((url): url is string => Boolean(url));

      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
            youtubeUrl: data.youtubeUrl,
            boardAddress: {
              zipcode: data.boardAddress?.zipcode,
              address: data.boardAddress?.address,
              addressDetail: data.boardAddress?.addressDetail,
            },
            images,
          },
        },
      });
      console.log(result, "게시글 등록!");
    } catch (error) {
      Modal.error({content: "게시글 등록에 실패했습니다."});
    }
  };

  return {createBoardSubmit, fileList, setFileList};
};
