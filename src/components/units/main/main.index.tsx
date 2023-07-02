import {useQuery} from "@apollo/client";
import ProductItem from "../../commons/items/product/product.index";
import TitleItem from "../../commons/items/title/title.index";
import * as S from "./main.styles";
import {USED_ITEMS} from "../../commons/queries/queries";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";
import {v4 as uuidv4} from "uuid";
import {
  BOARDS_DETAIL_PATH,
  PRODUCTS_DETAIL_PATH,
} from "../../../commons/paths/paths";
import {routes} from "../../../commons/routes/routes";
import {
  useQueryBoardsBest,
  useQueryUsedItems,
} from "../../commons/customs/useQueries.ts/useQueries";
import {getDate} from "../../../commons/libraries/utils";

export default function MainUI() {
  const {data: productsData} = useQueryUsedItems();
  const {data: bestBoardsData} = useQueryBoardsBest();
  const {pageRouting} = routes();

  const newArrival = productsData?.fetchUseditems.slice(0, 8);

  return (
    <>
      <S.Wrapper>
        <span>
          <TitleItem title="BEST LIFE" fontSize="20px" />
        </span>
        <S.BestBoards>
          {bestBoardsData?.fetchBoardsOfTheBest.map((bestBoard) => (
            <li
              key={bestBoard._id}
              onClick={() =>
                pageRouting(`${BOARDS_DETAIL_PATH}/${bestBoard._id}`)
              }
            >
              <S.BestBoardImgBox>
                {bestBoard.images && (
                  <img
                    src={`https://storage.googleapis.com/${bestBoard.images[0]}`}
                  />
                )}
              </S.BestBoardImgBox>
              <S.BestBoardFooterBox>
                <h1>{bestBoard.title}</h1>
                <S.FooterUser>
                  <S.FooterUserImgBox>
                    <S.UserIcon />
                  </S.FooterUserImgBox>
                  <S.FooterUserName>홍길동</S.FooterUserName>
                </S.FooterUser>
                <S.FooterEntry>
                  <p>{getDate(bestBoard.createdAt)}</p>
                  <p>추천 {bestBoard.likeCount.toLocaleString()}</p>
                </S.FooterEntry>
              </S.BestBoardFooterBox>
            </li>
          ))}
        </S.BestBoards>
        <span>
          <TitleItem title="New Arrival" fontSize="20px" />
        </span>
        <S.NewArrival>
          {newArrival ? (
            newArrival.map((product) => (
              <li key={uuidv4()}>
                <ProductItem product={product} />
              </li>
            ))
          ) : (
            <></>
          )}
        </S.NewArrival>
      </S.Wrapper>
    </>
  );
}
