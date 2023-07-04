import {useState} from "react";
import UserCommonUI from "../common/user.common.index";
import * as S from "./user.transaction.styles";
import UserTransactionBuyUI from "./buy/user.transaction.buy.index";
import UserTransactionSellUI from "./sell/user.transaction.sell.index";

export default function UserTransactionUI() {
  const [activeButton, setActiveButton] = useState(1);

  const onClickActive = (buttonId: number) => {
    setActiveButton(buttonId);
  };

  return (
    <>
      <UserCommonUI />
      <S.Wrapper>
        <S.TitleButtonBox>
          <li>
            <S.TitleButton
              active={activeButton === 1}
              type="button"
              onClick={() => onClickActive(1)}
            >
              구매내역
            </S.TitleButton>
          </li>
          <li>
            <S.TitleButton
              active={activeButton === 2}
              type="button"
              onClick={() => onClickActive(2)}
            >
              판매내역
            </S.TitleButton>
          </li>
          <li>
            <S.TitleButton
              active={activeButton === 3}
              type="button"
              onClick={() => onClickActive(3)}
            >
              충전내역
            </S.TitleButton>
          </li>
        </S.TitleButtonBox>
        {activeButton === 1 && <UserTransactionBuyUI />}
        {activeButton === 2 && <UserTransactionSellUI />}
      </S.Wrapper>
    </>
  );
}
