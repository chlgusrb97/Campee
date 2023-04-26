import ProductItem from "../../commons/items/product/product.index";
import TitleItem from "../../commons/items/title/title.index";
import * as S from "./main.styles";

export default function MainUI() {
  return (
    <>
      <S.Wrapper>
        <span>
          <TitleItem title="New Arrival" fontSize="22px" />
        </span>
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
          <li>
            <ProductItem />
          </li>
        </S.Products>
      </S.Wrapper>
    </>
  );
}
