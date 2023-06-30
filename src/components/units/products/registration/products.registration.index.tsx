import {useCreateUsedItem} from "../../../commons/customs/hooks/useCreateUsedItem";
import ButtonItem from "../../../commons/items/button/button.index";
import InputItem from "../../../commons/items/input/input.index";
import LabelItem from "../../../commons/items/label/label.index";
import TitleItem from "../../../commons/items/title/title.index";
import ValidationItem from "../../../commons/items/validation/validation.index";
import WebEditorItem from "../../../commons/items/webEditor/webEditor.index";
import {useFormProductsRegistration} from "../../../commons/useForm/useForm";
import * as S from "./products.registration.styles";
import {useEffect} from "react";
import ImageUploadItem from "../../../commons/items/imageUpload/imageUpload.index";
import {useUpdateUsedItem} from "../../../commons/customs/hooks/useUpdateUsedItem";
import AddressItem from "../../../commons/items/address/address.index";
import {IQuery} from "../../../../commons/types/generated/types";

interface IProductsRegistrationUIProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem"> | undefined;
}

export default function ProductsRegistrationUI(
  props: IProductsRegistrationUIProps
) {
  const {
    register,
    setValue,
    trigger,
    handleSubmit,
    formState: {errors},
  } = useFormProductsRegistration();

  const {createUsedItemSubmit, fileList, setFileList} = useCreateUsedItem();
  const {createUpdateItemSubmit} = useUpdateUsedItem();

  useEffect(() => {
    if (props.isEdit && props.data) {
      setValue("name", props.data?.fetchUseditem.name);
      setValue("remarks", props.data?.fetchUseditem.remarks);
      setValue("contents", props.data?.fetchUseditem.contents);
      setValue("price", Number(props.data?.fetchUseditem.price));
      setValue(
        "useditemAddress.zipcode",
        props.data.fetchUseditem.useditemAddress?.zipcode
      );
      setValue(
        "useditemAddress.address",
        props.data.fetchUseditem.useditemAddress?.address
      );
      setValue(
        "useditemAddress.addressDetail",
        props.data.fetchUseditem.useditemAddress?.addressDetail
      );
    }
  }, [props.isEdit, props.data, setValue]);

  return (
    <>
      <S.Wrapper
        onSubmit={handleSubmit(
          props.isEdit
            ? createUpdateItemSubmit({
                fileList,
                setValue,
              })
            : createUsedItemSubmit
        )}
      >
        <span>
          <TitleItem title={`상품 ${props.isEdit ? "수정" : "등록"}`} />
        </span>
        <S.Contents>
          <li>
            <div>
              <span>
                <LabelItem label="이미지" fontSize="18px" />
              </span>
              <S.ImageContents>
                <ImageUploadItem
                  fileList={fileList}
                  setFileList={setFileList}
                  dataImages={props.data?.fetchUseditem.images}
                />
              </S.ImageContents>
            </div>
          </li>
          <li>
            <div>
              <span>
                <LabelItem label="상품 이름" fontSize="18px" />
              </span>
              <InputItem
                height="48px"
                border="1px solid #ddd"
                padding="16px"
                placeHolder="상품 이름을 입력해주세요."
                register={register("name")}
                defaultValue={props.data?.fetchUseditem.name}
              />
              <ValidationItem
                error={errors.name?.message}
                marginTop="8px"
                marginLeft="16px"
              />
            </div>
          </li>
          <li>
            <div>
              <span>
                <LabelItem label="상품 소개" fontSize="18px" />
              </span>
              <InputItem
                height="48px"
                border="1px solid #ddd"
                padding="16px"
                placeHolder="간단하게 상품 소개를 입력해주세요."
                register={register("remarks")}
                defaultValue={props.data?.fetchUseditem.name}
              />
              <ValidationItem
                error={errors.remarks?.message}
                marginTop="8px"
                marginLeft="16px"
              />
            </div>
          </li>
          <li>
            <div>
              <span>
                <LabelItem label="상품 내용" fontSize="18px" />
              </span>
              <WebEditorItem
                placeHolder="내용을 입력해주세요."
                setValue={setValue}
                trigger={trigger}
                contents={props.data?.fetchUseditem.contents}
              />
              <ValidationItem
                error={errors.contents?.message}
                marginTop="8px"
                marginLeft="16px"
              />
            </div>
          </li>
          <li>
            <div>
              <span>
                <LabelItem label="판매 가격" fontSize="18px" />
              </span>
              <InputItem
                height="48px"
                border="1px solid #ddd"
                padding="16px"
                placeHolder="판매 가격을 입력해주세요."
                register={register("price")}
                defaultValue={props.data?.fetchUseditem.price}
              />
              <ValidationItem
                error={errors.price?.message}
                marginTop="8px"
                marginLeft="16px"
              />
            </div>
          </li>
          <li>
            <div>
              <span>
                <LabelItem label="태그" fontSize="18px" />
              </span>
              <InputItem
                height="48px"
                border="1px solid #ddd"
                padding="16px"
                placeHolder="태그를 입력주세요. (ex: #태그 #태그 #태그)"
                register={register("tags")}
                defaultValue={props.data?.fetchUseditem.tags
                  ?.map((tag) => `${tag} `)
                  .join("")}
              />
              <ValidationItem
                error={errors.tags?.message}
                marginTop="8px"
                marginLeft="16px"
              />
            </div>
          </li>
          <li>
            <div>
              <span>
                <LabelItem label="주소" fontSize="18px" />
              </span>
              <S.AddressBox>
                <AddressItem
                  setValue={setValue}
                  zipcode={register("useditemAddress.zipcode")}
                  address={register("useditemAddress.address")}
                  addressDetail={register("useditemAddress.addressDetail")}
                  dataAddress={props.data?.fetchUseditem.useditemAddress}
                  isEdit={props.isEdit}
                />
              </S.AddressBox>
            </div>
          </li>
        </S.Contents>
        <S.ButtonBox>
          <li>
            <ButtonItem
              title="취소"
              width="160px"
              height="56px"
              border="1px solid #e76161"
              borderRadius="2px"
              color="#e76161"
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
              backgroundColor="#e76161"
              fontSize="20px"
              fontFamilly="NanumBold"
              hoverBackgroundColor="#c64343"
              transition="all 0.3s ease-in-out"
            />
          </li>
        </S.ButtonBox>
      </S.Wrapper>
    </>
  );
}
