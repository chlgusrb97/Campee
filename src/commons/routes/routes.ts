import {useRouter} from "next/router";

export const routes = () => {
  const router = useRouter();

  const pageRouting = (path: string) => {
    router.push(path);
  };

  return {pageRouting};
};
