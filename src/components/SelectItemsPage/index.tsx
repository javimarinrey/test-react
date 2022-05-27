import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles.css';

export type IPropsSelectItemsPage = {
    itemPageCurrent: number,
    itemsPages: number[],
    handlerChangeItemsPage: (itemPage:number) => void
}

const SelectItemsPage = (props:IPropsSelectItemsPage) => {
    
    const { t } = useTranslation();

    return (
        <div className="d-flex align-items-center selectItemsPage">
            <div className="me-2">{t('items_per_page')}</div>
            <select className="form-select" onChange={(event:React.ChangeEvent<HTMLSelectElement>)=> props.handlerChangeItemsPage(Number(event.target.value)) }>
                {props.itemsPages.map( (item:number, i:number) => <option key={`selectItemsPage_${i}`} value={item}>{item}</option> )}
            </select>
        </div>
    )
};

export default SelectItemsPage;