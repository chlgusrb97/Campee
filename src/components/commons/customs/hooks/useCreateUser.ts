import {Modal} from "antd";
import {useMutationCreateUser} from "../useMutations/useMutations";
import {useRouter} from "next/router";
import {LOGIN_PATH} from "../../../../commons/paths/paths";

export interface ICreateUserData {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
}

export const useCreateUser = () => {
  const router = useRouter();
  const [createUser] = useMutationCreateUser();

  const createUserSubmit = async (data: ICreateUserData): Promise<void> => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });
      Modal.success({
        content: "회원가입이 완료되었습니다.",
        onOk: () => router.push(LOGIN_PATH),
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({content: error.message});
    }
  };

  return {createUserSubmit};
};
