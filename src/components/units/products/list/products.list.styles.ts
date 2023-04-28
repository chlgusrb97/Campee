import {SearchOutlined} from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 50px;
  background-color: #f1f1f1;
`;

export const BestContents = styled.div`
  padding: 40px;
  background-color: #fff;

  > span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 86px;
  }
`;

export const BestProducts = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 4%;

  > li {
    width: 22%;
  }
`;

export const ProductsContents = styled.div`
  margin-top: 36px;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #555;
    padding: 0 40px 18px;
    margin-bottom: 46px;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 534px;
  border-bottom: 3px solid #000;
`;

export const Search = styled(SearchOutlined)`
  padding: 0 15px;
  color: #212428;
  font-size: 22px;
  cursor: pointer;
`;

export const Products = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4%;

  > li {
    width: 22%;
    margin-bottom: 50px;
  }
`;
