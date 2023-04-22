import ButtonItem from "../../../commons/items/button/button.index";
import InputItem from "../../../commons/items/input/input.index";
import LabelItem from "../../../commons/items/label/label.index";
import TitleItem from "../../../commons/items/title/title.index";
import * as S from "./auth.login.styles";

export default function LoginUI() {
  return (
    <>
      <S.Wrapper>
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
              />
            </li>
            <li>
              <span>
                <LabelItem label="비밀번호" />
              </span>
              <InputItem
                width="610px"
                padding="21px 18px"
                placeHolder="영문+숫자 조합 8~16자리를 입력해주세요."
              />
            </li>
          </S.InputContents>
          <ButtonItem
            title="로그인"
            width="186px"
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
