import React from "react";
import { useTranslation } from "react-i18next";

export type IPropsSearch = {
  handlerSubmit: () => void
}

const Search = (props:IPropsSearch) => {
  const { t } = useTranslation();

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submit");
    props.handlerSubmit();
  };

  return (
    <div className="card">
      <h5 className="card-header">{t("search")}</h5>
      <div className="card-body">
        <form className="d-flex align-items-center" onSubmit={onSubmitHandler}>
          <input
            type="text"
            className="form-control me-2"
            placeholder={t("name")}
          />
          <input type="text" className="form-control me-2" placeholder="País" />
          <input
            type="text"
            className="form-control me-2"
            placeholder={t("province")}
          />
          <input
            type="text"
            className="form-control me-2"
            placeholder={t("city")}
          />
          <button type="submit" className="btn btn-primary">
            <div className="d-flex"><i className="bi bi-search me-1"></i> {t("search")}</div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
