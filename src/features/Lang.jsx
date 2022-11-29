import i18next from "i18next";
import Cookies from "js-cookie";
import React, { useState } from "react";

export default function Lang() {
  const currentLanguageCode = Cookies.get("i18next") || "en ";

  const [isEng, setEng] = useState(false);
  const handleChangeLang = () => {
    setEng(!isEng);
  };
  const languageEn = [
    {
      code: "en",
      name: "EN",
    },
  ];
  const languageRu = [
    {
      code: "ru",
      name: "RU",
      dir: "rtl",
    },
  ];

  return (
    <div onClick={handleChangeLang}>
      {isEng ? (
        <>
          {languageRu.map(({ code, name }) => (
            <div onClick={() => i18next.changeLanguage(code)} key={code}>
              {name}
            </div>
          ))}
        </>
      ) : (
        <>
          {languageEn.map(({ code, name }) => (
            <div onClick={() => i18next.changeLanguage(code)} key={code}>
              {name}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
