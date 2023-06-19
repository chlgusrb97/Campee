import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {PlusOutlined} from "@ant-design/icons";
import {Modal} from "antd";
import type {RcFile, UploadProps} from "antd/es/upload";
import type {UploadFile, UploadFileStatus} from "antd/es/upload/interface";
import {UploadWrapper} from "./imageUpload.styles";
import {IQuery} from "../../../../commons/types/generated/types";
import {Maybe} from "yup";

interface IImageUploadItemProps {
  fileList: UploadFile<any>[];
  setFileList: Dispatch<SetStateAction<UploadFile<any>[]>>;
  dataImages?: Maybe<string[]> | undefined;
}

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export default function ImageUploadItem(props: IImageUploadItemProps) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  useEffect(() => {
    if (props.dataImages) {
      const newFileList = props.dataImages.map((image, index) => ({
        uid: String(index),
        name: image,
        status: "done" as UploadFileStatus,
        url: `https:storage.googleapis.com/${image}`,
      }));
      props.setFileList(newFileList);
    }
  }, [props.dataImages]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const handleChange: UploadProps["onChange"] = ({fileList: newFileList}) => {
    props.setFileList(newFileList);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{marginTop: 8}}>Upload</div>
    </div>
  );

  return (
    <>
      <UploadWrapper
        listType="picture-card"
        fileList={props.fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {props.fileList.length >= 4 ? null : uploadButton}
      </UploadWrapper>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img style={{width: "100%"}} src={previewImage} />
      </Modal>
    </>
  );
}
