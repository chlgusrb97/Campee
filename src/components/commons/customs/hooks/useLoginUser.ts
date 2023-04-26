import {Modal} from "antd";
import {useMutationLoginUser} from "../useMutations/useMutations";
import {useRouter} from "next/router";
import {MAIN_PATH} from "../../../../commons/paths/paths";
import {useRecoilState} from "recoil";
import {accessTokenState} from "../../../../commons/stores/stores";

export interface ILoginUserData {
  email: string;
  password: string;
}

export const useLoginUser = () => {
  const router = useRouter();
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
      console.log(result);

      const accessToken = result.data?.loginUserExample.accessToken;

      if (!accessToken) {
        Modal.error({
          content: "아이디 또는 비밀번호를 잘못 입력하셨습니다. ",
        });
        return;
      }
      setAccessToken(accessToken);

      Modal.success({
        content: "회원가입이 완료되었습니다.",
        onOk: () => router.push(MAIN_PATH),
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({content: error.message});
    }
  };

  return {loginUserSubmit};
};
