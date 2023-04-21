import {SearchOutlined} from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 534px;
  border-bottom: 3px solid #000;

  > input {
    width: calc(100%);
    padding: 15px;
    background-color: transparent;
    outline: none;
  }
`;

export const Search = styled(SearchOutlined)`
  padding: 0 15px;
  color: #212428;
  font-size: 15px 20px;
  cursor: pointer;
`;
