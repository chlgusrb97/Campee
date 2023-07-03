import {getDate} from "../../../../commons/libraries/utils";
import {
  useQueryUsedItemMySold,
  useQueryUser,
} from "../../../commons/customs/useQueries.ts/useQueries";
import SearchItem from "../../../commons/items/search/search.index";
import UserCommonUI from "../common/user.common.index";
import * as S from "./user.shop.styles";
import InfiniteScroll from "react-infinite-scroller";
import {onLoadMoreFunc} from "../../../commons/customs/onLoadMore/onLoadMoreUsedItems";

export default function UserShopUI() {
  const {data: userData} = useQueryUser();
  const {data: mySoldData, refetch, fetchMore} = useQueryUsedItemMySold();
  const {onLoadMore} = onLoadMoreFunc({
    data: mySoldData,
    dataArr: mySoldData?.fetchUseditemsISold,
    fetchMore,
  });

  return (
    <>
      <UserCommonUI />
      <S.Wrapper>
        <S.Title>나의 상품</S.Title>
        <S.SearchBox>
          <SearchItem placeHolder="상품을 검색하세요." refetch={refetch} />
        </S.SearchBox>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          useWindow={true}
          style={{width: "100%"}}
        >
          <S.Product>
            {mySoldData?.fetchUseditemsISold.map(
              (product) =>
                product.seller?._id === userData?.fetchUserLoggedIn._id && (
                  <li key={product._id}>
                    <S.ProductLeftContents>
                      <S.ProductImgBox>
                        {product.images && (
                          <img
                            src={`https:storage.googleapis.com/${product.images[0]}`}
                          />
                        )}
                      </S.ProductImgBox>
                      <S.ProductInfo>
                        <S.ProductInfoTop>
                          <S.ProductName>{product.name}</S.ProductName>
                          <S.ProductPrice>
                            {product.price?.toLocaleString()}
                            <p>원</p>
                          </S.ProductPrice>
                        </S.ProductInfoTop>
                        <S.ProductCreation>
                          {getDate(product.createdAt)}
                        </S.ProductCreation>
                      </S.ProductInfo>
                    </S.ProductLeftContents>
                    <S.UserProductRightContents>
                      <p style={{color: product.soldAt ? "#e76161" : "#777"}}>
                        {product.soldAt ? "판매완료" : "판매중"}
                      </p>
                    </S.UserProductRightContents>
                  </li>
                )
            )}
          </S.Product>
        </InfiniteScroll>
      </S.Wrapper>
    </>
  );
}
