import {useEffect} from "react";
import * as S from "./aside.styles";
import {IUseditem} from "../../../../commons/types/generated/types";
import {recentlyVisitedProducts} from "../../../../commons/stores/stores";
import {useRecoilState} from "recoil";
import {PRODUCTS_DETAIL_PATH} from "../../../../commons/paths/paths";
import {routes} from "../../../../commons/routes/routes";

export default function LayoutAside() {
  const [recentlyProducts, setRecentlyProducts] = useRecoilState(
    recentlyVisitedProducts
  );

  const {pageRouting} = routes();

  if (typeof window !== "undefined") {
    useEffect(() => {
      const recentlyVisitedProducts = JSON.parse(
        sessionStorage.getItem("recentlyVisitedProducts") || "[]"
      );

      setRecentlyProducts(recentlyVisitedProducts);
    }, [sessionStorage.getItem("recentlyVisitedProducts")]);
  }

  const reverseRecentlyProducts = [...recentlyProducts].reverse().slice(0, 3);

  return (
    <S.Wrapper>
      <h3>최근 본 상품</h3>
      {!!recentlyProducts.length ? (
        <S.ProductsList>
          {reverseRecentlyProducts.map(
            (product: IUseditem) =>
              product.images && (
                <li
                  key={product._id}
                  onClick={() =>
                    pageRouting(`${PRODUCTS_DETAIL_PATH}/${product._id}`)
                  }
                >
                  <S.ProductsImg
                    src={`https://storage.googleapis.com/${product.images[0]}`}
                  />
                </li>
              )
          )}
        </S.ProductsList>
      ) : (
        <S.NoneProduct>
          <S.NoneIcon />
          <p>최근 본 상품이 없습니다.</p>
        </S.NoneProduct>
      )}
    </S.Wrapper>
  );
}
