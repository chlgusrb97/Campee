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
    text-align: center;
    font-size: 14px;
    font-family: NanumBold;
    width: 25%;

    @media (max-width: 767px) {
      font-size: 12px;
    }

    :first-of-type {
      width: 50%;
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
    text-align: center;
    width: 25%;

    @media (max-width: 767px) {
      font-size: 14px;
    }

    :first-of-type {
      width: 50%;
    }
  }
`;

export const Creation = styled.p`
  color: #666;
  white-space: nowrap;
`;

export const TopupId = styled.p`
  width: 100%;
  color: #666;
  white-space: nowrap;
`;

export const PlusPoint = styled.p`
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
