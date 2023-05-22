import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 50px 50px 160px;
  background-color: #fff;

  > span {
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 0 0 16px;
  }
`;

export const BoardsList = styled.div`
  width: 100%;
  border-top: 2px solid #555;
`;

export const BoardListTitle = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #ddd;
  background-color: #f7f7f7;

  span {
    text-align: center;
    font-size: 14px;

    :first-of-type {
      width: 30%;
    }

    :nth-of-type(2) {
      width: 70%;
    }

    :nth-child(3),
    :nth-child(4),
    :nth-child(5) {
      width: 150px;
    }
  }
`;

export const BoardListContents = styled.ul`
  display: flex;
  flex-direction: column;

  > li {
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #ddd;
    cursor: pointer;

    p {
      font-size: 14px;

      :first-of-type {
        padding: 0 30px;
        width: 30%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
      }

      :nth-of-type(2) {
        width: 70%;
        padding: 0 30px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
      }

      :nth-child(3),
      :nth-child(4),
      :nth-child(5) {
        width: 150px;
        padding: 0 10px;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
      }
    }

    /* p:not(:first-of-type),
    p:not(:nth-of-type(2)) {
      width: 150px;
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
    }*/

    :hover {
      background-color: #f7f7f7f7;
    }
  }
`;

export const FooterContents = styled.div`
  position: relative;
  width: 100%;
  margin-top: 40px;

  > div:first-of-type {
    width: 100%;
    padding-top: 10px;
  }

  > div:not(:first-of-type) {
    position: absolute;
    top: 0%;
    right: 0;
  }
`;
