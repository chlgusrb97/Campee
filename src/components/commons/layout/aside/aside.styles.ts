import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 160px;
  right: calc(50% - 630px);
  width: 90px;
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #fff;

  > h3 {
    color: #777;
    font-size: 12px;
    font-family: NanumBold;
    margin-bottom: 16px;
  }
`;

export const Number = styled.p`
  color: #e76161;
  font-size: 12px;
  font-family: NanumBold;
  margin-bottom: 16px;
`;

export const ProductsList = styled.ul`
  width: 100%;

  > li {
    width: 68px;
    height: 68px;
    background-color: #ddd;
    cursor: pointer;

    :not(:last-of-type) {
      margin-bottom: 6px;
    }
  }
`;

export const ProductsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
