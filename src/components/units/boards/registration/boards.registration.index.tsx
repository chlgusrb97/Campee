import InputItem from "../../../commons/items/input/input.index";
import LabelItem from "../../../commons/items/label/label.index";
import TitleItem from "../../../commons/items/title/title.index";
import WebEditorItem from "../../../commons/items/webEditor/webEditor.index";
import ImageUploadItem from "../../../commons/items/imageUpload/imageUpload.index";
import * as S from "./boards.registration.styles";
import ButtonItem from "../../../commons/items/button/button.index";
import KakaoMap from "../../../commons/items/kakaoMap/kakaoMap.index";
import AddressItem from "../../../commons/items/address/address.index";

export default function BoardsRegistrationUI() {
  return (
    <S.Wrapper>
      <span>
        <TitleItem title="MY LIFE 등록" fontSize="24px" />
      </span>
      <S.Contents>
        <li>
          <div>
            <span>
              <LabelItem label="이미지" fontSize="18px" />
            </span>
            <S.ImageContents>{/* <ImageUploadItem /> */}</S.ImageContents>
          </div>
        </li>
        <li>
          <S.WriterBox>
            <span>
              <LabelItem label="이름" fontSize="18px" />
            </span>
            <InputItem
              height="48px"
              border="1px solid #ddd"
              padding="16px"
              placeHolder="이름을 입력해주세요."
            />
          </S.WriterBox>
          <S.PasswordBox>
            <span>
              <LabelItem label="비밀번호" fontSize="18px" />
            </span>
            <InputItem
              height="48px"
              border="1px solid #ddd"
              padding="16px"
              placeHolder="비밀번호를 입력해주세요."
              type="password"
            />
          </S.PasswordBox>
        </li>
        <li>
          <div>
            <span>
              <LabelItem label="제목" fontSize="18px" />
            </span>
            <InputItem
              height="48px"
              border="1px solid #ddd"
              padding="16px"
              placeHolder="제목을 입력해주세요."
            />
          </div>
        </li>
        <li>
          <div>
            <span>
              <LabelItem label="내용" fontSize="18px" />
            </span>
            <WebEditorItem placeHolder="내용을 입력해주세요." />
          </div>
        </li>
        <li>
          <div>
            <span>
              <LabelItem label="주소" fontSize="18px" />
            </span>
            <S.AddressBox>
              <S.MapBox>
                <KakaoMap address="" />
              </S.MapBox>
              <AddressItem />
            </S.AddressBox>
          </div>
        </li>
        <li>
          <div>
            <span>
              <LabelItem label="유튜브" fontSize="18px" />
            </span>
            <InputItem
              height="48px"
              border="1px solid #ddd"
              padding="16px"
              placeHolder="링크 주소를 입력해주세요."
            />
          </div>
        </li>
        <S.ButtonBox>
          <li>
            <ButtonItem
              title="취소"
              width="160px"
              height="56px"
              border="1px solid #146C94"
              borderRadius="2px"
              color="#146C94"
              backgroundColor="#fff"
              fontSize="20px"
              fontFamilly="NanumBold"
              type="button"
            />
          </li>
          <li>
            <ButtonItem
              title="등록"
              width="160px"
              height="56px"
              borderRadius="2px"
              color="#fff"
              backgroundColor="#146C94"
              fontSize="20px"
              fontFamilly="NanumBold"
              hoverBackgroundColor="#0d4f6d"
              transition="all 0.3s ease-in-out"
            />
          </li>
        </S.ButtonBox>
      </S.Contents>
    </S.Wrapper>
  );
}
