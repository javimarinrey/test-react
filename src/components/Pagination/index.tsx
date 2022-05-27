import React from "react";
import { useTranslation } from "react-i18next";
import { TPagination } from "../../types/pagination";

export type IPropsPagination = {
  pagination: TPagination;
  handlerChangePage: (page: number) => void;
};

const Pagination = (props: IPropsPagination) => {
  const { t } = useTranslation();


  const selectPages = (_pages: number, _pageCurent: number) => {

    console.log('_pages', _pages);
    console.log('_pageCurent', _pageCurent);

    return (
      <select className="form-select" style={{width:'auto'}} value={_pageCurent} onChange={(event:React.ChangeEvent<HTMLSelectElement>)=>{    
          props.handlerChangePage(Number(event.target.value));
        }}>
        {Array.from({ length: _pages }).map((v, i) => (
          <option key={`pagination_${i}`} value={++i}>{t('page')} {i}</option>
        ))}
      </select>
    )


  }

  return (
    <div className="input-group">
        {/* <button className="btn btn-primary"><i className="bi bi-chevron-bar-left"></i></button> */}
        <button className="btn btn-primary"><i className="bi bi-chevron-compact-left"></i></button>
        {selectPages(Math.ceil(props.pagination.total / props.pagination.itemsPage), props.pagination.page)}        
        <button className="btn btn-primary"><i className="bi bi-chevron-compact-right"></i></button>
        {/* <button className="btn btn-primary"><i className="bi bi-chevron-bar-right"></i></button> */}
      </div>
  );
};

export default Pagination;
