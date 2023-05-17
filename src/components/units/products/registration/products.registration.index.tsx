import {useCreateUsedItem} from "../../../commons/customs/hooks/useCreateUsedItem";
import ButtonItem from "../../../commons/items/button/button.index";
import InputItem from "../../../commons/items/input/input.index";
import KakaoMap from "../../../commons/items/kakaoMap/kakaoMap.index";
import LabelItem from "../../../commons/items/label/label.index";
import ModalItem from "../../../commons/items/modal/modal.index";
import TitleItem from "../../../commons/items/title/title.index";
import ValidationItem from "../../../commons/items/validation/validation.index";
import WebEditorItem from "../../../commons/items/webEditor/webEditor.index";
import {useFormProductsRegistration} from "../../../commons/useForm/useForm";
import DaumPostcodeEmbed from "react-daum-postcode";
import * as S from "./products.registration.styles";
import {useModalOpen} from "../../../commons/customs/hooks/useModalOpen";
import {useAddressHandleComplete} from "../../../commons/customs/hooks/useAddressHandleComplete";
import {useEffect, useState} from "react";
import ImageUploadItem from "../../../commons/items/imageUpload/imageUpload.index";
import {IProductsRegistrationUIProps} from "./products.registration.types";
import {useUpdateUsedItem} from "../../../commons/customs/hooks/useUpdateUsedItem";

export default function ProductsRegistrationUI(
  props: IProductsRegistrationUIProps
) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    setValue,
    trigger,
    handleSubmit,
    formState: {errors},
  } = useFormProductsRegistration();

  const {createUsedItemSubmit, fileList, setFileList} = useCreateUsedItem();
  const {createUpdateItemSubmit} = useUpdateUsedItem();
  const {showModal, handleOk, handleCancel} = useModalOpen(setIsModalOpen);
  const {address, handleComplete} = useAddressHandleComplete(
    setIsModalOpen,
    setValue
  );

  useEffect(() => {
    if (props.isEdit && props.usedItemData) {
      setValue("name", props.usedItemData?.fetchUseditem.name);
      setValue("remarks", props.usedItemData?.fetchUseditem.remarks);
      setValue("contents", props.usedItemData?.fetchUseditem.contents);
      setValue("price", Number(props.usedItemData?.fetchUseditem.price));
    }
  }, [props.isEdit, props.usedItemData, setValue]);

  console.log(props.usedItemData, props.isEdit, "뱅밍정 바보");

  return (
    <>
      <S.Wrapper
        onSubmit={handleSubmit(
          props.isEdit ? createUpdateItemSubmit(fileList) : createUsedItemSubmit
        )}
      >
        <span>
          <TitleItem title={`상품 ${props.isEdit ? "수정" : "등록"}`} />
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
                defaultValue={props.usedItemData?.fetchUseditem.name}
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
                defaultValue={props.usedItemData?.fetchUseditem.remarks}
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
                setValue={setValue}
                trigger={trigger}
                usedItemData={props.usedItemData}
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
                defaultValue={props.usedItemData?.fetchUseditem.price}
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
              register={register("tags")}
              defaultValue={props.usedItemData?.fetchUseditem.tags
                ?.map((tag) => `${tag} `)
                .join("")}
            />
          </li>
          <li>
            <span>
              <LabelItem label="브랜드 위치" />
            </span>
            <div>
              <S.MapBox>
                <KakaoMap
                  address={
                    props.isEdit
                      ? address
                      : `${props.usedItemData?.fetchUseditem.useditemAddress?.address}`
                  }
                />
              </S.MapBox>
              <S.AddressContents>
                <li>
                  <div>
                    <InputItem
                      width="80px"
                      height="52px"
                      border="1px solid #bdbdbd"
                      backgroundColor="#fff"
                      textAlign="center"
                      placeHolder="우편번호"
                      disabled={true}
                      register={register("useditemAddress.zipcode")}
                      defaultValue={
                        props.usedItemData?.fetchUseditem.useditemAddress
                          ?.zipcode
                      }
                    />
                  </div>
                  <div>
                    <ButtonItem
                      title="우편번호 검색"
                      width="124px"
                      height="52px"
                      color="#fff"
                      backgroundColor="#000"
                      fontSize="16px"
                      type="button"
                      onClick={showModal}
                    />
                    {isModalOpen && (
                      <ModalItem
                        title="주소 검색"
                        contents={
                          <DaumPostcodeEmbed onComplete={handleComplete} />
                        }
                        isModalOpen={isModalOpen}
                        handleOk={handleOk}
                        handleCancel={handleCancel}
                      />
                    )}
                  </div>
                </li>
                <li>
                  <InputItem
                    width="100%"
                    height="56px"
                    padding="0 18px"
                    placeHolder="도로명 주소 또는 지번 주소"
                    disabled={true}
                    register={register("useditemAddress.address")}
                    defaultValue={
                      props.usedItemData?.fetchUseditem.useditemAddress?.address
                    }
                  />
                </li>
                <li>
                  <InputItem
                    width="100%"
                    height="56px"
                    padding="0 18px"
                    placeHolder="상세 주소를 입력해주세요."
                    register={register("useditemAddress.addressDetail")}
                    defaultValue={
                      props.usedItemData?.fetchUseditem.useditemAddress
                        ?.addressDetail
                    }
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
              <ImageUploadItem
                fileList={fileList}
                setFileList={setFileList}
                usedItemData={props.usedItemData}
              />
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
              type="button"
            />
          </li>
          <li>
            <ButtonItem
              title={props.isEdit ? "수정" : "등록"}
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
