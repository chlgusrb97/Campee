import styled from "@emotion/styled";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;

  @media (max-width: 1023px) {
    padding: 0 20px;
  }

  @media (max-width: 767px) {
    padding: 0 10px;
    margin-top: 40px;
  }

  > span {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-bottom: 3px solid #000;
    padding: 0 0 20px;
  }
`;

export const Contents = styled.ul`
  > li {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 40px 0;

    :not(:last-of-type) {
      border-bottom: 1px solid #ddd;
    }

    > div {
      width: 100%;
      display: flex;
      flex-direction: column;

      > span {
        margin-bottom: 15px;
      }
    }
  }
`;

export const ImageContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AddressBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ButtonBox = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;

  @media (max-width: 1023px) {
    justify-content: center;
  }

  > li:last-of-type {
    margin-left: 20px;
  }
`;
