import EN from "@/lang/en.json";
import ID from "@/lang/id.json";
import useStore from "@/app/store";

const get = (json, key) => {
  if (Object.prototype.hasOwnProperty.call(json, key)) {
    return json[key];
  }

  return undefined;
};

const translator = (locale, key) => {
  switch (locale) {
    case "id":
      return get(ID, key);
    default:
      return get(EN, key);
  }
};

export function useTranslate() {
  const { lang } = useStore((state) => ({ lang: state.lang }));
  console.log(lang);

  const isLangEn = lang === "en";

  const isLangId = lang === "id";

  const translate = (locale, key) => {
    if (key === null || key === undefined) return `<value.error>`;

    const result = translator(locale, key);
    if (result === undefined) {
      return translator("en", key) ?? key;
    }

    return result;
  };

  const getTranslation = (key) => translate(lang, key);

  return { lang, getTranslation, isLangEn, isLangId };
}