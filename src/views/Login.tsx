import React from "react";
import {useTranslation} from 'react-i18next';
import { Link, useNavigate } from "react-router-dom";


const Login = () => {

    const {t} = useTranslation();
    const navigate = useNavigate();


    const onClickHandler = () => {
        const _username = "TEST";
        const _token = "1234";

        localStorage.setItem("auth-token", _token);
        localStorage.setItem("username", _username);


        navigate("/")
    }

    return (
        <React.Fragment>
            <button className="btn btn-primary" type="button" onClick={onClickHandler}>{t('login')}</button>
            <Link className="btn btn-link" to="/register">{t('register')}</Link>
        </React.Fragment>
    )
};

export default Login;
