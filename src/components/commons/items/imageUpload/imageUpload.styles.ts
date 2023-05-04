import styled from "@emotion/styled";
import {Upload} from "antd";

export const UploadWrapper = styled(Upload)`
  width: 180px;
  height: 180px;

  .ant-upload-list .ant-upload.ant-upload-select {
    width: 180px;
    height: 180px;
  }

  .ant-upload-list-item-container {
    width: 180px !important;
    height: 180px !important;
  }

  .ant-upload-list-item-uploading {
    justify-content: center !important;
  }

  .ant-upload-list-item-uploading .ant-upload-list-item-progress span {
    background-color: red;
    font-size: 24px;
  }
`;
