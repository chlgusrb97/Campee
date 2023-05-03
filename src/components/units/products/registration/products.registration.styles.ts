import styled from "@emotion/styled";

export const Wrapper = styled.form`
  padding: 104px 90px 112px;

  > span {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-bottom: 3px solid #555555;
    padding: 0 40px 76px;
  }
`;

export const Contents = styled.ul`
  display: flex;
  flex-direction: column;
  border-bottom: 3px solid #555;
  padding-bottom: 76px;

  > li {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 30px 40px;

    :not(:last-of-type) {
      border-bottom: 1px solid #999;
    }

    :nth-of-type(3) {
      align-items: flex-start;

      > span {
        margin-top: 20px;
      }
    }

    :nth-of-type(6) {
      flex-direction: column;
      align-items: flex-start;

      > div {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 30px;
      }
    }

    :last-of-type {
      flex-direction: column;
      align-items: flex-start;
      padding-bottom: 0;
    }

    > span {
      width: 256px;
      display: inline-block;
    }

    > div {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }
`;

export const MapBox = styled.div`
  width: 384px;
  height: 252px;
  margin-right: 26px;
`;

export const AddressContents = styled.ul`
  width: calc(100% - 410px);
  display: flex;
  flex-direction: column;

  > li {
    display: flex;
    flex-direction: row;
    align-items: center;

    :nth-of-type(2) {
      margin: 27px 0 24px;
    }

    > div {
      margin-right: 16px;

      > input {
        width: 77px;
        height: 52px;
        border: 1px solid #bdbdbd;
        color: #bdbdbd;
        background-color: #fff;
        text-align: center;
        font-size: 16px;
        outline: none;
      }
    }
  }
`;

export const ImageContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;

export const SubmitButtonBox = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 72px;

  > li:first-of-type {
    margin-right: 8px;
  }

  > li:last-of-type {
    margin-left: 8px;
  }
`;
