import styled from "@emotion/styled";

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
