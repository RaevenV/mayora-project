import React, { useState, useEffect } from "react";
import InputTB from "./inputTB.jsx";
import "./formInput1.css";
import NextButton from "./nextButton";
import AutoTB from "./autoTB.jsx";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";

function FormInput1() {
 
  const [SKUval, setSKUval] = useState("");
  const [TanggalPembuatan, setTanggalPembuatan] = useState("");
  const [Line, setLine] = useState("");
  const [NomorQT, setNomorQT] = useState("");
  const [Buyer, setBuyer] = useState("");
  const [productName, setProductName] = useState("");
  const [shelfLife, setShelfLife] = useState("");

  const handleSKUChange = (value) => {
    setSKUval(value);
  };
  const handleTanggalChange = (value) => {
    setTanggalPembuatan(value);
  };
  const handleLineChange = (value) => {
    setLine(value);
  };
  const handleQTChange = (value) => {
    setNomorQT(value);
  };
  const handleBuyerChange = (value) => {
    setBuyer(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (SKUval) {
        const q = query(collection(db, "product"), where("SKU", "==", SKUval));
        const querySnapshot = await getDocs(q);
        let products = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          products.push({
            id: doc.id,
            kodifikasi: data.kodifikasi,
            packSKU1: data.packSKU1,
            packSKU2: data.packSKU2,
            packSKU3: data.packSKU3,
            packType1: data.packType1,
            packType2: data.packType2,
            packType3: data.packType3,
            printCode1: data.printCode1,
            printCode2: data.printCode2,
            productName: data.productName,
            shelfLife: data.shelfLife,
          });
        });

        setProductName(products.length > 0 ? products[0].productName : "");
        setShelfLife(products.length > 0 ? products[0].shelfLife : "");
      }
    };

    fetchData();
  }, [SKUval]);

  return (
    <>
      <div className="form-wrapper">
        <InputTB
          title="SKU*"
          placeholder=""
          handleSKUChange={handleSKUChange}
        />
        <AutoTB title="Nama Produk" skuvalue={productName} />
        <AutoTB title="Shelf life" skuvalue={shelfLife} />

        <InputTB
          title="Tanggal Pembuatan*"
          placeholder="DD/MM/YY"
          handleTanggalChange={handleTanggalChange}
        />
        <InputTB title="Line*" handleLineChange={handleLineChange} />
        <InputTB title="Nomor QT*" handleQTChange={handleQTChange} />
        <InputTB title="Buyer*" handleBuyerChange={handleBuyerChange} />
      </div>
      <NextButton text="Next>>" link="/input2" />
    </>
  );
}

export default FormInput1;
