import {useQuery} from "@apollo/client";
import ProductItem from "../../commons/items/product/product.index";
import TitleItem from "../../commons/items/title/title.index";
import * as S from "./main.styles";
import {USED_ITEMS} from "../../commons/queries/queries";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";

export default function MainUI() {
  const {data} = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(USED_ITEMS);

  const fetchUseditems = data?.fetchUseditems.slice(0, 8);

  return (
    <>
      <S.Wrapper>
        <span>
          <TitleItem title="New Arrival" fontSize="22px" />
        </span>
        <S.Products>
          {fetchUseditems?.map((el) => (
            <li key={el._id}>
              <ProductItem el={el} />
            </li>
          ))}
        </S.Products>
      </S.Wrapper>
    </>
  );
}
