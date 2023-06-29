import {useAuth} from "../../../../../src/components/commons/customs/useAuth";
import {useQueryUsedItem} from "../../../../../src/components/commons/customs/useQueries.ts/useQueries";
import ProductsRegistrationUI from "../../../../../src/components/units/products/registration/products.registration.index";

export default function ProductsEditPage() {
  const {data} = useQueryUsedItem();
  useAuth();

  return <ProductsRegistrationUI isEdit={true} data={data} />;
}
