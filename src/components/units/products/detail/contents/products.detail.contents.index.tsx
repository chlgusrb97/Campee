import TitleItem from "../../../../commons/items/title/title.index";
import * as S from "./products.detail.contents.styles";

export default function ProductsDeTailContents() {
  return (
    <>
      <S.Wrapper>
        <span>
          <TitleItem title="DETAIL" fontSize="32px" />
        </span>
        <div>상품내용</div>
      </S.Wrapper>
    </>
  );
}
