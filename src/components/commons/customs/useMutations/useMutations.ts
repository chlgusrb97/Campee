import {useMutation} from "@apollo/client";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IMutationCreateUseditemArgs,
  IMutationCreateUserArgs,
  IMutationDeleteUseditemArgs,
  IMutationLoginUserArgs,
  IMutationLoginUserExampleArgs,
  IMutationUpdateUseditemArgs,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import {
  CREATE_POINT,
  CREATE_USED_ITEM,
  CREATE_USER,
  DELETE_USED_ITEM,
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_USED_ITEM,
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

export const useMutationUpdateUsedItem = () => {
  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  return [updateUseditem];
};

export const useMutationDeleteUsedItem = () => {
  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  return [deleteUseditem];
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
