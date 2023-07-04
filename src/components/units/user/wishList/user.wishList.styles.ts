import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 18px;
  font-family: NanumBold;
  padding-bottom: 20px;
`;

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

export const Product = styled.ul`
  display: flex;
  flex-direction: column;

  > li {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 20px 0;
  }
`;

export const ProductLeftContents = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProductImgBox = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 4px;
  background-color: #ddd;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6px 0;
  margin-left: 12px;
`;

export const ProductInfoTop = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.h1`
  font-size: 16px;
  margin-bottom: 4px;
`;

export const ProductPrice = styled.span`
  display: flex;
  align-items: flex-end;
  font-size: 20px;
  font-family: NanumBold;

  > p {
    margin-bottom: 2px;
    margin-left: 4px;
    font-size: 12px;
    font-family: NanumBold;
  }
`;

export const ProductCreation = styled.p`
  font-size: 12px;
  color: #777;
`;

export const UserProductRightContents = styled.div`
  font-size: 16px;

  > p {
    font-family: NanumBold;
  }
`;

export const CancelButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 20px;
  color: #777;
  background-color: transparent;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
