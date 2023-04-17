import {Global} from "@emotion/react";
import {AppProps} from "next/app";
import {RecoilRoot} from "recoil";
import ApolloSetting from "../src/components/commons/apollo/apollo.index";
import {globalStyles} from "../src/commons/styles/globalStyles";
import Layout from "../src/components/layout/layout.index";

export default function App({Component}: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}
