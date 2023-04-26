import ButtonItem from "../../../../commons/items/button/button.index";
import TitleItem from "../../../../commons/items/title/title.index";
import * as S from "./products.detail.info.styles";

export default function ProductsDeTailInfo() {
  return (
    <>
      <S.Wrapper>
        <S.ImageBox>
          <img />
        </S.ImageBox>
        <S.Contents>
          <S.ContentsHeader>
            <div>
              <p>AVANDRESS</p>
              <S.IconBox>
                <li>
                  <S.Edit />
                </li>
                <li>
                  <S.Delete />
                </li>
              </S.IconBox>
            </div>
            <h2>[SET] HERO TRACK WIDE SET-UP PURPLE</h2>
          </S.ContentsHeader>
          <S.ContentsInfo>
            <div>
              <S.Price>
                <span>판매가</span>
                <span>
                  <p>153,900</p>원
                </span>
              </S.Price>
              <S.Pick>
                <p>MY</p>
                <S.Heart />
                <p>Product</p>
              </S.Pick>
            </div>
            <div>
              <S.Remarks>
                폴리에스테르 100% 원사로 스퀘어미터 450 밀도있게 편직하여
                중량감과 두께를 트레이닝복에 최적화시켰으며 덤블텐타가공으로
                축율 및 뒤틀림을 최소화 하였습니다. 수분을 빠르게 흡수하고
                건조되도록 하였고 내마모성이 좋습니다. 기계세탁이 가능하며 세탁
                후 빠르게 건조되어 관리가 용이합니다. 편직 가공에서 유연제
                처리로 부드러운 터치감으로 편안합니다.
              </S.Remarks>
              <S.Tag>
                <li>#트랙자켓</li>
                <li>#아우터</li>
                <li>#자켓</li>
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
