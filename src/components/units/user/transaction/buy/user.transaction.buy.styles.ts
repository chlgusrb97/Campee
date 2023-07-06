import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderContents = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #666;
  border-bottom: 1px solid #666;
  padding: 20px;
  background-color: #f7f7f7;

  > div {
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-family: NanumBold;

    @media (max-width: 767px) {
      font-size: 12px;
    }

    :not(:nth-of-type(2)) {
      width: 25%;
      white-space: nowrap;

      @media (max-width: 767px) {
        width: 100%;
      }
    }
  }
`;

export const ListContents = styled.ul`
  display: flex;
  flex-direction: column;

  > li {
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #ddd;
  }

  div {
    width: 100%;
    text-align: center;

    @media (max-width: 767px) {
      font-size: 14px;
    }

    :not(:nth-of-type(2)) {
      width: 25%;
      white-space: nowrap;

      @media (max-width: 767px) {
        width: 100%;
      }
    }
  }
`;

export const Creation = styled.p`
  color: #666;
  white-space: nowrap;
`;

export const ProductName = styled.p`
  color: #666;
  white-space: nowrap;
`;

export const MinusPoint = styled.p`
  color: #e76161;
  font-family: NanumBold;
  white-space: nowrap;
`;

export const MyPoint = styled.p`
  color: #666;
  font-family: NanumBold;
  white-space: nowrap;
`;

export const PageBox = styled.div`
  padding: 28px 0;
`;

export const ProductNoneBox = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
`;
