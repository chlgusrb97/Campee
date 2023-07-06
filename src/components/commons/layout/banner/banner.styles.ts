import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  background: url("images/banner.jpg") center/cover no-repeat;

  > h2 {
    color: #fff;
    font-size: 48px;
    letter-spacing: 0.1rem;
    font-family: NanumBold;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    @media (max-width: 767px) {
      font-size: 38px;
    }
  }
`;
