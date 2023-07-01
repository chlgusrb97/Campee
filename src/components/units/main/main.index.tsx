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
import {PRODUCTS_DETAIL_PATH} from "../../../commons/paths/paths";
import {routes} from "../../../commons/routes/routes";

export default function MainUI() {
  const {data} = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(USED_ITEMS);

  const {pageRouting} = routes();

  const fetchUseditems = data?.fetchUseditems.slice(0, 8);

  return (
    <>
      <S.Wrapper>
        <span>
          <TitleItem title="New Arrival" fontSize="22px" />
        </span>
        <S.Products>
          {fetchUseditems?.map((product) => (
            <li
              key={uuidv4()}
              onClick={() =>
                pageRouting(`${PRODUCTS_DETAIL_PATH}/${product._id}`)
              }
            >
              <ProductItem product={product} />
            </li>
          ))}
        </S.Products>
      </S.Wrapper>
    </>
  );
}
