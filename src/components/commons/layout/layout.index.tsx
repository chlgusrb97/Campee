import {useRouter} from "next/router";
import {PRODUCTS_LIST_PATH} from "../../../commons/paths/paths";
import LayoutBanner from "./banner/banner.index";
import LayoutFooter from "./footer/footer.index";
import LayoutHeader from "./header/header.index";

const HIDDEN_BANNER = [PRODUCTS_LIST_PATH];

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);

  return (
    <>
      <LayoutHeader />
      {!isHiddenBanner && <LayoutBanner />}
      <div>{props.children}</div>
      <LayoutFooter />
    </>
  );
}
