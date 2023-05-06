import ButtonItem from "../../../../commons/items/button/button.index";
import * as S from "./products.detail.info.styles";
import {useQueryUsedItem} from "../../../../commons/customs/useQueries.ts/useQueries";

export default function ProductsDeTailInfo() {
  const {usedItemData} = useQueryUsedItem();

  const formattedPrice = usedItemData?.fetchUseditem.price?.toLocaleString();

  return (
    <>
      <S.Wrapper>
        <S.ImageBox>
          {usedItemData?.fetchUseditem.images && (
            <img
              src={`https://storage.googleapis.com/${usedItemData?.fetchUseditem.images[0]}`}
            />
          )}
        </S.ImageBox>
        <S.Contents>
          <S.ContentsHeader>
            <div>
              <p>{usedItemData?.fetchUseditem.seller?.name}</p>
              <S.IconBox>
                <li>
                  <S.Edit />
                </li>
                <li>
                  <S.Delete />
                </li>
              </S.IconBox>
            </div>
            <h2>{usedItemData?.fetchUseditem.name}</h2>
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
              <S.Remarks>{usedItemData?.fetchUseditem.contents}</S.Remarks>
              <S.Tag>
                {usedItemData?.fetchUseditem.tags?.map((el, tagIndex) => (
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
