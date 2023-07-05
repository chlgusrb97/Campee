import {Modal} from "antd";
import {useMutationCreateUser} from "../useMutations/useMutations";

export interface ICreateUserData {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
}

interface ICreateUserSubmitProps {
  onClickAuthModalCancel: (number: number) => void;
}

export const useCreateUser = () => {
  const [createUser] = useMutationCreateUser();

  const createUserSubmit =
    (props: ICreateUserSubmitProps) =>
    async (data: ICreateUserData): Promise<void> => {
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
          onOk: () => props.onClickAuthModalCancel(0),
        });
      } catch (error) {
        if (error instanceof Error) Modal.error({content: error.message});
      }
    };

  return {createUserSubmit};
};
