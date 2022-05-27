import React from 'react';
import { OrderType } from '../../types/order';


export type IPropsOrderBy = {
    order: OrderType;
    callback: (value: OrderType) => void;
}

const OrderBy = (props: IPropsOrderBy) => {

    const handlerClick = (event: React.MouseEvent<HTMLElement>) => {
        props.callback(props.order === OrderType.ASC ? OrderType.DESC : OrderType.ASC)
    };

    return (
        <i
            className={`bi bi-sort-${props.order === OrderType.ASC ? 'up' : 'down'} mx-2`}
            onClick={handlerClick}
            style={{cursor: 'pointer'}}
        />
    )
};

export default OrderBy;