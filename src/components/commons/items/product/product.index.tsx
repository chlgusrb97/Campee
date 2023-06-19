import {getDate} from "../../../../commons/libraries/utils";
import {PRODUCTS_DETAIL_PATH} from "../../../../commons/paths/paths";
import {IUseditem} from "../../../../commons/types/generated/types";
import {useMovedDetail} from "../../customs/hooks/useMovedDetail";
import * as S from "./product.styles";

interface IProductItemProps {
  product?: IUseditem;
}

export default function ProductItem(props: IProductItemProps) {
  const {movedDetail} = useMovedDetail();

  return (
    <S.Wrapper>
      <S.HeartButton type="button">
        {!!props.product?.pickedCount ? <S.FillHeart /> : <S.lineHeart />}
      </S.HeartButton>
      <S.Product
        onClick={movedDetail(`${PRODUCTS_DETAIL_PATH}/${props.product?._id}`)}
      >
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
    </S.Wrapper>
  );
}
