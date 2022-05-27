import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const MenuUser = () => {

    const { t } = useTranslation();
    let location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path ? "active" : "";
      };

      return (
        <React.Fragment>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/table")}`}
                to="/table"
              >
                {t("table")}
              </Link>
            </li>
        </React.Fragment>
    )
}

export default MenuUser;
