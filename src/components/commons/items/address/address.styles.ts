import styled from "@emotion/styled";

export const MapBox = styled.div`
  width: 300px;
  height: 250px;
  border: 1px solid #ddd;
  margin-right: 26px;
  background-color: #f7f7f7;

  @media (max-width: 767px) {
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
  }
`;

export const AddressContents = styled.ul`
  width: calc(100% - 326px);
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    width: 100%;
  }

  > li {
    display: flex;
    flex-direction: row;
    align-items: center;

    :not(:last-of-type) {
      margin-bottom: 18px;
    }
  }
`;
