import * as S from "./product.styles";

export default function ProductItem() {
  return (
    <>
      <S.Wrapper>
        <li>
          <S.Heart />
          <img />
        </li>
        <li>
          <S.Price>
            <p>7%</p>
            <p>27,500</p>
          </S.Price>
          <S.Name>상품이름</S.Name>
          <S.Info>
            [당일출고/주문폭주] 노티드 캔버스 패브릭 가방4co노티드 캔버스
          </S.Info>
        </li>
      </S.Wrapper>
    </>
  );
}
