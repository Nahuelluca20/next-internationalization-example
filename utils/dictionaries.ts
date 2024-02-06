import "server-only";
import { Locale } from "@/i18n-config";

interface DictionaryPaths {
  [section: string]: {
    [locale in Locale]: () => Promise<any>;
  };
}

const dictionaryPaths: DictionaryPaths = {
  home: {
    en: () =>
      import("../dictionaries/en/home.json").then((module) => module.default),
    es: () =>
      import("../dictionaries/es/home.json").then((module) => module.default),
  },
  "internationalization-link": {
    en: () =>
      import("../dictionaries/en/without-Internationalization-link.json").then(
        (module) => module.default
      ),
    es: () =>
      import("../dictionaries/es/without-Internationalization-link.json").then(
        (module) => module.default
      ),
  },
};

export const getDictionary = async (
  section: string,
  locale: Locale
): Promise<any> => {
  const sectionDictionary = dictionaryPaths[section];

  if (!sectionDictionary) {
    throw new Error(`Invalid dictionary section: ${section}`);
  }

  const getLocaleDictionary = sectionDictionary[locale];

  if (!getLocaleDictionary) {
    throw new Error(`Invalid locale for section ${section}: ${locale}`);
  }

  return getLocaleDictionary();
};
