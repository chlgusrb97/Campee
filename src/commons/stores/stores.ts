import {atom, selector, useRecoilState} from "recoil";
import {getAccessToken} from "../libraries/getAccessToken";
import {useEffect} from "react";

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

export const addressState = atom({
  key: "addressState",
  default: "",
});
