import {Modal} from "antd";
import {IUpdateUserInput} from "../../../../commons/types/generated/types";
import {useMutationUpdateUser} from "../useMutations/useMutations";

interface IUpdateUserSubmitProps {
  imageUrl: string;
}

export const useUpdateUser = () => {
  const [updateUser] = useMutationUpdateUser();

  const updateUserSubmit =
    (props: IUpdateUserSubmitProps) => async (data: IUpdateUserInput) => {
      try {
        await updateUser({
          variables: {
            updateUserInput: {
              name: data.name,
              picture: props.imageUrl,
            },
          },
        });
        Modal.success({
          content: "프로필이 수정되었습니다.",
        });
      } catch (error) {
        Modal.error({
          content: "프로필 수정에 실패하였습니다. 다시 시도해주세요.",
        });
      }
    };

  return {updateUserSubmit};
};
