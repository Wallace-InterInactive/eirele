import { useEffect } from "react";
//import i18n from "../../gamedata/i18n.ts";  // this does not work properly, change not triggered
import { useTranslation } from "react-i18next";

export function Eirele() {
  const { i18n } = useTranslation();
  const title: JSX.Element = (
    <span
      className="uppercase font-bold"
      style={{ color: "lightgrey" }}
      data-testid="eirele"
    >
      <span style={{ color: "#169B62" }}>ei</span>
      <span style={{ color: "white" }}>re</span>
      <span style={{ color: "#FF883E" }}>le</span>
    </span>
  );
  const titleIe: JSX.Element = (
    <span
      className="uppercase font-bold"
      style={{ color: "lightgrey" }}
      data-testid="eirele"
    >
      <span style={{ color: "#169B62" }}>eire</span>
      <span style={{ color: "white" }}>le</span>
      <span style={{ color: "#FF883E" }}>agh</span>
    </span>
  );

  useEffect(() => {
    return; // Trigger any re-renders or state updates as needed on language change
  }, [i18n.language]);

  return i18n.language != "ie" ? title : titleIe;
}
