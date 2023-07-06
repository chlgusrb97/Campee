import {useMutation} from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationCreateBoardCommentArgs,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationCreatePointTransactionOfLoadingArgs,
  IMutationCreateUseditemArgs,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationCreateUseditemQuestionArgs,
  IMutationCreateUserArgs,
  IMutationDeleteBoardArgs,
  IMutationDeleteBoardCommentArgs,
  IMutationDeleteUseditemArgs,
  IMutationDeleteUseditemQuestionAnswerArgs,
  IMutationDeleteUseditemQuestionArgs,
  IMutationLikeBoardArgs,
  IMutationLoginUserArgs,
  IMutationResetUserPasswordArgs,
  IMutationToggleUseditemPickArgs,
  IMutationUpdateBoardArgs,
  IMutationUpdateBoardCommentArgs,
  IMutationUpdateUseditemArgs,
  IMutationUpdateUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionArgs,
  IMutationUpdateUserArgs,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import {
  BUYING_PRODUCTS,
  CREATE_BOARD,
  CREATE_BOARD_COMMENT,
  CREATE_POINT,
  CREATE_USED_ITEM,
  CREATE_USED_ITEM_ANSWER,
  CREATE_USED_ITEM_QUESTION,
  CREATE_USER,
  DELETE_BOARD,
  DELETE_BOARD_COMMENT,
  DELETE_USED_ITEM,
  DELETE_USED_ITEM_ANSWER,
  DELETE_USED_ITEM_QUESTION,
  LIKE_BOARD,
  LOGIN_USER,
  LOGOUT_USER,
  RESET_USER_PASSWORD,
  UPDATE_BOARD,
  UPDATE_BOARD_COMMENT,
  UPDATE_USED_ITEM,
  UPDATE_USED_ITEM_ANSWER,
  UPDATE_USED_ITEM_QUESTION,
  UPDATE_USER,
  UPLOAD_FILE,
  USED_ITEM_PICK,
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
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  return [loginUser];
};

export const useMutationLogoutUser = () => {
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);

  return [logoutUser];
};

export const useMutationUpdateUser = () => {
  const [updateUser] = useMutation<
    Pick<IMutation, "updateUser">,
    IMutationUpdateUserArgs
  >(UPDATE_USER);

  return [updateUser];
};

export const useMutationResetUserPassword = () => {
  const [resetUserPassword] = useMutation<
    Pick<IMutation, "resetUserPassword">,
    IMutationResetUserPasswordArgs
  >(RESET_USER_PASSWORD);

  return [resetUserPassword];
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

export const useMutationBuyingProducts = () => {
  const [createPointTransactionOfBuyingAndSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(BUYING_PRODUCTS);

  return [createPointTransactionOfBuyingAndSelling];
};

export const useMutationCreateUsedItemQuestion = () => {
  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);

  return [createUseditemQuestion];
};

export const useMutationDeleteUsedItemQuestion = () => {
  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USED_ITEM_QUESTION);

  return [deleteUseditemQuestion];
};

export const useMutationUpdateUsedItemQuestion = () => {
  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION);

  return [updateUseditemQuestion];
};

export const useMutationCreateUsedItemAnswer = () => {
  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USED_ITEM_ANSWER);

  return [createUseditemQuestionAnswer];
};

export const useMutationDeleteUsedItemAnswer = () => {
  const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_USED_ITEM_ANSWER);

  return [deleteUseditemQuestionAnswer];
};

export const useMutationUpdateUsedItemAnswer = () => {
  const [updateUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USED_ITEM_ANSWER);

  return [updateUseditemQuestionAnswer];
};

export const useMutationCreateBoard = () => {
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  return [createBoard];
};

export const useMutationLikeBoard = () => {
  const [likeboard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  return [likeboard];
};

export const useMutationCreateBoardComment = () => {
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  return [createBoardComment];
};

export const useMutationDeleteBoardComment = () => {
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  return [deleteBoardComment];
};

export const useMutationUpdateBoardComment = () => {
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  return [updateBoardComment];
};

export const useMutationDeleteBoard = () => {
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  return [deleteBoard];
};

export const useMutationUpdateBoard = () => {
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  return [updateBoard];
};

export const useMutationUsedItemPick = () => {
  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(USED_ITEM_PICK);

  return [toggleUseditemPick];
};
