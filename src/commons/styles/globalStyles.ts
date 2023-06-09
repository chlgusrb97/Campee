import {css} from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
    text-decoration: none;
    font-family: NanumRegular;
  }

  @font-face {
    font-family: KanitBold;
    src: url("/fonts/Kanit-Bold.ttf");
  }

  @font-face {
    font-family: NanumBold;
    src: url("/fonts/NanumGothic-Bold.ttf");
  }

  @font-face {
    font-family: NanumRegular;
    src: url("/fonts/NanumGothic-Regular.ttf");
  }
`;
