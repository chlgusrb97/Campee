import ButtonItem from "../../../../commons/items/button/button.index";
import * as S from "./products.detail.info.styles";
import {IDetailChildren} from "../products.detail.types";
import {useDeleteUsedItem} from "../../../../commons/customs/hooks/useDeleteUsedItem";

export default function ProductsDeTailInfo(props: IDetailChildren) {
  const formattedPrice = props.usedItemData?.price?.toLocaleString();

  const {onClickDeleteUsedItem} = useDeleteUsedItem();

  return (
    <>
      <S.Wrapper>
        <S.ImageBox>
          {props.usedItemData?.images &&
            props.usedItemData?.images.length !== 0 && (
              <img
                src={`https://storage.googleapis.com/${props.usedItemData.images[0]}`}
              />
            )}
        </S.ImageBox>
        <S.Contents>
          <S.ContentsHeader>
            <div>
              <p>{props.usedItemData?.seller?.name}</p>
              <S.IconBox>
                <li>
                  <S.Edit />
                </li>
                <li>
                  <S.Delete onClick={onClickDeleteUsedItem} />
                </li>
              </S.IconBox>
            </div>
            <h2>{props.usedItemData?.name}</h2>
          </S.ContentsHeader>
          <S.ContentsInfo>
            <div>
              <S.Price>
                <span>판매가</span>
                <span>
                  <p>{formattedPrice}</p>원
                </span>
              </S.Price>
              <S.Pick>
                <p>MY</p>
                <S.Heart />
                <p>Product</p>
              </S.Pick>
            </div>
            <div>
              <S.Remarks>{props.usedItemData?.remarks}</S.Remarks>
              <S.Tag>
                {props.usedItemData?.tags?.map((el, tagIndex) => (
                  <li key={tagIndex}>{el}</li>
                ))}
              </S.Tag>
            </div>
          </S.ContentsInfo>
          <S.ButtonBox>
            <li>
              <ButtonItem
                title="BUY NOW"
                padding="32px 70px"
                color="#fff"
                backgroundColor="#000"
                fontSize="24px"
              />
            </li>
            <li>
              <ButtonItem
                title="SHOPPING BAG"
                padding="32px 70px"
                color="#fff"
                backgroundColor="#999"
                fontSize="24px"
              />
            </li>
          </S.ButtonBox>
        </S.Contents>
      </S.Wrapper>
    </>
  );
}
