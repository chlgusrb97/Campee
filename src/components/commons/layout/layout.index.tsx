import {useRouter} from "next/router";
import {
  JOIN_PATH,
  LOGIN_PATH,
  PRODUCTS_DETAIL_PATH,
  PRODUCTS_LIST_PATH,
  PRODUCTS_REGISTRATION_PATH,
} from "../../../commons/paths/paths";
import LayoutBanner from "./banner/banner.index";
import LayoutFooter from "./footer/footer.index";
import LayoutHeader from "./header/header.index";
import {useQuery} from "@apollo/client";
import {USER_LOGGED_IN} from "../queries/queries";
import {IQuery} from "../../../commons/types/generated/types";

const HIDDEN_BANNER = [
  PRODUCTS_LIST_PATH,
  PRODUCTS_REGISTRATION_PATH,
  LOGIN_PATH,
  JOIN_PATH,
];

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const {data} = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(USER_LOGGED_IN);

  console.log(data);

  const isHiddenBanner =
    HIDDEN_BANNER.includes(router.asPath) ||
    router.asPath.includes(PRODUCTS_DETAIL_PATH);

  return (
    <>
      <LayoutHeader />
      {!isHiddenBanner && <LayoutBanner />}
      <div>{props.children}</div>
      <LayoutFooter />
    </>
  );
}
