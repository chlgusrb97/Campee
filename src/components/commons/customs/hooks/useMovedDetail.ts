import {routes} from "../../../../commons/routes/routes";

export const useMovedDetail = () => {
  const {pageRouting} = routes();

  const movedDetail = (path: string) => () => {
    pageRouting(path);
  };

  return {movedDetail};
};
