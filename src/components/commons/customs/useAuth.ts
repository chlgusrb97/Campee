import {Modal} from "antd";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {useRecoilValueLoadable} from "recoil";
import {restoreAccessTokenLoadble} from "../../../commons/stores/stores";
import {LOGIN_PATH} from "../../../commons/paths/paths";

export const useAuth = () => {
  const router = useRouter();
  const newAccessTokenValue = useRecoilValueLoadable(restoreAccessTokenLoadble);

  useEffect(() => {
    void newAccessTokenValue.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        Modal.error({
          content: "로그인 후 이용 가능합니다.",
          onOk: () => router.push(LOGIN_PATH),
        });
      }
    });
  }, []);
};
