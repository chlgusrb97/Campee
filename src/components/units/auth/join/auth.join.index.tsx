import {useCreateUser} from "../../../commons/customs/hooks/useCreateUser";
import ButtonItem from "../../../commons/items/button/button.index";
import InputItem from "../../../commons/items/input/input.index";
import LabelItem from "../../../commons/items/label/label.index";
import TitleItem from "../../../commons/items/title/title.index";
import {useFormJoin} from "../../../commons/useForm/useForm";
import * as S from "./auth.join.styles";

export default function JoinUI() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useFormJoin();

  const {createUserSubmit} = useCreateUser();

  return (
    <>
      <S.Wrapper onSubmit={handleSubmit(createUserSubmit)}>
        <span>
          <TitleItem title="JOIN MEMBER" fontFamily="NanumBold" />
        </span>
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
          <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>
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
          <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
          <li>
            <span>
              <LabelItem label="비밀번호 확인" />
            </span>
            <InputItem
              width="610px"
              padding="21px 18px"
              placeHolder="영문+숫자 조합 8~16자리를 입력해주세요."
              type="password"
              register={register("passwordCheck")}
            />
          </li>
          <S.ErrorMessage>{errors.passwordCheck?.message}</S.ErrorMessage>
          <li>
            <span>
              <LabelItem label="이름" />
            </span>
            <InputItem
              width="610px"
              padding="21px 18px"
              placeHolder="Ex) 홍길동"
              register={register("name")}
            />
          </li>
          <S.ErrorMessage>{errors.name?.message}</S.ErrorMessage>
        </S.InputContents>
        <S.ButtonContents>
          <li>
            <ButtonItem
              title="취소"
              width="186px"
              height="56px"
              border="1px solid #000"
              padding="15px 33px"
              color="#000"
              backgroundColor="#fff"
              fontSize="20px"
              fontFamilly="NanumBold"
            />
          </li>
          <li>
            <ButtonItem
              title="확인"
              width="186px"
              height="56px"
              color="#fff"
              backgroundColor="#000"
              fontSize="20px"
              fontFamilly="NanumBold"
            />
          </li>
        </S.ButtonContents>
      </S.Wrapper>
    </>
  );
}
