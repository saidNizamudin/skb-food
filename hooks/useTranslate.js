import LANG from "@/lang/data.json";
import useStore from "@/app/store";

const get = (json, key) => {
  if (Object.prototype.hasOwnProperty.call(json, key)) {
    return json[key];
  }

  return undefined;
};

const translator = (locale, key) => {
  try {
    switch (locale) {
      case "id":
        return get(get(LANG, key), "id");
      default:
        return get(get(LANG, key), "en");
    }
  } catch (error) {
    return undefined;
  }
};

export function useTranslate() {
  const { lang } = useStore((state) => ({ lang: state.lang }));

  const isLangEn = lang === "en";

  const isLangId = lang === "id";

  const translate = (locale, key) => {
    if (key === null || key === undefined) return `<value.error>`;

    const result = translator(locale, key);
    if (result === undefined) {
      return translator("en", key) ?? translator("id", key) ?? key;
    }

    return result;
  };

  const getTranslation = (key) => translate(lang, key);

  return { lang, getTranslation, isLangEn, isLangId };
}
