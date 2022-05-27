import React, { useState } from "react";

import LoadingOverlay from 'react-loading-overlay-ts';

import Pagination, { IPropsPagination } from "../../components/Pagination";
import SelectItemsPage, { IPropsSelectItemsPage } from "../../components/SelectItemsPage";
import Auth from "../../hoc/Auth";
import Search, {IPropsSearch} from "./partials/Search";
import TableResults, { IPropsTableResults } from '../../components/Table/TableResults';
import { useTranslation } from "react-i18next";
import { OrderType, TOrder } from '../../types/order';


const Table = () => {

  const { t } = useTranslation();

  /* states */
  const[order, setOrder] = useState<TOrder>({orderBy: 'name', orderType: OrderType.ASC});
  const [loading, setLoading] = useState<boolean>(false);



  /* props */
  const propsSearch: IPropsSearch = {
    handlerSubmit: () => {
      search();
    }
  };

  const propsPagination: IPropsPagination = {
    pagination: { itemsPage: 10, page: 4, total:400 },
    handlerChangePage:( (page:number) => {
      console.log('handlerChangePage', page);
    })
  };

  const propsSelectItemsPage: IPropsSelectItemsPage = {
    itemsPages: [5, 10, 25, 50, 100],
    itemPageCurrent: 5,
    handlerChangeItemsPage: (itemPage:number) => {
      console.log('handlerChangeItemsPage', itemPage);
    }
  };

  const propsTableResults: IPropsTableResults = {
    name: 'club',
    total: 20,
    header: [{key:'name', value: t('name')}, {key: 'country', value: t('country')}, {key: 'province', value: t('province')}, {key: 'city', value: t('city')} ],
    data: [
      {name: 'Test1', country: 'Spain', province: 'Madrid', city: 'Coslada'},
      {name: 'Test2', country: 'Spain', province: 'Valencia', city: 'Gandía'}
    ],
    order: order,
    handlerAdd: () => {
      console.log('handlerAdd');
    },
    handlerExport: () => {
      console.log('handlerExport');
    },
    handlerOrder: (item:TOrder) => {
        console.log('handlerOrder', item);
        setOrder(item);
    }
  };

  const search = () => {
    setLoading(true);
    setTimeout( () => {
      setLoading(false);
    }, 1000); // wait 1 seconds
  }



  return (
    <div>
      <Search {...propsSearch}/>
      <br />

      <LoadingOverlay active={loading} spinner={true} classNamePrefix="loadingOverlay_" text="Loading...">
        <TableResults {...propsTableResults}/>
      </LoadingOverlay>
      <div className="d-flex justify-content-end align-items-center">
        <div className="me-2"><SelectItemsPage {...propsSelectItemsPage}/></div>
        <div><Pagination {...propsPagination} /></div>
      </div>
    </div>
  );
};

export default Auth(Table);
