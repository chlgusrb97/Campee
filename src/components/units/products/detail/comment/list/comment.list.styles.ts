import {CloseOutlined, FormOutlined} from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.ul`
  border-top: 1px solid #c0c0c0;
  border-bottom: 1px solid #c0c0c0;
  margin: 0 50px;

  > li {
    display: flex;
    flex-direction: row;
    padding: 40px 15px;

    :not(:last-of-type) {
      border-bottom: 1px solid #c0c0c0;
    }
  }
`;

export const Name = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 40px;
  margin-right: 40px;
  color: #fff;
  background-color: #000;
  white-space: nowrap;
`;

export const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    flex-direction: row;
  }
`;

export const Edit = styled(FormOutlined)`
  margin: 0 20px 0 60px;
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
