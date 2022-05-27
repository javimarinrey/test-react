import React from 'react';
import { useTranslation, Trans } from "react-i18next";
import { OrderType, TOrder } from '../../types/order';
import OrderBy from '../OrderBy';

export type ITableHeader = {
    key: string,
    value: string
}

export type IPropsTableResults = {
    name: string,
    total: number,
    header: ITableHeader[],
    data: object[],
    order: TOrder,
    handlerExport: () => void,
    handlerAdd: () => void,
    handlerOrder: (item:TOrder) => void,
};

const TableResults = (props: IPropsTableResults) => {

    const { t } = useTranslation();

    return (
        <table className="table table-bordered">

            <thead>
                <tr>
                    <th colSpan={4} className="text-end thead-top">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <Trans i18nKey="total_rows" values={{ count: props.total }} />
                            </div>
                            <div>
                                <button type="button" className="btn btn-primary ms-2" onClick={props.handlerExport}><i className="bi bi-cloud-download me-1"></i> {t('export')}</button>
                                <button type="button" className="btn btn-primary ms-2" onClick={props.handlerAdd}><i className="bi bi-plus-lg me-1"></i> {t('create')}</button>
                            </div>
                        </div>
                    </th>
                </tr>
                <tr className="table-light">
                    {props.header.map((item: ITableHeader, idx_header: number) => {
                        return (
                            <th key={`th_${idx_header}`} scope="col">
                                {item.value}
                                <OrderBy
                                    order={ props.order.orderBy === item.key ? props.order.orderType : OrderType.DESC}
                                    callback={(value: OrderType) => props.handlerOrder({orderBy: item.key, orderType: value})}
                                />
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {props.data.map((item: any, idx_data: number) => {
                    return (
                        <tr key={`tr_${idx_data}`}>
                            {props.header.map((item_header: ITableHeader, idx_header: number) => {
                                return (<td key={`td_${idx_data}_${idx_header}`}>{item[item_header.key]}</td>)
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )

};

export default TableResults;