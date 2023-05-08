import {IQuery} from "../../../../commons/types/generated/types";

export interface IProductsRegistrationUIProps {
  isEdit: boolean;
  usedItemData?: Pick<IQuery, "fetchUseditem"> | undefined;
}
