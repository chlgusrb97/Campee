import {IQuery} from "../../../../commons/types/generated/types";

export interface IProductsRegistrationUIProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem"> | undefined;
}
