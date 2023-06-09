import {Modal} from "antd";
import {ICreateBoardInput} from "../../../../commons/types/generated/types";
import {useMutationCreateBoard} from "../useMutations/useMutations";

export const useCreateBoard = () => {
  const [createBoard] = useMutationCreateBoard();

  const createBoardSubmit = async (data: ICreateBoardInput) => {
    try {
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
            images: data.images,
          },
        },
      });
      console.log(result, "게시글 등록!");
    } catch (error) {
      Modal.error({content: "게시글 등록에 실패했습니다."});
    }
  };

  return {createBoardSubmit};
};
