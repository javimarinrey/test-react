export enum OrderType {
    ASC="ASC",
    DESC="DESC"
};

export type TOrder = {
    orderBy: string;
    orderType: OrderType;
};