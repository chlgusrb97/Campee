import {useQueryUsedItem} from "../../../../../src/components/commons/customs/useQueries.ts/useQueries";
import ProductsRegistrationUI from "../../../../../src/components/units/products/registration/products.registration.index";

export default function ProductsEditPage() {
  const {usedItemData} = useQueryUsedItem();

  console.log(usedItemData, "데이터!");

  return <ProductsRegistrationUI isEdit={true} usedItemData={usedItemData} />;
}
