import styled from "@emotion/styled";

interface IStyleProps {
  fontSize: string;
}

export const Label = styled.label<IStyleProps>`
  color: #000;
  font-size: ${(props) => props.fontSize};
`;
