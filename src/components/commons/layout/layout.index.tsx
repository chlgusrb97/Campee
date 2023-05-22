import {useRouter} from "next/router";
import {
  BOARDS_LIST_PATH,
  JOIN_PATH,
  LOGIN_PATH,
  PRODUCTS_DETAIL_PATH,
  PRODUCTS_LIST_PATH,
  PRODUCTS_REGISTRATION_PATH,
} from "../../../commons/paths/paths";
import LayoutBanner from "./banner/banner.index";
import LayoutFooter from "./footer/footer.index";
import LayoutHeader from "./header/header.index";

const HIDDEN_BANNER = [
  PRODUCTS_LIST_PATH,
  PRODUCTS_REGISTRATION_PATH,
  BOARDS_LIST_PATH,
  LOGIN_PATH,
  JOIN_PATH,
];

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

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
