import {Modal} from "antd";
import {useMutationLoginUser} from "../useMutations/useMutations";
import {useRecoilState} from "recoil";
import {accessTokenState} from "../../../../commons/stores/stores";

export interface ILoginUserData {
  email: string;
  password: string;
}

export const useLoginUser = () => {
  const [loginUser] = useMutationLoginUser();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const loginUserSubmit = async (data: ILoginUserData): Promise<void> => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });

      const accessToken = result.data?.loginUserExample.accessToken;

      if (!accessToken) {
        Modal.error({
          content: "아이디 또는 비밀번호를 잘못 입력하셨습니다. ",
        });
        return;
      }
      setAccessToken(accessToken);

      Modal.success({
        content: "로그인이 완료되었습니다.",
        onOk: () => window.location.reload(),
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({content: "이메일 또는 비밀번호를 잘못 입력하셨습니다."});
    }
  };

  return {loginUserSubmit};
};
