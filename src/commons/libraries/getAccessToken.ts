import {gql, GraphQLClient} from "graphql-request";

interface IRestoreAccessToken {
  restoreAccessToken: {
    accessToken: string;
  };
}

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken {
      accessToken
    }
  }
`;

export const getAccessToken = async () => {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend-practice.codebootcamp.co.kr/graphql",
      {credentials: "include"}
    );
    const result = await graphQLClient.request<IRestoreAccessToken>(
      RESTORE_ACCESS_TOKEN
    );
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
