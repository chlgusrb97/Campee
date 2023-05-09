import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {
  JOIN_SCHEMA,
  LOGIN_SCHEMA,
  PRODUCTS_COMMENT_WRITE_SCHEMA,
  PRODUCTS_REGISTRATION_SCHEMA,
} from "../../../commons/libraries/validations/validations";
import {ICreateUserData} from "../customs/hooks/useCreateUser";
import {ILoginUserData} from "../customs/hooks/useLoginUser";
import {
  ICreateUseditemInput,
  ICreateUseditemQuestionInput,
  IUseditem,
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
