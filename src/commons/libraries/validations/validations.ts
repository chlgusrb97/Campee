import * as yup from "yup";

export const JOIN_SCHEMA = yup.object({
  email: yup
    .string()
    .email("이메일 아이디를 @까지 정확하게 입력하세요.")
    .required("이메일을 입력하세요."),
  password: yup
    .string()
    .required("영문+숫자 조합 8~16자리를 입력하세요.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,
      "영문+숫자 조합 8~16자리를 입력하세요."
    ),
  passwordCheck: yup
    .string()
    .required("영문+숫자 조합 8~16자리를 입력하세요.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,
      "영문+숫자 조합 8~16자리를 입력하세요."
    )
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
  name: yup.string().required("이름을 입력하세요."),
});

export const LOGIN_SCHEMA = yup.object({
  email: yup
    .string()
    .email("이메일 아이디를 @까지 정확하게 입력하세요.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .required("영문+숫자 조합 8~16자리를 입력하세요.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,
      "영문+숫자 조합 8~16자리를 입력하세요."
    ),
});

export const PRODUCTS_REGISTRATION_SCHEMA = yup.object({
  name: yup.string().required("상품 이름을 작성해주세요."),
  remarks: yup.string().required("상품 소개을 작성해주세요."),
  contents: yup.string().required("상품 내용을 입력해주세요."),
  price: yup
    .number()
    .required("판매가격을 입력해주세요.")
    .typeError("숫자만 입력 가능합니다."),
});

export const PRODUCTS_COMMENT_WRITE_SCHEMA = yup.object({
  contents: yup.string().required("내용을 입력해주세요."),
});

export const PRODUCTS_COMMENT_ANSWER_SCHEMA = yup.object({
  contents: yup.string().required("내용을 입력해주세요."),
});

export const BOARDS_REGISTRATION_SCHEMA = yup.object({
  writer: yup.string().required("이름을 작성해주세요."),
  password: yup.string().required("비밀번호를 입력해주세요."),
  title: yup.string().required("제목을 입력해주세요."),
  contents: yup.string().required("내용을 입력해주세요."),
});

export const BOARDS_COMMENT_WRITE_SCHEMA = yup.object({
  writer: yup.string().required("이름을 작성해주세요."),
  password: yup.string().required("비밀번호를 입력해주세요."),
  contents: yup.string().required("내용을 입력해주세요."),
});

export const MYPAGE_PROFILE_EDIT_SCHEMA = yup.object({
  name: yup.string().required("이름을 작성해주세요."),
});

export const MYPAGE_PASSWORD_EDIT_SCHEMA = yup.object({
  password: yup
    .string()
    .required("영문+숫자 조합 8~16자리를 입력해주세요.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,
      "영문+숫자 조합 8~16자리를 입력해주세요."
    ),
  passwordCheck: yup
    .string()
    .required("영문+숫자 조합 8~16자리를 입력해주세요.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,
      "영문+숫자 조합 8~16자리를 입력해주세요."
    )
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
});
