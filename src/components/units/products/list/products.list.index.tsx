import {useQuery} from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import ButtonItem from "../../../commons/items/button/button.index";
import ProductItem from "../../../commons/items/product/product.index";
import TitleItem from "../../../commons/items/title/title.index";
import {USED_ITEMS} from "../../../commons/queries/queries";
import {v4 as uuidv4} from "uuid";
import * as S from "./products.list.styles";
import InfiniteScroll from "react-infinite-scroller";
import {onLoadMoreUsedItems} from "../../../commons/customs/onLoadMore/onLoadMoreUsedItems";
import {routes} from "../../../../commons/routes/routes";
import SearchItem from "../../../commons/items/search/search.index";
import {PRODUCTS_REGISTRATION_PATH} from "../../../../commons/paths/paths";

export default function ProductsListUI() {
  const {data, refetch} = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(USED_ITEMS);
  const {onLoadMore} = onLoadMoreUsedItems();
  const {pageRouting} = routes();

  return (
    <>
      <S.Wrapper>
        <span>
          <TitleItem title="BEST PICK" fontSize="20px" />
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
        <S.ItemBox>
          <SearchItem refetch={refetch} placeHolder="상품을 검색하세요." />
          <S.ButtonBox>
            <ButtonItem
              title="등록"
              width="140px"
              height="50px"
              color="#fff"
              borderRadius="2px"
              backgroundColor="#e76161"
              fontSize="18px"
              fontFamilly="NanumBold"
              transition="all 0.3s ease-in-out"
              hoverBackgroundColor="#c64343"
              onClick={() => pageRouting(PRODUCTS_REGISTRATION_PATH)}
            />
          </S.ButtonBox>
        </S.ItemBox>
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
