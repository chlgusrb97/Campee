import ButtonItem from "../../../commons/items/button/button.index";
import ProductItem from "../../../commons/items/product/product.index";
import TitleItem from "../../../commons/items/title/title.index";
import {v4 as uuidv4} from "uuid";
import * as S from "./products.list.styles";
import InfiniteScroll from "react-infinite-scroller";
import {routes} from "../../../../commons/routes/routes";
import SearchItem from "../../../commons/items/search/search.index";
import {PRODUCTS_REGISTRATION_PATH} from "../../../../commons/paths/paths";
import {
  useQueryBestUsedItems,
  useQueryUsedItems,
} from "../../../commons/customs/useQueries.ts/useQueries";
import {onLoadMoreFunc} from "../../../commons/customs/onLoadMore/onLoadMoreUsedItems";

export default function ProductsListUI() {
  const {data, refetch, fetchMore} = useQueryUsedItems();
  const {data: BestItemsData} = useQueryBestUsedItems();
  const {onLoadMore} = onLoadMoreFunc({
    data,
    dataArr: data?.fetchUseditems,
    fetchMore,
  });
  const {pageRouting} = routes();

  return (
    <>
      <S.ItemBox>
        <SearchItem refetch={refetch} placeHolder="상품을 검색하세요." />
        <S.ButtonBox>
          <ButtonItem
            title="등록"
            width="90px"
            height="44px"
            color="#fff"
            borderRadius="2px"
            backgroundColor="#e76161"
            fontSize="16px"
            fontFamilly="NanumBold"
            transition="all 0.3s ease-in-out"
            hoverBackgroundColor="#c64343"
            onClick={() => pageRouting(PRODUCTS_REGISTRATION_PATH)}
          />
        </S.ButtonBox>
      </S.ItemBox>
      <S.Wrapper>
        <span>
          <TitleItem title="BEST PICK" fontSize="20px" />
        </span>
        <S.BestProducts>
          {BestItemsData?.fetchUseditemsOfTheBest.map((BestProducts) => (
            <li key={BestProducts._id}>
              <ProductItem product={BestProducts} />
            </li>
          ))}
        </S.BestProducts>
        <span>
          <TitleItem title="PRODUCTS" fontSize="20px" />
        </span>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          useWindow={true}
          style={{width: "100%"}}
        >
          <S.AllProducts>
            {data?.fetchUseditems ? (
              data.fetchUseditems.map((product) => (
                <li key={uuidv4()}>
                  <ProductItem product={product} />
                </li>
              ))
            ) : (
              <></>
            )}
          </S.AllProducts>
        </InfiniteScroll>
      </S.Wrapper>
    </>
  );
}
