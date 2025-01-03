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
  | "cork"
  | "clare"
  | "cavan"
  | "carlow"
  | "dublin"
  | "donegal"
  | "galway"
  | "kildare"
  | "kilkenny"
  | "kerry"
  | "limerick"
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
  | "waterford"
  | "westmeath"
  | "wexford"
  | "wicklow";
//| "antrim"
//| "armagh"
//| "down"
//| "fermanagh"
//| "londonderry"
//| "tyrone"
const listOfCountyCodes: CountyCode[] = [
  "cork",
  "clare",
  "cavan",
  "carlow",
  "dublin",
  "donegal",
  "galway",
  "kildare",
  "kilkenny",
  "kerry",
  "limerick",
  "longford",
  "louth",
  "leitrim",
  "laois",
  "meath",
  "monaghan",
  "mayo",
  "offaly",
  "roscommon",
  "sligo",
  "tipperary",
  "waterford",
  "westmeath",
  "wexford",
  "wicklow",
  //"antrim",
  //"armagh",
  //"down",
  //"fermanagh",
  //"londonderry",
  //"tyrone",
];

const dataBankData: Record<CountyCode, PotData> = {
  carlow: {
    capital: "capital_carlow",
    neighbors: ["kildare", "wicklow", "wexford", "kilkenny", "laois"],
    coordinates: { latitude: 52.745223, longitude: -6.839326 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["team carlow"],
  },
  cavan: {
    capital: "capital_cavan",
    neighbors: ["monaghan", "meath", "westmeath", "longford", "leitrim"],
    coordinates: { latitude: 53.991081, longitude: -7.352543 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["team cavan"],
  },
  clare: {
    capital: "capital_clare",
    neighbors: ["galway", "limerick", "tipperary"],
    coordinates: { latitude: 52.865067, longitude: -9.007028 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  cork: {
    capital: "capital_cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 51.958737, longitude: -8.642922 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["Cork City", "Cobh Ramblers"],
  },
  donegal: {
    capital: "capital_donegal",
    neighbors: ["leitrim"],
    coordinates: { latitude: 54.972331, longitude: -7.889634 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  dublin: {
    capital: "capital_dublin",
    neighbors: ["meath", "kildare", "wicklow"],
    coordinates: { latitude: 53.362247, longitude: -6.247076 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  galway: {
    capital: "capital_galway",
    neighbors: ["clare", "offaly", "tipperary", "roscommon", "mayo"],
    coordinates: { latitude: 53.32403, longitude: -8.845473 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  kerry: {
    capital: "capital_kerry",
    neighbors: ["cork", "limerick"],
    coordinates: { latitude: 52.137816, longitude: -9.535317 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["Kerry"],
  },
  kildare: {
    capital: "capital_kildare",
    neighbors: ["meath", "dublin", "wicklow", "carlow", "laois", "offaly"],
    coordinates: { latitude: 53.192202, longitude: -6.787387 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  kilkenny: {
    capital: "capital_kilkenny",
    neighbors: ["laois", "carlow", "wexford", "waterford", "tipperary"],
    coordinates: { latitude: 52.564334, longitude: -7.20304 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  laois: {
    capital: "capital_laois",
    neighbors: ["offaly", "kildare", "tipperary", "carlow", "kilkenny"],
    coordinates: { latitude: 53.010269, longitude: -7.336649 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  leitrim: {
    capital: "capital_leitrim",
    neighbors: ["cavan", "longford", "roscommon", "sligo"],
    coordinates: { latitude: 54.113125, longitude: -7.970613 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  longford: {
    capital: "capital_longford",
    neighbors: ["leitrim", "cavan", "westmeath", "roscommon"],
    coordinates: { latitude: 53.718622, longitude: -7.74923 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  louth: {
    capital: "capital_louth",
    neighbors: ["monaghan", "meath"],
    coordinates: { latitude: 53.904222, longitude: -6.424684 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  mayo: {
    capital: "capital_mayo",
    neighbors: ["sligo", "roscommon", "galway"],
    coordinates: { latitude: 53.911587, longitude: -9.409013 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  meath: {
    capital: "capital_meath",
    neighbors: [
      "cavan",
      "mondaghan",
      "louth",
      "dublin",
      "kildare",
      "offaly",
      "westmeath",
    ],
    coordinates: { latitude: 53.631086, longitude: -6.674817 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  monaghan: {
    capital: "capital_monaghan",
    neighbors: ["cavan", "meath", "louth"],
    coordinates: { latitude: 54.178103, longitude: -6.903126 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  offaly: {
    capital: "capital_offaly",
    neighbors: [
      "roscommon",
      "westmeath",
      "meath",
      "kildare",
      "laois",
      "tipperary",
      "galway",
    ],
    coordinates: { latitude: 53.266617, longitude: -7.589902 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  roscommon: {
    capital: "capital_roscommon",
    neighbors: [
      "sligo",
      "leitrim",
      "longford",
      "westmeath",
      "offaly",
      "galway",
      "mayo",
    ],
    coordinates: { latitude: 53.681848, longitude: -8.198145 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  limerick: {
    capital: "capital_limerick",
    neighbors: ["kerry", "cork", "tipperary", "clare"],
    coordinates: { latitude: 52.520935, longitude: -8.732761 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  sligo: {
    capital: "capital_sligo",
    neighbors: ["leitrim", "roscommon", "mayo"],
    coordinates: { latitude: 54.225495, longitude: -8.600295 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  tipperary: {
    capital: "capital_tipperary",
    neighbors: [
      "offaly",
      "waterford",
      "laois",
      "limerick",
      "kilkenny",
      "cork",
      "clare",
      "galway",
    ],
    coordinates: { latitude: 52.636885, longitude: -7.898893 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  waterford: {
    capital: "capital_waterford",
    neighbors: ["cork", "wexford", "tipperary", "kilkenny"],
    coordinates: { latitude: 52.180365, longitude: -7.582225 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  westmeath: {
    capital: "capital_westmeath",
    neighbors: ["longford", "meath", "offaly", "cavan", "roscommon"],
    coordinates: { latitude: 53.53061, longitude: -7.334561 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  wexford: {
    capital: "capital_wexford",
    neighbors: ["wicklow", "carlow", "kilkenny"],
    coordinates: { latitude: 52.443228, longitude: -6.574902 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
  wicklow: {
    capital: "capital_wicklow",
    neighbors: ["dublin", "wexford", "carlow", "kildare"],
    coordinates: { latitude: 52.988339, longitude: -6.304053 },
    population: 15996989,
    largestCities: [{ key: "city_lovas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"],
  },
};
/*
const dataBankNI: Record<string, PotData> = {
  antrim: {
    capital: "capital_anrtim",
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
    capital: "capital_armagh",
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
    capital: "capital_down",
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
    capital: "capital_fermanagh",
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
    capital: "capital_londonderry",
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
    capital: "capital_tyrone",
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
*/

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
  return Object.values(dataBank.data).map(
    (entry: PotData) => tGeo(entry.capital) // tGeo(`capital${code}`) ?
  );
}
export function getCities(tGeo: MyGeoMapping): string[] {
  let retVal: string[] = getCapitals(tGeo); // getLargestCities(tGeo);
  console.log(`getCities: ${retVal}`);
  // Object.values(dataBank.data.keys).forEach((cap: string) => {
  //   console.log(`cap:${cap}`);
  // });
  //   retVal.push(cap);
  //getCapitals(tGeo).forEach((cap: string) => {
  // if (!retVal.includes(cap)) {
  //   retVal.push(cap);
  // }
  //});
  retVal.sort();

  return retVal;
}
function getGuessEmoji(): string {
  return "\u2618\ufe0f";
}

//export default dataBank;
export const dataBank: DataBank = {
  data: dataBankData,
  //dataNI: dataBankNI,
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
