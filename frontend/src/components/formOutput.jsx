import React, { useEffect, useState } from "react";
import "./formInput1.css";
import AutoOutputTB from "./autoOutputTB.jsx";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";


function FormOutput() {
  const [dataList, setDataList] = useState([]);
  const [data, setData] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const querySnapshot = await getDocs(
  //         collection(db, "submittedProduct")
  //       );
  //       const data = querySnapshot.docs.map((doc) => doc.data());
  //       setDataList(data);
  //       if (data.length === 0) {
  //         console.log("No data fetched from Firestore");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const SKUval = data["SKU"];
  const [SKU, setSKU] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      if (SKUval) {
        const q = query(collection(db, "submittedProduct"), where("SKU", "==", SKUval));
        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs.map((doc) => doc.data());
        setData(products.length > 0 ? products[0] : {});
      }
    };

    fetchData();
  }, [SKUval]);

  return (
    <>
      <div className="form-wrapper">
        {/* <AutoOutputTB title="SKU"/>
        <AutoOutputTB title="Nama Produk"/>
        <AutoOutputTB title="Shelf Life"/>
        <AutoOutputTB title="Tanggal Pembuatan"/>
        <AutoOutputTB title="Line"/>
        <AutoOutputTB title="Nomor QT"/>
        <AutoOutputTB title="Buyer"/> */}
        {Object.keys(data).map((key, index) => (
        <div className="fields" key={index}>
          {/* <output title={key} value={data[key]} /> */}
          
        </div>
      ))}
      </div>
      
    </>
  );
}

export default FormOutput;
