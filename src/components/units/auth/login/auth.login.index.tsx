import {useLoginUser} from "../../../commons/customs/hooks/useLoginUser";
import InputItem from "../../../commons/items/input/input.index";
import ValidationItem from "../../../commons/items/validation/validation.index";
import {useFormLogin} from "../../../commons/useForm/useForm";
import * as S from "./auth.login.styles";

interface ILoginUIProps {
  onClickAuthModalCancel: (number: number) => void;
}

export default function LoginUI(props: ILoginUIProps) {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useFormLogin();

  const {loginUserSubmit} = useLoginUser();

  return (
    <>
      <S.Background onClick={() => props.onClickAuthModalCancel(0)} />
      <S.Wrapper>
        <S.Contents onSubmit={handleSubmit(loginUserSubmit)}>
          <S.CancelButton onClick={() => props.onClickAuthModalCancel(0)} />
          <S.Logo>CAMPEE</S.Logo>
          <S.InputList>
            <li>
              <InputItem
                width="100%"
                height="40px"
                border="1px solid #ddd"
                borderRadius="4px"
                padding="16px"
                placeHolder="이메일"
                register={register("email")}
              />
              <ValidationItem
                error={errors.email?.message}
                marginTop="8px"
                marginLeft="16px"
              />
            </li>
            <li>
              <InputItem
                type="password"
                width="100%"
                height="40px"
                border="1px solid #ddd"
                borderRadius="4px"
                padding="16px"
                placeHolder="비밀번호"
                register={register("password")}
              />
              <ValidationItem
                error={errors.password?.message}
                marginTop="8px"
                marginLeft="16px"
              />
            </li>
          </S.InputList>
          <S.SubmitButton>로그인</S.SubmitButton>
          <S.Join>
            <p>회원이 아니신가요?</p>
            <button
              type="button"
              onClick={() => props.onClickAuthModalCancel(2)}
            >
              회원가입
            </button>
          </S.Join>
        </S.Contents>
      </S.Wrapper>
    </>
  );
}
