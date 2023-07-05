import {useCreateUser} from "../../../commons/customs/hooks/useCreateUser";
import InputItem from "../../../commons/items/input/input.index";
import ValidationItem from "../../../commons/items/validation/validation.index";
import {useFormJoin} from "../../../commons/useForm/useForm";
import * as S from "./auth.join.styles";

interface IJoinUIProps {
  onClickAuthModalCancel: (number: number) => void;
}

export default function JoinUI(props: IJoinUIProps) {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useFormJoin();

  const {createUserSubmit} = useCreateUser();

  return (
    <>
      <S.Background onClick={() => props.onClickAuthModalCancel(0)} />
      <S.Wrapper>
        <S.Contents
          onSubmit={handleSubmit(
            createUserSubmit({
              onClickAuthModalCancel: props.onClickAuthModalCancel,
            })
          )}
        >
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
                placeHolder="이름"
                register={register("name")}
              />
              <ValidationItem
                error={errors.name?.message}
                marginTop="8px"
                marginLeft="16px"
              />
            </li>
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
            <li>
              <InputItem
                type="password"
                width="100%"
                height="40px"
                border="1px solid #ddd"
                borderRadius="4px"
                padding="16px"
                placeHolder="비밀번호 확인"
                register={register("passwordCheck")}
              />
              <ValidationItem
                error={errors.passwordCheck?.message}
                marginTop="8px"
                marginLeft="16px"
              />
            </li>
          </S.InputList>
          <S.SubmitButton>회원가입</S.SubmitButton>
          <S.Join>
            <p>이미 회원이신가요?</p>
            <button
              type="button"
              onClick={() => props.onClickAuthModalCancel(1)}
            >
              로그인
            </button>
          </S.Join>
        </S.Contents>
      </S.Wrapper>
    </>
  );
}
