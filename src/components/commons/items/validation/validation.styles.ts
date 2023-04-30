import styled from "@emotion/styled";

interface IStyleProps {
  height: string;
  marginTop: string;
  marginRight: string;
  marginBottom: string;
  marginLeft: string;
  fontSize: string;
}

export const ErrorMessage = styled.p<IStyleProps>`
  height: ${(props) => props.height};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-left: ${(props) => props.marginLeft};
  margin-bottom: ${(props) => props.marginBottom};
  color: #f65656;
  font-size: ${(props) => props.fontSize};
`;
