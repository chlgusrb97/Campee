import styled from "@emotion/styled";
import {FaUserCircle} from "react-icons/fa";

export const Wrapper = styled.div`
  display: flex;
`;

export const ImageBox = styled.div`
  width: 88px;
  height: 88px;
  background-color: #fff;
  border-radius: 50px;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const UserIcon = styled(FaUserCircle)`
  width: 100%;
  height: 100%;
  font-size: 100px;
  color: #ddd;
`;

export const RightContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
  margin-left: 12px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-family: NanumBold;
`;

export const ImageButtons = styled.div`
  display: flex;
  align-items: center;

  > button {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 8px 16px;
    margin-right: 6px;
    color: #666;
    background-color: transparent;
    font-size: 12px;
    cursor: pointer;

    :hover {
      background-color: #fafafa;
    }
  }
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
