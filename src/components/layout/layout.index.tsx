import LayoutBanner from "./banner/banner.index";
import LayoutFooter from "./footer/footer.index";
import LayoutHeader from "./header/header.index";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutFooter />
      <div>{props.children}</div>
    </>
  );
}
