import ButtonItem from "../../../commons/items/button/button.index";
import InputItem from "../../../commons/items/input/input.index";
import ProductItem from "../../../commons/items/product/product.index";
import TitleItem from "../../../commons/items/title/title.index";
import * as S from "./products.list.styles";

export default function ProductsListUI() {
  return (
    <>
      <S.Wrapper>
        <S.BestContents>
          <span>
            <TitleItem title="BEST" fontSize="22px" />
          </span>
          <S.BestProducts>
            <li>
              <ProductItem />
            </li>
            <li>
              <ProductItem />
            </li>
            <li>
              <ProductItem />
            </li>
            <li>
              <ProductItem />
            </li>
          </S.BestProducts>
        </S.BestContents>
        <S.ProductsContents>
          <div>
            <ButtonItem
              title="상품등록"
              border="1px solid #000"
              padding="26px 38px"
              color="#000"
              backgroundColor="#fff"
              fontSize="20px"
            />
            <S.Input>
              <InputItem
                width="100%"
                padding="15px"
                backgroundColor="transparent"
              />
              <S.Search />
            </S.Input>
          </div>
          <S.Products>
            <li>
              <ProductItem />
            </li>
            <li>
              <ProductItem />
            </li>
            <li>
              <ProductItem />
            </li>
            <li>
              <ProductItem />
            </li>
            <li>
              <ProductItem />
            </li>
            <li>
              <ProductItem />
            </li>
            <li>
              <ProductItem />
            </li>
          </S.Products>
        </S.ProductsContents>
      </S.Wrapper>
    </>
  );
}
