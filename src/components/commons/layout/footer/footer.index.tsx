import * as S from "./footer.styles";
import LinkItem from "../../items/link/link.index";
import {MAIN_PATH} from "../../../../commons/paths/paths";

export default function LayoutFooter() {
  return (
    <S.Wrapper>
      <S.FooterContents>
        <LinkItem
          path={MAIN_PATH}
          name="CAMPEE"
          fontSize="36px"
          fontFamily="KanitBold"
          color="#e76161"
        />
        <S.MyInfo>
          <li>
            <a href="https://github.com/chlgusrb97/Campee" target="_blank">
              <S.GitHub />
              <p>https://github.com/chlgusrb97/Campee</p>
            </a>
          </li>
          <li>
            <S.Google />
            <p>ikolp34@gmail.com</p>
          </li>
        </S.MyInfo>
      </S.FooterContents>
    </S.Wrapper>
  );
}
