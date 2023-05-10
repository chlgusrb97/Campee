import {useAuth} from "../../../../src/components/commons/customs/useAuth";
import ProductsDetailUI from "../../../../src/components/units/products/detail/products.detail.index";

export default function ProductsDetailpage() {
  useAuth();

  return <ProductsDetailUI />;
}
