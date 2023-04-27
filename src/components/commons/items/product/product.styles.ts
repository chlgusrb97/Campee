import {HeartOutlined} from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  cursor: pointer;

  > div:first-of-type {
    position: relative;
    width: 100%;
    height: 30vw;
    background-color: #c4c4c4;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  > div:last-of-type {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 18px;
  }
`;

export const Price = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;

  > p {
    margin-right: 23px;
    font-family: NanumBold;

    :first-of-type {
      color: #f65656;
    }
  }
`;

export const Name = styled.p`
  margin: 13px 0;
  color: #555;
`;

export const Info = styled.p`
  color: #555;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Heart = styled(HeartOutlined)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 22px;
  color: #555;
  z-index: 1;
  cursor: pointer;
`;
