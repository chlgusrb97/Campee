import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 200px;

  > div {
    width: 100%;
    height: 100px;

    :first-of-type {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      padding: 0 50px;
    }

    :last-of-type {
      background-color: #000;
      padding: 0 50px;
    }
  }
`;

export const Logo = styled.h1`
  font-size: 36px;
`;

export const Tnb = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;

  > li {
    margin-left: 40px;

    :last-of-type {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const BasketCount = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  border-radius: 20px;
  background-color: #f65656;
  user-select: none;

  > span {
    color: #fff;
    font-size: 12px;
  }
`;

export const Gnb = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 22px;

  > ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    :first-of-type {
      > li:not(:last-of-type) {
        margin-right: 100px;
      }

      ::after {
        content: "";
        height: 19px;
        border: 1px solid #fff;
        margin: 0 136px;
      }
    }

    :last-of-type {
      > li {
        margin-right: 100px;
      }
    }
  }
`;
