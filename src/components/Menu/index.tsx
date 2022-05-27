import React from "react";
import SelectLang from "../SelectLang";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import SelectUser from "../SelectUser";
import MenuUser from "./MenuUser";


const Menu = () => {
  const { t } = useTranslation();
  let location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2 mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {t("app_name")}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/")}`}
                  aria-current="page"
                  to="/"
                >
                  {t("home")}
                </Link>
              </li>
              {localStorage.getItem("username") &&
              localStorage.getItem("auth-token") ? (
                <MenuUser />
              ) : null}
            </ul>
            <form className="d-flex">
              {localStorage.getItem("username") &&
              localStorage.getItem("auth-token") ? (
                <SelectUser />
              ) : (
                <Link to="/login" className="btn btn-primary me-2">
                  {t("login")}
                </Link>
              )}
              <SelectLang />
            </form>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Menu;
