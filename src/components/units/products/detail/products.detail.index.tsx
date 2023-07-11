import {useEffect, useState} from "react";
import {
  useQueryUsedItem,
  useQueryUser,
} from "../../../commons/customs/useQueries.ts/useQueries";
import CarouselItem from "../../../commons/items/carousel/carousel.index";
import TitleItem from "../../../commons/items/title/title.index";
import DOMPurify from "dompurify";
import * as S from "./products.detail.styles";
import {useRouter} from "next/router";
import {useDeleteUsedItem} from "../../../commons/customs/hooks/useDeleteUsedItem";
import {useBuyingProducts} from "../../../commons/customs/hooks/useBuyingProducts";
import {routes} from "../../../../commons/routes/routes";
import {EDIT_PATH, PRODUCTS_DETAIL_PATH} from "../../../../commons/paths/paths";
import ProductsCommentUI from "../comment/products.comment.index";
import {useUsedItemPick} from "../../../commons/customs/hooks/useUsedItemPick";
import KakaoMapFetch from "../../../commons/items/kakaoMap/fetch/kakaoMap.fetch.index";

export default function ProductsDetailUI() {
  const router = useRouter();
  const [safeHtml, setSafeHtml] = useState("");

  const {data} = useQueryUsedItem();
  const {data: userData} = useQueryUser();
  const {onClickDeleteUsedItem} = useDeleteUsedItem();
  const {onClickBuyingProducts} = useBuyingProducts();
  const {itemPick} = useUsedItemPick();
  const {pageRouting} = routes();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSafeHtml(DOMPurify.sanitize(String(data?.fetchUseditem.contents)));
    }
  }, [data?.fetchUseditem.contents]);

  console.log(data?.fetchUseditem.useditemAddress?.address);
  return (
    <>
      <S.Wrapper>
        <S.ProductInfo>
          <S.ProductInfoLeftContents>
            <CarouselItem images={data?.fetchUseditem.images} />
          </S.ProductInfoLeftContents>
          <S.ProductInfoRightContents>
            <div>
              <S.User>
                <S.UserImageBox>
                  {data?.fetchUseditem.seller?.picture ? (
                    <img
                      src={`https://storage.googleapis.com/${data.fetchUseditem.seller.picture}`}
                    />
                  ) : (
                    <S.UserIcon />
                  )}
                </S.UserImageBox>
                <S.UserName>{data?.fetchUseditem.seller?.name}</S.UserName>
              </S.User>
              {data?.fetchUseditem.seller?._id ===
                userData?.fetchUserLoggedIn._id && (
                <S.EditDeleteButtons>
                  <button
                    onClick={() => {
                      pageRouting(
                        `${PRODUCTS_DETAIL_PATH}/${router.query.productsId}${EDIT_PATH}`
                      );
                    }}
                  >
                    <S.EditIcon />
                    <p>수정</p>
                  </button>
                  <button onClick={onClickDeleteUsedItem}>
                    <S.DeleteIcon />
                    <p>삭제</p>
                  </button>
                </S.EditDeleteButtons>
              )}
            </div>
            <div>
              <S.ProductName>{data?.fetchUseditem.name}</S.ProductName>
              <S.ProductPrice>
                {data?.fetchUseditem.price?.toLocaleString()}
                <p>원</p>
              </S.ProductPrice>
              <S.ProductRemarks>
                <h4>상품소개</h4>
                <p>{data?.fetchUseditem.remarks}</p>
              </S.ProductRemarks>
              {data?.fetchUseditem.tags?.length !== 0 && (
                <S.ProductTags>
                  <h4>관련태그</h4>
                  <p>{data?.fetchUseditem.tags?.map((tag) => `${tag} `)}</p>
                </S.ProductTags>
              )}
              {data?.fetchUseditem.useditemAddress?.address && (
                <S.ProductAddress>
                  <h4>거래지역</h4>
                  <p>{`${data?.fetchUseditem.useditemAddress?.address} ${data?.fetchUseditem.useditemAddress?.addressDetail}`}</p>
                </S.ProductAddress>
              )}
            </div>
            <div>
              <S.PickBasketButtons>
                <S.PickButton onClick={itemPick(data?.fetchUseditem._id)}>
                  <S.LineHeartIcon />
                  <p>관심상품 {data?.fetchUseditem.pickedCount}</p>
                </S.PickButton>
                <S.BuyButton onClick={onClickBuyingProducts}>
                  구매하기
                </S.BuyButton>
              </S.PickBasketButtons>
            </div>
          </S.ProductInfoRightContents>
        </S.ProductInfo>
        <S.ProductContentns>
          <span>
            <TitleItem title="상품 내용" fontSize="20px" />
          </span>
          <div
            dangerouslySetInnerHTML={{
              __html: safeHtml,
            }}
          />
          {data?.fetchUseditem.useditemAddress?.address && (
            <S.ProductContentsAddress>
              <TitleItem title="거래 지역" fontSize="20px" />
              <S.MapBox>
                <KakaoMapFetch
                  address={data?.fetchUseditem.useditemAddress?.address}
                />
              </S.MapBox>
              <p>{`${data?.fetchUseditem.useditemAddress?.address} ${data?.fetchUseditem.useditemAddress?.addressDetail}`}</p>
            </S.ProductContentsAddress>
          )}
        </S.ProductContentns>
        <ProductsCommentUI />
      </S.Wrapper>
    </>
  );
}
