import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export const WebEditor = styled(ReactQuill)`
  width: 100%;

  .ql-editor {
    height: 430px;
  }

  .ql-editor.ql-blank::before {
    color: #a9a9a9;
    font-style: normal;
    font-size: 14px;
  }
`;
