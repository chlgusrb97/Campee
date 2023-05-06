import {CloseOutlined, FormOutlined, HeartOutlined} from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 170px;
`;

export const ImageBox = styled.div`
  width: 50%;
  height: 611px;
  background-color: #a0a0a0;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Contents = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

export const ContentsHeader = styled.div`
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    > p {
      color: #000;
      font-size: 12px;
    }
  }

  > h2 {
    font-size: 40px;
    font-family: NanumBold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const IconBox = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  > li {
    margin-left: 20px;
  }
`;

export const Edit = styled(FormOutlined)`
  color: #bdbdbd;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    color: #000;
  }
`;

export const Delete = styled(CloseOutlined)`
  color: #bdbdbd;
  font-size: 20px;
  cursor: pointer;

  transition: all 0.3s ease-in-out;

  :hover {
    color: #000;
  }
`;

export const ContentsInfo = styled.div`
  margin: 90px 0 30px;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    :first-of-type {
      border-bottom: 3px solid #555;
      padding-bottom: 22px;
    }

    :last-of-type {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #c0c0c0;
      padding: 26px 15px 14px;
    }
  }
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > span {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    font-size: 12px;

    :first-of-type {
      margin-right: 62px;
    }
  }

  p {
    margin-right: 5px;
    font-size: 14px;
    font-family: NanumBold;
  }
`;

export const Pick = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  p {
    font-size: 12px;
    font-family: NanumBold;
  }
`;

export const Heart = styled(HeartOutlined)`
  margin: 0 4px;
  color: #c0c0c0;
  font-size: 18px;
`;

export const Remarks = styled.p`
  font-size: 20px;
`;

export const Tag = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;

  > li {
    color: #f65656;
    font-size: 16px;

    :not(:last-of-type) {
      margin-right: 8px;
    }
  }
`;

export const ButtonBox = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > li {
    white-space: nowrap;

    :first-of-type {
      margin-right: 8px;
    }

    :last-of-type {
      margin-left: 8px;
    }
  }
`;
