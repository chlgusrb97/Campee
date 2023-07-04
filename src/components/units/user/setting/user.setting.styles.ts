import styled from "@emotion/styled";

interface ITitleButtonProps {
  active: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleButtonBox = styled.ul`
  display: flex;
  align-items: center;
  padding-bottom: 20px;

  > li:not(:last-of-type) {
    margin-right: 12px;
  }
`;

export const TitleButton = styled.button<ITitleButtonProps>`
  font-size: 18px;
  font-family: NanumBold;
  color: ${(props) => (props.active ? "#e76161" : "#a9a9a9")};
  background-color: transparent;
  cursor: pointer;
`;
