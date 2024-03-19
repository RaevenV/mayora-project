import React from "react";
import './tableHeader.css'

function TableHeader(props) {
  return (
    <>
          <div className="table-header-wrapper">
            <div className="table-header-container">
              <div className="table-header-item">SKU</div>
              <div className="table-header-item">Nama Produk</div>
              <div className="table-header-item">Line</div>
              <div className="table-header-item">Tanggal Pembuatan</div>
              <div className="table-header-item">Nomor QT</div>
              <div className="table-header-item">Buyer</div>
              <div className="table-header-item">Packaging Detail</div>
              <div className="table-header-item">Approval</div>
            </div>
          </div>

       
    </>
  );
}

export default TableHeader;
