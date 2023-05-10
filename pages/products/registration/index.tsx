import {useAuth} from "../../../src/components/commons/customs/useAuth";
import ProductsRegistrationUI from "../../../src/components/units/products/registration/products.registration.index";

export default function ProductsRegistrationPage() {
  useAuth();

  return <ProductsRegistrationUI isEdit={false} />;
}
