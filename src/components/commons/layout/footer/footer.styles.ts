import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 50px;
  border-top: 1px solid #555;
  background-color: #f1f1f1;
`;

export const Logo = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;

  a {
    font-family: NanumExtraBold;
    color: #000;
  }
`;

export const FooterInfo = styled.ul`
  > li {
    display: flex;
    flex-direction: row;
    align-items: center;

    :first-of-type {
      > p {
        margin-right: 88px;
      }
    }

    :nth-of-type(5) {
      > p {
        margin-right: 36px;
      }
    }

    :not(:last-of-type) {
      margin-bottom: 12px;
    }
  }
`;
