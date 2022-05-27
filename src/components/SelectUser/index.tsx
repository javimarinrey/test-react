import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const SelectUser = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onClickLogout = () => {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("username");
    navigate("/login");
  }

  return (
    <React.Fragment>
      <div className="dropdown">
        <button
          className="btn btn-dark dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ><i className="bi bi-person-circle me-1"></i> { localStorage.getItem("username") || t('my_profile') }
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <Link
              type="button"
              className="dropdown-item"
              to="/configuration"
            ><i className="bi bi-gear-fill me-1"></i> {t('configuration')}
            </Link>
          </li>
          <li><hr className="dropdown-divider"/></li>
          <li>
            <button
              type="button"
              className="dropdown-item"
              onClick={onClickLogout}
            >
              {t('logout')}
            </button>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default SelectUser;
