import { PotCode, PotData, DataBank } from "../../provincle/src/types/data.ts";
import {
  MyGeoMapping,
  sanitizeString,
  // getTodaysCodeIndex,
  directionEmojiMap,
} from "../../provincle/src/utils/utils.ts";
import {
  calculateAngle,
  angle15ToDir,
  //calculateDistanceInKm,
} from "../../provincle/src/utils/geo.ts";

//import i18n from "./i18n.ts";

// data sources
// - https://en.wikipedia.org/wiki/Counties_of_Ireland
// - https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_the_Republic_of_Ireland

export type CountyCode = "cork" | "clare" //| "cavan" | "carlow" | "dublin" | "donegal" | "galway" | "kildare" | "kilkenny"
                  | "kerry" | "limerick" 
//                  | "longford" | "louth" | "leitrim" | "laois" | "meath" | "monaghan" | "mayo"
//                  | "offaly" | "roscommon" | "sligo" | "tipperary" | "waterford" | "westmeath" 
                  | "wexford" | "wicklow";
const listOfCountyCodes: CountyCode[] = [
  "cork", "kerry", "limerick",
];

const dataBankData: Record<CountyCode, PotData> = {
  cork: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick" ],
    coordinates: {
      latitude: 49.25,
      longitude: -84.5,
    },
    population: 15996989,
    largestCities: [ { key: "city_lovas", population: 0 } ],
    interestingFacts: [
      "home of the world's longest street",
      "it borders the most US states (5)",
      "the nickel capital of the world",
      "world largest skating rink",
    ],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
  },
  kerry: {
    capital: "capital-kerry",
    neighbors: ["cork", "limerick"],
    coordinates: {
      latitude: 49.25,
      longitude: -84.5,
    },
    population: 15996989,
    largestCities: [ { key: "city_lovas", population: 0 } ],
    interestingFacts: [
      "home of the world's longest street",
      "it borders the most US states (5)",
      "the nickel capital of the world",
      "world largest skating rink",
    ],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
  },
  clare: {
    capital: "capital-clare",
    neighbors: ["galway", "limerick", "tipperary"],
    coordinates: {
      latitude: 49.25,
      longitude: -84.5,
    },
    population: 15996989,
    largestCities: [ { key: "city_lovas", population: 0 } ],
    interestingFacts: [
      "home of the world's longest street",
      "it borders the most US states (5)",
      "the nickel capital of the world",
      "world largest skating rink",
    ],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
  },
  limerick: {
    capital: "capital-limerick",
    neighbors: ["cork", "kerry", "clare", "tipperary"],
    coordinates: {
      latitude: 49.25,
      longitude: -84.5,
    },
    population: 15996989,
    largestCities: [ { key: "city_lovas", population: 0 } ],
    interestingFacts: [
      "home of the world's longest street",
      "it borders the most US states (5)",
      "the nickel capital of the world",
      "world largest skating rink",
    ],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
  },
  wexford: {
    capital: "capital-limerick",
    neighbors: ["wicklow", "carlow", "kilkenny"],
    coordinates: {
      latitude: 49.25,
      longitude: -84.5,
    },
    population: 15996989,
    largestCities: [ { key: "city_lovas", population: 0 } ],
    interestingFacts: [
      "home of the world's longest street",
      "it borders the most US states (5)",
      "the nickel capital of the world",
      "world largest skating rink",
    ],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
  },
  wicklow: {
    capital: "capital-limerick",
    neighbors: ["dublin", "kildare", "carlow", "wexford"],
    coordinates: {
      latitude: 49.25,
      longitude: -84.5,
    },
    population: 15996989,
    largestCities: [ { key: "city_lovas", population: 0 } ],
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

export function getPotNamesByLang(tGeo: MyGeoMapping): string[] {
  return Object.keys(dataBank.data).map((code: string) => tGeo(code));
}

export function getPotNameByLang(potCode: CountyCode, tGeo: MyGeoMapping): string {
  return tGeo(potCode); // lovas: as PotCode
}

// export function getPotName(potCode: CountyCode): string {
//   return getPotNameByLang(potCode, i18n.language);
// }

export function getPotCodeByName(name: string, tGeo: MyGeoMapping): string {
  console.log(`e-getPotCode name:${name}`);
  //for (const [code] of Object.keys(dataBank)) {
  for (const code of listOfCountyCodes) {
    if (name === tGeo(code)) {
      return code; // as PotCode;
    }
  }
  return "invalid";
}

// export function getListOfCapitals(): string[] {
//   return potCodes.map((pot: PotCode) => dataBank[pot].capital.en); // how to make it work for FR?
// }

// export function getCapitalsByLang(langCode: string): string[] {
//   if (!langCode.startsWith("en") && !langCode.startsWith("fr")) {
//     throw new Error("invalid language");
//   }
//   langCode = langCode.substring(0, 2);
//   return Object.values(dataBank).map(
//     (entry: PotData) => entry.capital[langCode as keyof MultiLangName]
//   );
// }

export const potCodes = Object.keys(dataBankData) as PotCode[];
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

 function isValidCode(currentGuess: string, tGeo: MyGeoMapping): boolean {
  if (!currentGuess) {
    return false;
  }

  const sanitized = sanitizeString(currentGuess);

  return (
    undefined !== sanitized &&
    "" !== sanitized &&
    getPotNamesByLang(tGeo).some(name => sanitizeString(name) === sanitized)
  );
}

export function getDirectionEmoji( // todo: CountyCode?
  fromGuess: PotCode,
  toSolution: PotCode
): string {
  if (fromGuess === toSolution) {
    return directionEmojiMap.get("*") as string;
  }
  const angle: number = calculateAngle(
    dataBankData[fromGuess as CountyCode].coordinates,
    dataBankData[toSolution as CountyCode].coordinates
  );
  // console.log(
  //   `.calculateAngle(${fromGuess}, ${toSolution})=>${angle}:${angle15ToDir(angle)}:${directionEmojiMap.get(angle15ToDir(angle))}`
  // );
  return directionEmojiMap.get(angle15ToDir(angle)) as string;
  // const direction: CardinalDirection = calculateDirection(
  //   fromGuess,
  //   toSolution
  // );
  // return directionEmojiMap.get(direction) as string;
}

//export default dataBank;
export const dataBank: DataBank = {
  data: dataBankData,
  isValidCode: isValidCode,
  getPotCodeByName: getPotCodeByName,
  getPotNamesByLang: getPotNamesByLang,
  //getDistanceWithUnitBySetting:getDistanceWithUnitBySetting,
  getDirectionEmoji:getDirectionEmoji,
};
