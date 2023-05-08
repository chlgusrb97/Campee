import {useQueryUsedItem} from "../../../../../src/components/commons/customs/useQueries.ts/useQueries";
import ProductsRegistrationUI from "../../../../../src/components/units/products/registration/products.registration.index";

export default function ProductsEditPage() {
  const {usedItemData} = useQueryUsedItem();

  return <ProductsRegistrationUI isEdit={true} usedItemData={usedItemData} />;
}
