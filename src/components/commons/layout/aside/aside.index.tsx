import * as S from "./aside.styles";

export default function LayoutAside() {
  return (
    <S.Wrapper>
      <h3>최근 본 상품</h3>
      <S.ProductsList>
        <li>
          <S.ProductsImg />
        </li>
        <li>
          <S.ProductsImg />
        </li>
        <li>
          <S.ProductsImg />
        </li>
      </S.ProductsList>
    </S.Wrapper>
  );
}
