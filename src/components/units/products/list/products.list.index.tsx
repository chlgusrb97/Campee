import {useQuery} from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import ButtonItem from "../../../commons/items/button/button.index";
import InputItem from "../../../commons/items/input/input.index";
import ProductItem from "../../../commons/items/product/product.index";
import TitleItem from "../../../commons/items/title/title.index";
import {USED_ITEMS} from "../../../commons/queries/queries";
import {v4 as uuidv4} from "uuid";
import * as S from "./products.list.styles";
import {useMovedDetail} from "../../../commons/customs/hooks/useMovedDetail";
import {PRODUCTS_DETAIL_PATH} from "../../../../commons/paths/paths";
import InfiniteScroll from "react-infinite-scroller";
import {onLoadMoreUsedItems} from "../../../commons/customs/onLoadMore/onLoadMoreUsedItems";
import LinkItem from "../../../commons/items/link/link.index";
import {PRODUCTS_REGISTRATION_PATH} from "../../../../commons/paths/paths";
import {routes} from "../../../../commons/routes/routes";

export default function ProductsListUI() {
  const {data} = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(USED_ITEMS);

  const {movedDetail} = useMovedDetail();
  const {onLoadMore} = onLoadMoreUsedItems();
  const {pageRouting} = routes();

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
              onClick={() => pageRouting(PRODUCTS_REGISTRATION_PATH)}
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
          <InfiniteScroll
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={true}
            useWindow={true}
          >
            <S.Products>
              {data?.fetchUseditems ? (
                data.fetchUseditems.map((el) => (
                  <li
                    key={uuidv4()}
                    onClick={movedDetail(`${PRODUCTS_DETAIL_PATH}/${el._id}`)}
                  >
                    <ProductItem el={el} />
                  </li>
                ))
              ) : (
                <></>
              )}
            </S.Products>
          </InfiniteScroll>
        </S.ProductsContents>
      </S.Wrapper>
    </>
  );
}
