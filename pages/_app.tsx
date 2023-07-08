import {Global} from "@emotion/react";
import {AppProps} from "next/app";
import {RecoilRoot} from "recoil";
import ApolloSetting from "../src/components/commons/apollo/apollo.index";
import {globalStyles} from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout/layout.index";
import Head from "next/head";

export default function App({Component}: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Head>
            <link rel="icon" href="/favicon.ico" sizes="20px" />
          </Head>
          <Global styles={globalStyles} />
          <Layout>
            <Component />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}
