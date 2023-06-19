import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;

  > span {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;

export const BestProducts = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;

  > li {
    width: 22%;
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
  }
`;

export const AllProducts = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 20px;
  gap: 4%;

  > li {
    width: 22%;
    border: 1px solid #ddd;
    margin-bottom: 50px;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
  }
`;

export const ItemBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 70px 0 40px;
`;

export const ButtonBox = styled.div`
  position: absolute;
  right: 0;
`;
