import {Modal} from "antd";
import {useMutationLogoutUser} from "../useMutations/useMutations";

export const useLogoutUser = () => {
  const [logoutUser] = useMutationLogoutUser();

  const logoutUserSubmit = async (): Promise<void> => {
    await logoutUser();
    Modal.success({
      content: "로그아웃이 완료되었습니다.",
      onOk: () => window.location.reload(),
    });
  };

  return {logoutUserSubmit};
};
