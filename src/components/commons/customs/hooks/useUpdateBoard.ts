import {useRouter} from "next/router";
import {
  useMutationUpdateBoard,
  useMutationUploadFile,
} from "../useMutations/useMutations";
import {
  IBoardAddressInput,
  InputMaybe,
  Scalars,
} from "../../../../commons/types/generated/types";
import {Modal, UploadFile} from "antd";
import {routes} from "../../../../commons/routes/routes";
import {UploadFileStatus} from "antd/es/upload/interface";
import {BOARDS_DETAIL_PATH} from "../../../../commons/paths/paths";

interface IUpdateBoardData {
  password?: InputMaybe<Scalars["String"]>;
  boardAddress?: InputMaybe<IBoardAddressInput>;
  contents?: InputMaybe<Scalars["String"]>;
  images?: InputMaybe<Array<Scalars["String"]>>;
  title?: InputMaybe<Scalars["String"]>;
  youtubeUrl?: InputMaybe<Scalars["String"]>;
}

export const useUpdateBoard = () => {
  const router = useRouter();

  const [updateBoard] = useMutationUpdateBoard();
  const [uploadFile] = useMutationUploadFile();
  const {pageRouting} = routes();

  const updateBoardSubmit =
    (fileList: UploadFile<any>[]) =>
    async (data: IUpdateBoardData): Promise<void> => {
      for (let i = 0; i < fileList.length; i++) {
        if (fileList[i].originFileObj) {
          const file = fileList[i].originFileObj;
          const NewFileResult = await uploadFile({variables: {file}});

          fileList[i] = {
            uid: String(i),
            name: String(NewFileResult.data?.uploadFile.url),
            status: "done" as UploadFileStatus,
            url: NewFileResult.data?.uploadFile.url,
          };
        }
      }

      try {
        const images = fileList
          .map((file) => file.name)
          .filter((url): url is string => Boolean(url));

        const result = await updateBoard({
          variables: {
            boardId: String(router.query.boardsId),
            password: data.password,
            updateBoardInput: {
              title: data.title,
              contents: data.contents,
              images,
              youtubeUrl: data.youtubeUrl,
              boardAddress: {
                zipcode: data.boardAddress?.zipcode,
                address: data.boardAddress?.address,
                addressDetail: data.boardAddress?.addressDetail,
              },
            },
          },
        });
        Modal.success({
          content: "상품이 수정되었습니다.",
          onOk: () =>
            pageRouting(
              `${BOARDS_DETAIL_PATH}/${result.data?.updateBoard._id}`
            ),
        });
      } catch (error) {
        Modal.error({
          content: "비밀번호가 일치하지 않습니다. 다시 입력해주세요.",
        });
      }
    };

  return {updateBoardSubmit};
};
