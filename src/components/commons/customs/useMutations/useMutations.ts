import {useMutation} from "@apollo/client";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IMutationCreateUseditemArgs,
  IMutationCreateUserArgs,
  IMutationLoginUserArgs,
  IMutationLoginUserExampleArgs,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import {
  CREATE_POINT,
  CREATE_USED_ITEM,
  CREATE_USER,
  LOGIN_USER,
  LOGOUT_USER,
  UPLOAD_FILE,
} from "../../mutations/mutations";

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

export const useMutationLogoutUser = () => {
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);

  return [logoutUser];
};

export const useMutationCreateUsedItem = () => {
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  return [createUseditem];
};

export const useMutationUploadFile = () => {
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  return [uploadFile];
};

export const useMutationCreatePoint = () => {
  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT);

  return [createPointTransactionOfLoading];
};
