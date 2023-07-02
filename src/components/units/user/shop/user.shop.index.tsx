import SearchItem from "../../../commons/items/search/search.index";
import UserCommonUI from "../common/user.common.index";
import * as S from "./user.shop.styles";

export default function UserShopUI() {
  return (
    <>
      <UserCommonUI />
      <S.Wrapper>
        <S.Title>나의 상품</S.Title>
        <S.SearchBox>
          <SearchItem placeHolder="상품을 검색하세요." />
        </S.SearchBox>
        <S.Product>
          <li>
            <S.ProductLeftContents>
              <S.ProductImgBox>
                <img />
              </S.ProductImgBox>
              <S.ProductInfo>
                <S.ProductInfoTop>
                  <S.ProductName>캠핑 텐트팝니다</S.ProductName>
                  <S.ProductPrice>
                    23,000 <p>원</p>
                  </S.ProductPrice>
                </S.ProductInfoTop>
                <S.ProductCreation>2023. 7. 3</S.ProductCreation>
              </S.ProductInfo>
            </S.ProductLeftContents>
            <S.UserProductRightContents>
              <p>판매중</p>
            </S.UserProductRightContents>
          </li>
        </S.Product>
      </S.Wrapper>
    </>
  );
}
