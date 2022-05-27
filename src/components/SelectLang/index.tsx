import React from "react";
import { useTranslation } from "react-i18next";

const SelectLang = () => {
  const { t, i18n } = useTranslation();

  const onClickHandler = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <React.Fragment>
      <div className="dropdown">
        <button
          className="btn btn-light dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {t(i18n.language)}
        </button>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
          <li>
            <button
              type="button"
              className="dropdown-item"
              onClick={() => onClickHandler("es")}
            >
              Español
            </button>
          </li>
          <li>
            <button
              type="button"
              className="dropdown-item"
              onClick={() => onClickHandler("en")}
            >
              English
            </button>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default SelectLang;
