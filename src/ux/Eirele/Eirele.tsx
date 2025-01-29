import { useTranslation } from "react-i18next";

export function Eirele() {
  const { t } = useTranslation();
  //console.log(`title l:${i18n.language}`);
  return (
    <span
      className="uppercase font-bold"
      style={{ color: "lightgrey" }}
      data-testid="eirele"
    >
      <span style={{ color: "#169B62" }}>{t("title_part1")}</span>
      <span style={{ color: "white" }}>{t("title_part2")}</span>
      <span style={{ color: "#FF883E" }}>{t("title_part3")}</span>
    </span>
  );
}
