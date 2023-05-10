import DOMPurify from "dompurify";
import KakaoMap from "../../../../commons/items/kakaoMap/kakaoMap.index";
import TitleItem from "../../../../commons/items/title/title.index";
import {IDetailChildren} from "../products.detail.types";
import * as S from "./products.detail.contents.styles";
import {useEffect, useState} from "react";

export default function ProductsDeTailContents(props: IDetailChildren) {
  const [safeHtml, setSafeHtml] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSafeHtml(DOMPurify.sanitize(String(props.usedItemData?.contents)));
    }
  }, [props.usedItemData?.contents]);

  return (
    <>
      <S.Wrapper>
        <span>
          <TitleItem title="DETAIL" fontSize="32px" />
        </span>
        <S.Contents>
          <S.MapBox>
            <KakaoMap
              address={`${props.usedItemData?.useditemAddress?.address}`}
            />
          </S.MapBox>
          <div
            dangerouslySetInnerHTML={{
              __html: safeHtml,
            }}
          />
        </S.Contents>
      </S.Wrapper>
    </>
  );
}
