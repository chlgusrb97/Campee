import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 50px 50px 160px;
  background-color: #fff;

  > span {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid #555555;
    padding: 0 0 16px;
  }
`;

export const BestBoards = styled.div``;

export const BoardsCount = styled.p`
  margin: 60px 0 10px;
  font-size: 14px;
`;

export const BoardsList = styled.div`
  width: 100%;
  border-top: 1px solid #000;
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
  }

  span:not(:nth-of-type(2)) {
    width: 10%;
  }

  span:nth-of-type(2) {
    width: 60%;
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

    p:not(:nth-of-type(2)) {
      width: 10%;
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
    }

    p:nth-of-type(2) {
      width: 60%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
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

  > div {
    position: absolute;
    top: 0%;
    right: 0;
  }
`;

export const PageNavigation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  button {
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    color: #ddd;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    :hover {
      border: 1px solid #000;
      color: #000;
    }
  }
`;

export const PageNumber = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 14px;

  > li {
    padding: 0 2px;
    margin: 0 5px;
    font-size: 14px;
    color: #999;
    font-family: Nanum-Bold;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    :hover {
      color: #000;
    }
  }
`;

export const LeftArrow = styled.div`
  > button:first-of-type {
    margin-right: 5px;
  }
`;

export const LeftIcon = styled(LeftOutlined)`
  font-size: 14px;
`;

export const DoubleLeftIcon = styled(DoubleLeftOutlined)`
  font-size: 14px;
`;

export const RightArrow = styled.div`
  > button:last-of-type {
    margin-left: 5px;
  }
`;

export const RightIcon = styled(RightOutlined)`
  font-size: 14px;
`;

export const DoubleRightIcon = styled(DoubleRightOutlined)`
  font-size: 14px;
`;
