import {getDate} from "../../../../commons/libraries/utils";
import {PRODUCTS_DETAIL_PATH} from "../../../../commons/paths/paths";
import {routes} from "../../../../commons/routes/routes";
import {IUseditem} from "../../../../commons/types/generated/types";
import * as S from "./product.styles";

interface IProductItemProps {
  product: IUseditem;
}

export default function ProductItem(props: IProductItemProps) {
  const {pageRouting} = routes();

  const onClickProduct = (product: IUseditem) => () => {
    pageRouting(`${PRODUCTS_DETAIL_PATH}/${props.product?._id}`);

    const recentlyVisitedProducts: IUseditem[] = JSON.parse(
      sessionStorage.getItem("recentlyVisitedProducts") ?? "[]"
    );

    const temp = recentlyVisitedProducts.filter(
      (visitedProduct) => visitedProduct._id === product._id
    );

    if (temp.length === 1) return;

    const {__typename, ...newRecentlyVisitedProduct} = product;
    recentlyVisitedProducts.push(newRecentlyVisitedProduct);

    sessionStorage.setItem(
      "recentlyVisitedProducts",
      JSON.stringify(recentlyVisitedProducts)
    );
  };

  return (
    <S.Product onClick={onClickProduct(props.product)}>
      <S.ProductImgBox>
        {props.product?.images && props.product?.images[0] ? (
          <img
            src={`https://storage.googleapis.com/${props.product?.images[0]}`}
          />
        ) : (
          <S.ImgNoneBox>이미지를 불러올 수 없습니다.</S.ImgNoneBox>
        )}
      </S.ProductImgBox>
      <S.ProductFooterBox>
        <h1>{props.product?.name}</h1>
        <S.ProductFooterEntry>
          <S.Price>
            <p>{props.product?.price?.toLocaleString()}</p>원
          </S.Price>
          <S.CreationDate>{getDate(props.product?.createdAt)}</S.CreationDate>
        </S.ProductFooterEntry>
      </S.ProductFooterBox>
    </S.Product>
  );
}
