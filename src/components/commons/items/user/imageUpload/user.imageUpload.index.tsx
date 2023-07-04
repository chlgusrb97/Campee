import {ChangeEvent, useRef, useState} from "react";
import * as S from "./user.imageUpload.styles";
import {useMutationUploadFile} from "../../../customs/useMutations/useMutations";
import {Modal} from "antd";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export default function UserImageUpload() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutationUploadFile();

  const onClickUploadImage = (): void => {
    fileRef.current?.click();
  };

  const onChangeImageUrl = (imageUrl: string | undefined) => {
    setImageUrl(String(imageUrl));
  };

  const imageUploadCheck = (file: File | undefined) => {
    if (file?.size === undefined) {
      Modal.error({content: "파일이 없습니다."});
      return false;
    }
    if (file.size > MAX_FILE_SIZE) {
      Modal.error({content: "파일의 용량은 5MB를 초과할 수 없습니다."});
      return false;
    }
    return true;
  };

  const onChangeFileImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    // 이미지 용량 체크
    const isCheck = imageUploadCheck(file);
    if (!isCheck) return;

    try {
      const result = await uploadFile({variables: {file}});
      onChangeImageUrl(result.data?.uploadFile.url);
    } catch (error) {
      if (error instanceof Error) Modal.error({content: error.message});
    }
  };

  const onClickCancel = () => {
    setImageUrl("");
  };

  return (
    <S.Wrapper>
      <S.ImageBox>
        {imageUrl !== "" ? (
          <img src={`https://storage.googleapis.com/${imageUrl}`} />
        ) : (
          <S.UserIcon />
        )}
      </S.ImageBox>
      <S.RightContents>
        <S.Name>홍길동</S.Name>
        <S.ImageButtons>
          <button onClick={onClickUploadImage}>이미지 변경</button>
          <button onClick={onClickCancel}>삭제</button>
        </S.ImageButtons>
      </S.RightContents>
      <S.UploadFileHidden
        type="file"
        ref={fileRef}
        onChange={onChangeFileImage}
      />
    </S.Wrapper>
  );
}
