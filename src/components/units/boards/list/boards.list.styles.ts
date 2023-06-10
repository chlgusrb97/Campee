import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;

  > span {
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 0 0 16px;
    border-bottom: 2px solid #555;
  }
`;

export const BestBoards = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;

  > li {
    width: 22%;
    cursor: pointer;
  }
`;

export const BestBoardImgBox = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 4px;
  background-color: #ddd;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  > div {
  }
`;

export const BestBoardFooterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-family: NanumBold;
    margin-top: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }
`;

export const FooterUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px 0;
`;

export const FooterUserImgBox = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 6px;
  background-color: #ddd;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const FooterUserName = styled.p`
  font-size: 14px;
`;

export const FooterEntry = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > p {
    color: #777;
    font-size: 12px;

    :first-of-type {
      margin-right: 12px;
    }
  }
`;

export const BoardsCount = styled.h3`
  display: inline-block;
  width: 100%;
  padding-bottom: 6px;
  font-size: 16px;
  letter-spacing: 0.2px;
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
      width: 15%;
      text-align: center;
      white-space: nowrap;
      padding: 0 30px;
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
        width: 15%;
        text-align: center;
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
