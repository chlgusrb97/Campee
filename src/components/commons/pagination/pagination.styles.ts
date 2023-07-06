import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";

interface IPageNumberProps {
  isActive: boolean;
}

interface ILeftArrowButtonProps {
  isDisabled: boolean;
}

interface IRightArrowButtonProps {
  isDisabled: boolean;
}

export const PageNavigation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  button {
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    color: #ddd;
    background-color: #fff;
    transition: all 0.3s ease-in-out;

    @media (max-width: 767px) {
      width: 24px;
      height: 24px;
    }
  }
`;

export const PageNumber = styled.span`
  padding: 0 2px;
  margin: 0 5px;
  font-size: 14px;
  color: ${(props: IPageNumberProps) => (props.isActive ? "#000" : "#999")};
  font-family: Nanum-Bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    color: #000;
  }

  @media (max-width: 767px) {
    margin: 0 3px;
  }
`;

export const LeftArrow = styled.div<ILeftArrowButtonProps>`
  button {
    cursor: ${(props: ILeftArrowButtonProps) =>
      props.isDisabled ? "default " : "pointer"};

    :not(:disabled):hover {
      border: ${(props) => (props.isDisabled ? "none" : "1px solid #000")};
      color: ${(props) => (props.isDisabled ? "#000" : "inherit")};
    }
  }

  > button:last-of-type {
    margin-right: 14px;
    margin-left: 5px;

    @media (max-width: 767px) {
      margin-right: 7px;
    }
  }
`;

export const LeftIcon = styled(LeftOutlined)`
  font-size: 14px;
`;

export const DoubleLeftIcon = styled(DoubleLeftOutlined)`
  font-size: 14px;
`;

export const RightArrow = styled.div<IRightArrowButtonProps>`
  button {
    cursor: ${(props: IRightArrowButtonProps) =>
      props.isDisabled ? "default" : "pointer"};

    :not(:disabled):hover {
      border: ${(props) => (props.isDisabled ? "none" : "1px solid #000")};
      color: ${(props) => (props.isDisabled ? "#000" : "inherit")};
    }
  }

  > button:first-of-type {
    margin-right: 5px;
    margin-left: 14px;

    @media (max-width: 767px) {
      margin-left: 7px;
    }
  }
`;

export const RightIcon = styled(RightOutlined)`
  font-size: 14px;
`;

export const DoubleRightIcon = styled(DoubleRightOutlined)`
  font-size: 14px;
`;
