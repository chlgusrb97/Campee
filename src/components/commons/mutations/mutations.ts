import {gql} from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUserExample($password: String!, $email: String!) {
    loginUserExample(password: $password, email: $email) {
      accessToken
    }
  }
`;
