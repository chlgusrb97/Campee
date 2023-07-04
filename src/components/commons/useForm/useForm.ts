import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {
  BOARDS_COMMENT_WRITE_SCHEMA,
  BOARDS_REGISTRATION_SCHEMA,
  JOIN_SCHEMA,
  LOGIN_SCHEMA,
  MYPAGE_PROFILE_EDIT_SCHEMA,
  PRODUCTS_COMMENT_ANSWER_SCHEMA,
  PRODUCTS_COMMENT_WRITE_SCHEMA,
  PRODUCTS_REGISTRATION_SCHEMA,
} from "../../../commons/libraries/validations/validations";
import {ICreateUserData} from "../customs/hooks/useCreateUser";
import {ILoginUserData} from "../customs/hooks/useLoginUser";
import {
  ICreateBoardCommentInput,
  ICreateBoardInput,
  ICreateUseditemInput,
  ICreateUseditemQuestionAnswerInput,
  ICreateUseditemQuestionInput,
  IUpdateUserInput,
} from "../../../commons/types/generated/types";

export const useFormJoin = () => {
  const result = useForm<ICreateUserData>({
    resolver: yupResolver(JOIN_SCHEMA),
    mode: "onChange",
  });

  return result;
};

export const useFormLogin = () => {
  const result = useForm<ILoginUserData>({
    resolver: yupResolver(LOGIN_SCHEMA),
    mode: "onChange",
  });

  return result;
};

export const useFormProductsRegistration = () => {
  const result = useForm<ICreateUseditemInput>({
    resolver: yupResolver(PRODUCTS_REGISTRATION_SCHEMA),
    mode: "onChange",
  });

  return result;
};

export const useFormProductsCommentWrite = () => {
  const result = useForm<ICreateUseditemQuestionInput>({
    resolver: yupResolver(PRODUCTS_COMMENT_WRITE_SCHEMA),
    mode: "onChange",
  });

  return result;
};

export const useFormProductsCommentAnswer = () => {
  const result = useForm<ICreateUseditemQuestionAnswerInput>({
    resolver: yupResolver(PRODUCTS_COMMENT_ANSWER_SCHEMA),
    mode: "onChange",
  });
  return result;
};

export const useFormBoardsRegistration = () => {
  const result = useForm<ICreateBoardInput>({
    resolver: yupResolver(BOARDS_REGISTRATION_SCHEMA),
    mode: "onChange",
  });

  return result;
};

export const useFormBoardsCommentWrite = () => {
  const result = useForm<ICreateBoardCommentInput>({
    resolver: yupResolver(BOARDS_COMMENT_WRITE_SCHEMA),
    mode: "onSubmit",
  });

  return result;
};

export const useFormMypageProfileEdit = () => {
  const result = useForm<IUpdateUserInput>({
    resolver: yupResolver(MYPAGE_PROFILE_EDIT_SCHEMA),
    mode: "onChange",
  });

  return result;
};
