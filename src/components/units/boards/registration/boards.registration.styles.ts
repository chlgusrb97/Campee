import styled from "@emotion/styled";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;

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
    border-bottom: 1px solid #ddd;
    padding: 40px 0;

    :first-of-type {
      justify-content: space-between;
    }

    :nth-of-type(2) {
      align-items: stretch;
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

export const WriterBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 12px;

  > span {
    margin-bottom: 15px;
  }
`;

export const PasswordBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 12px;

  > span {
    margin-bottom: 15px;
  }
`;

export const ImageContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;

export const ButtonBox = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;

  > li:last-of-type {
    margin-left: 20px;
  }
`;

export const AddressBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MapBox = styled.div`
  width: 300px;
  height: 250px;
  margin-right: 26px;
  background-color: #f7f7f7;
`;
