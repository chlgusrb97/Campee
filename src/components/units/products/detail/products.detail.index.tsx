import ProductsDeTailContents from "./contents/products.detail.contents.index";
import ProductsDeTailInfo from "./info/products.detail.info.index";
import * as S from "./products.detail.styles";

export default function ProductsDetailUI() {
  return (
    <>
      <S.Wrapper>
        <ProductsDeTailInfo />
        <ProductsDeTailContents />
      </S.Wrapper>
    </>
  );
}
