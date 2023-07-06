import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;

  @media (max-width: 1023px) {
    padding: 0 20px;
  }

  @media (max-width: 767px) {
    padding: 0 10px;
  }

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
  margin-bottom: 40px;

  @media (max-width: 767px) {
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  > li {
    width: 22%;
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;

    @media (max-width: 767px) {
      width: 48%;
      margin-bottom: 4%;
    }
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
    margin-bottom: 4%;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;

    @media (max-width: 767px) {
      width: 48%;
    }
  }
`;

export const ItemBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 40px 0;

  @media (max-width: 1023px) {
    justify-content: flex-start;
  }
`;

export const ButtonBox = styled.div`
  position: absolute;
  right: 0;

  @media (max-width: 1023px) {
    right: 20px;
  }

  @media (max-width: 767px) {
    right: 10px;
  }
`;
