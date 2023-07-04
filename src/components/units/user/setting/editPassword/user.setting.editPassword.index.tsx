import {useResetUserPassword} from "../../../../commons/customs/hooks/useResetUserPassword";
import ValidationItem from "../../../../commons/items/validation/validation.index";
import {useFormMypagePasswordEdit} from "../../../../commons/useForm/useForm";
import * as S from "./user.setting.editPassword.styles";

export default function UserEditPasswordUI() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useFormMypagePasswordEdit();
  const {resetUserPasswordSubmit} = useResetUserPassword();

  return (
    <S.Wrapper onSubmit={handleSubmit(resetUserPasswordSubmit(setValue))}>
      <S.Title>비밀번호 변경</S.Title>
      <S.PasswordList>
        <li>
          <S.NewPassword>
            <h3>새 비밀번호</h3>
            <S.Text>영문, 숫자를 포함한 8~16자리를 입력해주세요.</S.Text>
            <S.NewPasswordInput type="password" {...register("password")} />
            <ValidationItem
              error={errors.password?.message}
              marginTop="8px"
              marginLeft="16px"
            />
          </S.NewPassword>
        </li>
        <li>
          <S.NewPassword>
            <h3>새 비밀번호 확인</h3>
            <S.NewPasswordInput
              type="password"
              {...register("passwordCheck")}
            />
            <ValidationItem
              error={errors.passwordCheck?.message}
              marginTop="8px"
              marginLeft="16px"
            />
          </S.NewPassword>
        </li>
      </S.PasswordList>
      <S.NewPasswordSubmitButton>비밀번호 변경</S.NewPasswordSubmitButton>
    </S.Wrapper>
  );
}
