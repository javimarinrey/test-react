import React from "react";
import {useTranslation} from 'react-i18next';

const Home = () => {

    const {t} = useTranslation();

    return (
        <React.Fragment>
            <h1>{t('home')}</h1>
            <ul>
                <li>Bootstrap & Icons</li>
                <li>React i18n</li>
                <li>React Hook Form</li>
                <li>Axios</li>
                <li>Environment variable</li>
                <li>React Context</li>
                <li>React Suspense & Lazy Components</li>
                <li>React Router</li>
                <li>HOC</li>
            </ul>
        </React.Fragment>
    )
};

export default Home;
