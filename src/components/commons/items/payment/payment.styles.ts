import {CaretDownOutlined} from "@ant-design/icons";
import styled from "@emotion/styled";
import {Modal} from "antd";

interface IStyleProps {
  isShowPrice: boolean;
}

export const NewModal = styled(Modal)`
  .ant-modal-content {
    text-align: center;
    padding: 76px 40px 40px;
  }

  .ant-modal-title {
    font-size: 20px;
    font-family: NanumBold;
  }
`;

export const PaymentContents = styled.div``;

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #000;
  padding: 8px 16px;
  margin-top: 42px;
  color: #000;
  font-family: NanumBold;

  > input {
    width: 100%;
    background-color: transparent;
    font-size: 16px;
    font-family: NanumBold;

    ::placeholder {
      color: #828282;
      font-size: 16px;
      font-family: NanumRegular;
    }
  }
`;

export const ArrowIcon = styled(CaretDownOutlined)<IStyleProps>`
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: ${(props) => (props.isShowPrice ? "rotate(180deg)" : "rotate(0)")};
`;

export const PriceList = styled.ul`
  border-radius: 10px;
  margin-top: 16px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  > li {
    color: #e0e0e0;
    padding: 16px;
    text-align: left;
    font-family: NanumBold;
    cursor: pointer;

    :hover {
      color: #000;
    }

    :not(:last-of-type) {
      border-bottom: 1px solid #e0e0e0;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  border-radius: 10px;
  padding: 16px 0;
  margin-top: 40px;
  color: #fff;
  background-color: #000;
  cursor: pointer;
  user-select: none;

  :disabled {
    background-color: #bdbdbd;
    cursor: auto;
  }
`;
