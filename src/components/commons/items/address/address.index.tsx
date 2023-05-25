import ButtonItem from "../button/button.index";
import InputItem from "../input/input.index";
import * as S from "./address.styles";

export default function AddressItem() {
  return (
    <S.AddressContents>
      <li>
        <InputItem
          width="80px"
          height="48px"
          border="1px solid #ddd"
          textAlign="center"
          placeHolder="우편번호"
          disabled={true}
        />
        <ButtonItem
          title="우편번호 검색"
          width="120px"
          height="48px"
          backgroundColor="#146C94"
          margin="0 0 0 24px"
          color="#fff"
          hoverBackgroundColor="#0d4f6d"
          transition="all 0.3s ease-in-out"
          type="button"
          // onClick={showModal}
        />
      </li>
      <li>
        <InputItem
          width="100%"
          height="48px"
          border="1px solid #ddd"
          padding="0 14px"
          placeHolder="도로명 주소 또는 지번 주소"
          disabled={true}
        />
      </li>
      <li>
        <InputItem
          width="100%"
          height="48px"
          border="1px solid #ddd"
          padding="0 14px"
          placeHolder="상세 주소를 입력해주세요."
        />
      </li>
    </S.AddressContents>
  );
}
