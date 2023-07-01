import {Modal, UploadFile} from "antd";
import {ICreateBoardInput} from "../../../../commons/types/generated/types";
import {
  useMutationCreateBoard,
  useMutationUploadFile,
} from "../useMutations/useMutations";
import {useState} from "react";
import {routes} from "../../../../commons/routes/routes";
import {BOARDS_DETAIL_PATH} from "../../../../commons/paths/paths";

export const useCreateBoard = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const [createBoard] = useMutationCreateBoard();
  const [uploadFile] = useMutationUploadFile();
  const {pageRouting} = routes();

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
      Modal.success({
        content: "상품이 등록되었습니다.",
        onOk: () =>
          pageRouting(`${BOARDS_DETAIL_PATH}/${result.data?.createBoard._id}`),
      });
    } catch (error) {
      Modal.error({content: "게시글 등록에 실패했습니다."});
    }
  };

  return {createBoardSubmit, fileList, setFileList};
};
