import InputItem from "../../../commons/items/input/input.index";
import LabelItem from "../../../commons/items/label/label.index";
import TitleItem from "../../../commons/items/title/title.index";
import WebEditorItem from "../../../commons/items/webEditor/webEditor.index";
import ImageUploadItem from "../../../commons/items/imageUpload/imageUpload.index";
import * as S from "./boards.registration.styles";
import ButtonItem from "../../../commons/items/button/button.index";
import AddressItem from "../../../commons/items/address/address.index";
import {useFormBoardsRegistration} from "../../../commons/useForm/useForm";
import ValidationItem from "../../../commons/items/validation/validation.index";
import {useCreateBoard} from "../../../commons/customs/hooks/useCreateBoard";
import {IQuery} from "../../../../commons/types/generated/types";
import {useEffect} from "react";
import {useUpdateBoard} from "../../../commons/customs/hooks/useUpdateBoard";

interface IBoardsRegistrationUIProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard"> | undefined;
}

export default function BoardsRegistrationUI(
  props: IBoardsRegistrationUIProps
) {
  const {
    register,
    setValue,
    trigger,
    handleSubmit,
    formState: {errors},
  } = useFormBoardsRegistration();

  const {createBoardSubmit, fileList, setFileList} = useCreateBoard();
  const {updateBoardSubmit} = useUpdateBoard();

  useEffect(() => {
    if (props.isEdit && props.data) {
      setValue("writer", props.data?.fetchBoard.writer);
      setValue("title", props.data?.fetchBoard.title);
      setValue("contents", props.data?.fetchBoard.contents);
      setValue(
        "boardAddress.zipcode",
        props.data.fetchBoard.boardAddress?.zipcode
      );
      setValue(
        "boardAddress.address",
        props.data.fetchBoard.boardAddress?.address
      );
      setValue(
        "boardAddress.addressDetail",
        props.data.fetchBoard.boardAddress?.addressDetail
      );
      setValue("youtubeUrl", props.data.fetchBoard.youtubeUrl);
    }
  }, [props.isEdit, props.data, setValue]);

  return (
    <S.Wrapper
      onSubmit={handleSubmit(
        props.isEdit ? updateBoardSubmit(fileList) : createBoardSubmit
      )}
    >
      <span>
        <TitleItem title="LIFE 등록" fontSize="24px" />
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
                dataImages={props.data?.fetchBoard.images}
              />
            </S.ImageContents>
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
              register={register("writer")}
              defaultValue={props.data?.fetchBoard.writer}
              readOnly={!!props.data?.fetchBoard.writer}
            />
            <ValidationItem
              error={errors.writer?.message}
              marginTop="8px"
              marginLeft="16px"
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
              register={register("password")}
            />
            <ValidationItem
              error={errors.password?.message}
              marginTop="8px"
              marginLeft="16px"
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
              register={register("title")}
              defaultValue={props.data?.fetchBoard.title}
            />
            <ValidationItem
              error={errors.title?.message}
              marginTop="8px"
              marginLeft="16px"
            />
          </div>
        </li>
        <li>
          <div>
            <span>
              <LabelItem label="내용" fontSize="18px" />
            </span>
            <WebEditorItem
              placeHolder="내용을 입력해주세요."
              setValue={setValue}
              trigger={trigger}
              contents={props.data?.fetchBoard.contents}
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
              <LabelItem label="주소" fontSize="18px" />
            </span>
            <S.AddressBox>
              <AddressItem
                setValue={setValue}
                zipcode={register("boardAddress.zipcode")}
                address={register("boardAddress.address")}
                addressDetail={register("boardAddress.addressDetail")}
                dataAddress={props.data?.fetchBoard.boardAddress}
              />
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
              register={register("youtubeUrl")}
              defaultValue={props.data?.fetchBoard.youtubeUrl}
            />
          </div>
        </li>
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
      </S.Contents>
    </S.Wrapper>
  );
}
