import {useLoginUser} from "../../../commons/customs/hooks/useLoginUser";
import ButtonItem from "../../../commons/items/button/button.index";
import InputItem from "../../../commons/items/input/input.index";
import LabelItem from "../../../commons/items/label/label.index";
import TitleItem from "../../../commons/items/title/title.index";
import ValidationItem from "../../../commons/items/validation/validation.index";
import {useFormLogin} from "../../../commons/useForm/useForm";
import * as S from "./auth.login.styles";

export default function LoginUI() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useFormLogin();

  const {loginUserSubmit} = useLoginUser();

  return (
    <>
      <S.Wrapper onSubmit={handleSubmit(loginUserSubmit)}>
        <span>
          <TitleItem title="LOGIN" fontFamily="NanumBold" />
        </span>
        <div>
          <S.InputContents>
            <li>
              <span>
                <LabelItem label="아이디" />
              </span>
              <InputItem
                width="610px"
                padding="21px 18px"
                placeHolder="이메일 아이디를 @까지 정확하게 입력해주세요."
                register={register("email")}
              />
            </li>
            <ValidationItem
              error={errors.email?.message}
              height="14px"
              marginTop="8px"
              marginLeft="113px"
              marginBottom="24px"
            />
            <li>
              <span>
                <LabelItem label="비밀번호" />
              </span>
              <InputItem
                width="610px"
                padding="21px 18px"
                placeHolder="영문+숫자 조합 8~16자리를 입력해주세요."
                type="password"
                register={register("password")}
              />
            </li>
            <ValidationItem
              error={errors.password?.message}
              height="14px"
              marginTop="8px"
              marginLeft="113px"
            />
          </S.InputContents>
          <ButtonItem
            title="로그인"
            width="186px"
            height="164px"
            color="#fff"
            backgroundColor="#000"
            fontSize="20px"
            fontFamilly="NanumBold"
          />
        </div>
      </S.Wrapper>
    </>
  );
}
