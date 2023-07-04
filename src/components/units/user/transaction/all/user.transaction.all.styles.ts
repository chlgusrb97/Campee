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
    width: 25%;
    text-align: center;
    font-size: 14px;
    font-family: NanumBold;
    white-space: nowrap;
  }
`;

export const ListContents = styled.ul`
  display: flex;
  flex-direction: column;

  > li {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #ddd;
  }

  div {
    width: 25%;
    text-align: center;
  }
`;

export const Creation = styled.p`
  color: #666;
  white-space: nowrap;
`;

export const Status = styled.p`
  color: #666;
  white-space: nowrap;
`;

export const Point = styled.p`
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
