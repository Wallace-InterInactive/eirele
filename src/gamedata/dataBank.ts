import { PotCode, PotData } from "../../provincle/src/types/data.ts";
import i18n from "./i18n.ts";

// data sources

export type CountyCode = "co" | "ke";

const dataBank: Record<CountyCode, PotData> = {
  co: {
    capital: "capital-co",
    neighbors: ["ke", "wt", "ty"],
    coordinates: {
      latitude: 49.25,
      longitude: -84.5,
    },
    population: 15996989,
    interestingFacts: [
      "home of the world's longest street",
      "it borders the most US states (5)",
      "the nickel capital of the world",
      "world largest skating rink",
    ],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
  },
  ke: {
    capital: "capital-ke",
    neighbors: ["co", "ty"],
    coordinates: {
      latitude: 49.25,
      longitude: -84.5,
    },
    population: 15996989,
    interestingFacts: [
      "home of the world's longest street",
      "it borders the most US states (5)",
      "the nickel capital of the world",
      "world largest skating rink",
    ],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
  },
};

export function getPotNamesByLang(langCode: string): string[] {
  if (!langCode.startsWith("en") && !langCode.startsWith("fr")) {
    throw new Error("invalid language");
  }
  langCode = langCode.substring(0, 2);
  return Object.values(dataBank).map(
    (entry: PotData) => entry.name[langCode as keyof MultiLangName]
  );
}

export function getPotNameByLang(
  potCode: CountyCode,
  langCode: string
): string {
  if (!langCode.startsWith("en") && !langCode.startsWith("fr")) {
    throw new Error("invalid language");
  }
  langCode = langCode.substring(0, 2);
  return dataBank[potCode as CountyCode].name[langCode as keyof MultiLangName];
}

export function getPotName(potCode: CountyCode): string {
  return getPotNameByLang(potCode, i18n.language);
}

export function getPotCodeByName(name: string): string {
  for (const [key, val] of Object.entries(dataBank)) {
    if (name === val.name.en || name === val.name.fr) {
      return key as PotCode;
    }
  }
  return "invalid";
}

export function getListOfCapitals(): string[] {
  return potCodes.map((pot: PotCode) => dataBank[pot].capital.en); // how to make it work for FR?
}

export function getCapitalsByLang(langCode: string): string[] {
  if (!langCode.startsWith("en") && !langCode.startsWith("fr")) {
    throw new Error("invalid language");
  }
  langCode = langCode.substring(0, 2);
  return Object.values(dataBank).map(
    (entry: PotData) => entry.capital[langCode as keyof MultiLangName]
  );
}

export const potCodes = Object.keys(dataBank) as PotCode[];
// export const potNamesEn: string[] = getPotNamesByLang("en-ca");
// export const potNamesFr: string[] = getPotNamesByLang("fr-ca");

export function getCurrentDateString(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return `${year}-0${month}-0${day}`;
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    // TODO: replace this ole for loop
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash;
}

export function getPseudoRandomNumber(): number {
  const dateString = getCurrentDateString();
  const hash = hashString(dateString);
  return Math.abs(hash);
}

export function getTodaysPotCodeIndex(): number {
  const dateString = getCurrentDateString();
  const hash = hashString(dateString);
  return Math.abs(hash) % potCodes.length;
}

export function getTodaysPotCode(): string {
  return potCodes[getTodaysPotCodeIndex()];
}

export function getPseudoRandomPotCode(n: number): string {
  const idx2 = (getTodaysPotCodeIndex() + n) % potCodes.length; // TODO: improve or delete
  return potCodes[idx2];
}

export default dataBank;
