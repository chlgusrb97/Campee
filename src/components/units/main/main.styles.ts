import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 92px 50px 130px;
  background-color: #fff;

  > span {
    display: inline-block;
    width: 100%;
    margin-bottom: 98px;
    text-align: center;
  }
`;

export const Products = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4%;

  > li {
    width: 22%;
  }
`;
