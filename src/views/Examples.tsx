import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import {TodoContext} from "../context/TodoContext";
import { TodoType } from "../types/todo";

const Examples = () => {

    const { t } = useTranslation();
    const {list, changeList} = useContext(TodoContext) as TodoType;

    const addHandler = () => {
        const _tmp = [...list]
        _tmp.push("1");
        changeList(_tmp);
    }

    return (
        <div>
            <h3>React Context</h3>
            <button type="button" className="btn btn-secondary" onClick={addHandler}>{t('add_list')}</button>
            <p>{JSON.stringify(list)}</p>
        </div>
    )
};

export default Examples;