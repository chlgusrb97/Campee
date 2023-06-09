import {atom, selector} from "recoil";
import {getAccessToken} from "../libraries/getAccessToken";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const restoreAccessTokenLoadble = selector({
  key: "restoreAccessTokenLoadble",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

export const paymentModalState = atom({
  key: "paymentModalState",
  default: false,
});

export const keyWordState = atom({
  key: "keyWordState",
  default: "",
});

export const recentlyVisitedProducts = atom({
  key: "recentlyVisitedProducts",
  default: [],
});

export const userPicture = atom({
  key: "userPicture",
  default: "",
});

export const FooterButton = atom({
  key: "FooterButton",
  default: 0,
});
