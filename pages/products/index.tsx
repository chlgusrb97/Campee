import {useAuth} from "../../src/components/commons/customs/useAuth";
import ProductsListUI from "../../src/components/units/products/list/products.list.index";

export default function ProductsPage() {
  useAuth();

  return <ProductsListUI />;
}
