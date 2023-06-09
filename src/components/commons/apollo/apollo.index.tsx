import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  fromPromise,
} from "@apollo/client";
import {createUploadLink} from "apollo-upload-client";
import {useEffect} from "react";
import {useRecoilState, useRecoilValueLoadable} from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadble,
} from "../../../commons/stores/stores";
import {onError} from "@apollo/client/link/error";
import {getAccessToken} from "../../../commons/libraries/getAccessToken";

interface IApolloSetting {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSetting) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const newAccessTokenValue = useRecoilValueLoadable(restoreAccessTokenLoadble);

  useEffect(() => {
    void newAccessTokenValue.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? "");
    });
  }, []);

  const errorLink = onError(({graphQLErrors, operation, forward}) => {
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? "");
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`,
                },
              });
            })
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend11.codebootcamp.co.kr/graphql07",
    headers: {Authorization: `Bearer ${accessToken}`},
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  // prettier-ignore
  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
