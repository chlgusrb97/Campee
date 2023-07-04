import {Modal} from "antd";
import {useMutationResetUserPassword} from "../useMutations/useMutations";
import {UseFormSetValue} from "react-hook-form";

export interface resetUserPasswordSubmitData {
  password: string;
  passwordCheck: string;
}

export const useResetUserPassword = () => {
  const [resetUserPassword] = useMutationResetUserPassword();

  const resetUserPasswordSubmit =
    (setValue: UseFormSetValue<resetUserPasswordSubmitData>) =>
    async (data: resetUserPasswordSubmitData) => {
      try {
        await resetUserPassword({
          variables: {
            password: data.password,
          },
        });
        setValue("password", "");
        setValue("passwordCheck", "");
        Modal.success({content: "비밀번호가 수정되었습니다."});
      } catch (error) {
        Modal.error({
          content: "비밀번호 수정에 실패하였습니다. 다시 시도해주세요.",
        });
      }
    };

  return {resetUserPasswordSubmit};
};
