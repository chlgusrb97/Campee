import ButtonItem from "../../../commons/items/button/button.index";
import InputItem from "../../../commons/items/input/input.index";
import KakaoMap from "../../../commons/items/kakaoMap/kakaoMap.index";
import LabelItem from "../../../commons/items/label/label.index";
import TitleItem from "../../../commons/items/title/title.index";
import ValidationItem from "../../../commons/items/validation/validation.index";
import WebEditorItem from "../../../commons/items/webEditor/webEditor.index";
import {useFormProductsRegistration} from "../../../commons/useForm/useForm";
import * as S from "./products.registration.styles";

export default function ProductsRegistrationUI() {
  const {
    register,
    setValue,
    trigger,
    handleSubmit,
    formState: {errors},
  } = useFormProductsRegistration();
  return (
    <>
      <S.Wrapper>
        <span>
          <TitleItem title="상품 등록" />
        </span>
        <S.Contents>
          <li>
            <span>
              <LabelItem label="상품명" />
            </span>
            <div>
              <InputItem
                width="100%"
                padding="20px 18px"
                placeHolder="상품명을 작성해주세요."
                register={register("name")}
              />
              <ValidationItem error={errors.name?.message} marginTop="8px" />
            </div>
          </li>
          <li>
            <span>
              <LabelItem label="상품 요약" />
            </span>
            <div>
              <InputItem
                width="100%"
                padding="20px 18px"
                placeHolder="상품 요약을 작성해주세요."
                register={register("remarks")}
              />
              <ValidationItem error={errors.remarks?.message} marginTop="8px" />
            </div>
          </li>
          <li>
            <span>
              <LabelItem label="상품 내용" />
            </span>
            <div>
              <WebEditorItem
                placeHolder="상품을 설명해주세요."
                register={register}
                setValue={setValue}
                trigger={trigger}
              />
              <ValidationItem
                error={errors.contents?.message}
                marginTop="8px"
              />
            </div>
          </li>
          <li>
            <span>
              <LabelItem label="판매 가격" />
            </span>
            <div>
              <InputItem
                width="100%"
                padding="20px 18px"
                placeHolder="판매 가격을 입력해주세요."
                register={register("price")}
              />
              <ValidationItem error={errors.price?.message} marginTop="8px" />
            </div>
          </li>
          <li>
            <span>
              <LabelItem label="태그 입력" />
            </span>
            <InputItem
              width="100%"
              padding="20px 18px"
              placeHolder="#태그 #태그 #태그"
            />
          </li>
          <li>
            <span>
              <LabelItem label="브랜드 위치" />
            </span>
            <div>
              <S.MapBox>
                <KakaoMap />
              </S.MapBox>
              <S.AddressContents>
                <li>
                  <div>
                    <input value="07250" disabled />
                  </div>
                  <div>
                    <ButtonItem
                      title="우편번호 검색"
                      width="124px"
                      height="52px"
                      color="#fff"
                      backgroundColor="#000"
                      fontSize="16px"
                    />
                  </div>
                </li>
                <li>
                  <InputItem
                    width="100%"
                    height="56px"
                    padding="0 18px"
                    placeHolder="도로명 주소 또는 지번 주소"
                  />
                </li>
                <li>
                  <InputItem
                    width="100%"
                    height="56px"
                    padding="0 18px"
                    placeHolder="상세 주소를 입력해주세요."
                  />
                </li>
              </S.AddressContents>
            </div>
          </li>
          <li>
            <span>
              <LabelItem label="사진 첨부" />
            </span>
            <S.ImageContents>
              <li>
                <span>+</span>
                <span>Upload</span>
              </li>
              <li>
                <span>+</span>
                <span>Upload</span>
              </li>
            </S.ImageContents>
          </li>
        </S.Contents>
        <S.SubmitButtonBox>
          <li>
            <ButtonItem
              title="취소"
              width="195px"
              height="77px"
              border="1px solid #000"
              color="#000"
              backgroundColor="#fff"
              fontSize="20px"
              fontFamilly="NanumBold"
            />
          </li>
          <li>
            <ButtonItem
              title="취소"
              width="195px"
              height="77px"
              color="#fff"
              backgroundColor="#000"
              fontSize="20px"
              fontFamilly="NanumBold"
            />
          </li>
        </S.SubmitButtonBox>
      </S.Wrapper>
    </>
  );
}
