import KakaoMap from "../../../../commons/items/kakaoMap/kakaoMap.index";
import TitleItem from "../../../../commons/items/title/title.index";
import {IDetailChildren} from "../products.detail.types";
import * as S from "./products.detail.contents.styles";

export default function ProductsDeTailContents(props: IDetailChildren) {
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
          <span
            dangerouslySetInnerHTML={{
              __html: String(props.usedItemData?.contents),
            }}
          />
        </S.Contents>
      </S.Wrapper>
    </>
  );
}
