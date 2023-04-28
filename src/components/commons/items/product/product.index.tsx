import {IUseditem} from "../../../../commons/types/generated/types";
import * as S from "./product.styles";

interface IProductItemProps {
  el?: IUseditem;
}

export default function ProductItem(props: IProductItemProps) {
  return (
    <>
      <S.Wrapper>
        <div>
          {props.el?.images && props.el.images[0] ? (
            <img src={`https://storage.googleapis.com/${props.el.images[0]}`} />
          ) : (
            <div></div>
          )}
          <S.Heart />
        </div>
        <div>
          <S.Price>
            <p>7%</p>
            <p>{props.el?.price}</p>
          </S.Price>
          <S.Name>{props.el?.seller?.name}</S.Name>
          <S.Info>{props.el?.name}</S.Info>
        </div>
      </S.Wrapper>
    </>
  );
}
