import { PotCode, PotData, DataBank } from "../../provincle/src/types/data.ts";
import {
  MyGeoMapping,
  sanitizeString,
  directionEmojiMap,
  defaultTFunction,
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
// - https://en.wikipedia.org/wiki/List_of_Gaelic_games_clubs_in_Ireland
// - https://en.wikipedia.org/wiki/League_of_Ireland_Premier_Division

export type CountyCode =
  | "antrim"
  | "armagh"
  | "cork"
  | "clare"
  | "cavan"
  | "carlow"
  | "down"
  | "dublin"
  | "donegal"
  | "galway"
  | "kildare"
  | "kilkenny"
  | "kerry"
  | "limerick"
  | "londonderry"
  | "fermanagh"
  | "longford"
  | "louth"
  | "leitrim"
  | "laois"
  | "meath"
  | "monaghan"
  | "mayo"
  | "offaly"
  | "roscommon"
  | "sligo"
  | "tipperary"
  | "tyrone"
  | "waterford"
  | "westmeath"
  | "wexford"
  | "wicklow";
const listOfCountyCodes: CountyCode[] = ["cork", "kerry", "limerick"];

const dataBankData: Record<CountyCode, PotData> = {
  antrim: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  armagh: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  carlow: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["team carlow"],
  },
  cavan: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["team cavan"],
  },
  clare: {
    capital: "capital-clare",
    neighbors: ["galway", "limerick", "tipperary"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  cork: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 48.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["Cork City", "Cobh Ramblers"],
  },
  donegal: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  down: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  dublin: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  fermanagh: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  galway: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  kerry: {
    capital: "capital-kerry",
    neighbors: ["cork", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["Kerry"],
  },
  kildare: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  kilkenny: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  laois: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  leitrim: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  londonderry: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  longford: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  louth: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  mayo: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  meath: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  monaghan: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  offaly: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  roscommon: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  limerick: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  sligo: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  tipperary: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  tyrone: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  waterford: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  westmeath: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  wexford: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  wicklow: {
    capital: "capital-cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 49.25, longitude: -84.5 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
};

export function getPotNamesByLang(tGeo: MyGeoMapping): string[] {
  return Object.keys(dataBank.data).map((code: string) => tGeo(code));
}

export function getPotNameByLang(
  potCode: CountyCode,
  tGeo: MyGeoMapping
): string {
  return tGeo(potCode); // lovas: as PotCode
}

// export function getPotName(potCode: CountyCode): string {
//   return getPotNameByLang(potCode, i18n.language);
// }

export function getPotCodeByName(name: string, tGeo: MyGeoMapping): string {
  //console.log(`e-getPotCode name:${name}`);
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

export function getPotMapSvgUrl(potCode: CountyCode): string {
  //return `./varmegyle/assets/HU-${potCode.toUpperCase()}.svg`;
  let ret = new URL(
    `../../assets/ireland-map-${potCode.toLowerCase()}.svg`,
    import.meta.url
  ).href;
  console.log(`getPotMap(${potCode}) -> ${ret}`);
  return ret;
}
export function getPotFlagSvgUrl(potCode: PotCode): string {
  return new URL(
    `../../assets/ireland-flag-${potCode.toLowerCase()}.svg`,
    import.meta.url
  ).href;
}

export function getCapitals(tGeo: MyGeoMapping): string[] {
  return Object.values(dataBank).map(
    (entry: PotData) => tGeo(entry.capital) // tGeo(`capital${code}`) ?
  );
}
export function getCities(tGeo: MyGeoMapping): string[] {
  const retVal = ["Miskolc", "Tapolca"]; // getLargestCities(tGeo);
  getCapitals(tGeo).forEach((cap: string) => {
    if (!retVal.includes(cap)) {
      retVal.push(cap);
    }
  });
  retVal.sort();

  return retVal;
}
function getGuessEmoji(): string {
  return "\u2618\ufe0f";
}

//export default dataBank;
export const dataBank: DataBank = {
  data: dataBankData,
  isValidCode: isValidCode,
  getPotCodeByName: getPotCodeByName,
  getPotNamesByLang: getPotNamesByLang,
  //getDistanceWithUnitBySetting:getDistanceWithUnitBySetting,

  getPotMapSvgUrl: getPotMapSvgUrl, // warning: does not work as I'd expect
  getPotFlagSvgUrl: getPotFlagSvgUrl,
  getCities: getCities,

  getDirectionEmoji: getDirectionEmoji,
  getGuessEmoji: getGuessEmoji,

  tLang: defaultTFunction, // warning: to be set in Game.tsx
  tGeo: defaultTFunction, // warning: to be set in Game.tsx
};
