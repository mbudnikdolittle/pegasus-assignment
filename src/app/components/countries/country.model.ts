export interface ICountry {
  name: string;
  flag: string;
  currency: string[];
  population: number;
  status: string;
  googleMapHref: string;
  continents: string;
}

export interface IApiCountry {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  independent?: boolean;
  status: string;
  unMember: boolean;
  currencies?: {
    [key: string]: Currency;
  };
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: string;
  languages?: {
    [key: string]: string;
  };
  translations: {
    [key: string]: Name;
  };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms?: {
    [key: string]: Name;
  };
  flag: string;
  maps: Maps;
  population: number;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  cioc?: string;
  subregion?: string;
  fifa?: string;
  borders?: string[];
  gini?: {
    [key: string]: number;
  };
  postalCode?: PostalCode;
}

interface Name {
  common: string;
  official: string;
  nativeName?: { [key: string]: Name };
}

interface Currency {
  name: string;
  symbol: string;
}

interface Idd {
  root?: string;
  suffixes?: string[];
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Car {
  signs?: string[];
  side: string;
}

interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

interface CoatOfArms {
  png?: string;
  svg?: string;
}

interface CapitalInfo {
  latlng?: number[];
}

interface PostalCode {
  format: string;
  regex?: string;
}
