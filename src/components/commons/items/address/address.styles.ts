import styled from "@emotion/styled";

export const MapBox = styled.div`
  width: 300px;
  height: 250px;
  margin-right: 26px;
  background-color: #f7f7f7;
`;

export const AddressContents = styled.ul`
  width: calc(100% - 326px);
  display: flex;
  flex-direction: column;

  > li {
    display: flex;
    flex-direction: row;
    align-items: center;

    :not(:last-of-type) {
      margin-bottom: 18px;
    }
  }
`;
