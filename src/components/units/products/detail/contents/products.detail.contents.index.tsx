import KakaoMap from "../../../../commons/items/kakaoMap/kakaoMap.index";
import TitleItem from "../../../../commons/items/title/title.index";
import {IDetailChildren} from "../products.detail.types";
import * as S from "./products.detail.contents.styles";

export default function ProductsDeTailContents(props: IDetailChildren) {
  console.log(props.usedItemData, "데이터~!!");

  return (
    <>
      <S.Wrapper>
        <span>
          <TitleItem title="DETAIL" fontSize="32px" />
        </span>
        <S.Contents>
          <p>{props.usedItemData?.contents}</p>
          <S.MapBox>{/* <KakaoMap /> */}</S.MapBox>
        </S.Contents>
      </S.Wrapper>
    </>
  );
}
