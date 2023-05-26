import {useRouter} from "next/router";
import {
  BOARDS_DETAIL_PATH,
  BOARDS_LIST_PATH,
  BOARDS_REGISTRATION_PATH,
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
  BOARDS_REGISTRATION_PATH,
  BOARDS_DETAIL_PATH,
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
    router.asPath.includes(PRODUCTS_DETAIL_PATH) ||
    router.asPath.includes(BOARDS_DETAIL_PATH);

  return (
    <>
      <LayoutHeader />
      {!isHiddenBanner && <LayoutBanner />}
      <div
        style={{
          maxWidth: "1024px",
          margin: "50px auto 160px",
          backgroundColor: "#fff",
        }}
      >
        {props.children}
      </div>
      <LayoutFooter />
    </>
  );
}
