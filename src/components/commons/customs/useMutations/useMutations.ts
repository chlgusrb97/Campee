import {useMutation} from "@apollo/client";
import {
  IMutation,
  IMutationCreateUserArgs,
  IMutationLoginUserArgs,
  IMutationLoginUserExampleArgs,
} from "../../../../commons/types/generated/types";
import {CREATE_USER, LOGIN_USER} from "../../mutations/mutations";

export const useMutationCreateUser = () => {
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  return [createUser];
};

export const useMutationLoginUser = () => {
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
  >(LOGIN_USER);

  return [loginUser];
};
