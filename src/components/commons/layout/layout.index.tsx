import {useRouter} from "next/router";
import {
  BOARDS_DETAIL_PATH,
  BOARDS_LIST_PATH,
  BOARDS_REGISTRATION_PATH,
  MYPAGE_PATH,
  PRODUCTS_DETAIL_PATH,
  PRODUCTS_LIST_PATH,
  PRODUCTS_REGISTRATION_PATH,
} from "../../../commons/paths/paths";
import LayoutBanner from "./banner/banner.index";
import LayoutFooter from "./footer/footer.index";
import LayoutHeader from "./header/header.index";
import {BodyContents} from "./layout.styles";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHiddenBanner =
    router.asPath.includes(PRODUCTS_LIST_PATH) ||
    router.asPath.includes(BOARDS_LIST_PATH) ||
    router.asPath.includes(MYPAGE_PATH);

  return (
    <>
      <LayoutHeader />
      {!isHiddenBanner && <LayoutBanner />}
      <BodyContents>{props.children}</BodyContents>
      <LayoutFooter />
    </>
  );
}
