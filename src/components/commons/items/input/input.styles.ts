import {SearchOutlined} from "@ant-design/icons";
import styled from "@emotion/styled";

interface IStyleProps {
  width: string;
  height: string;
  padding: string;
  fontSize: string;
}

export const Input = styled.input<IStyleProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  color: #000;
  background-color: #e9e9e9;
  font-size: ${(props) => props.fontSize};
  outline: none;

  ::placeholder {
    color: #a9a9a9;
    font-size: ${(props) => props.fontSize};
  }
`;

// export const Wrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   width: 534px;
//   border-bottom: 3px solid #000;

//   > input {
//     width: calc(100%);
//     padding: 15px;
//     background-color: transparent;
//     outline: none;
//   }
// `;

// export const Search = styled(SearchOutlined)`
//   padding: 0 15px;
//   color: #212428;
//   font-size: 15px 20px;
//   cursor: pointer;
// `;
