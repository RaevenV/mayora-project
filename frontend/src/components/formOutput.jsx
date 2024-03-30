import React, { useEffect, useState } from "react";
import "./formInput1.css";
import AutoOutputTB from "./autoOutputTB.jsx";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

function FormOutput(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (props.searchParam) {
        try {
          const q = query(
            collection(db, "submittedProduct"),
            where("SKU", "==", props.searchParam)
          );
          const querySnapshot = await getDocs(q);
          const products = querySnapshot.docs.map((doc) => doc.data());
          setData(products.length > 0 ? products[0] : {});
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      }
    };

    fetchData();
  }, [props.searchParam]);

  return (
    <>
      <div className="form-wrapper">
        {[
          "SKU",
          "productName",
          "shelfLife",
          "productionDate",
          "line",
          "qtNum",
          "buyer",
        ].map((key, index) => (
          <AutoOutputTB
            key={index}
            title={key.toUpperCase()}
            value={data[key]}
          />
        ))}
      </div>
    </>
  );
}

export default FormOutput;

// // useEffect(() => {
// //   const fetchData = async () => {
// //     try {
// //       const querySnapshot = await getDocs(
// //         collection(db, "submittedProduct")
// //       );
// //       const data = querySnapshot.docs.map((doc) => doc.data());
// //       setDataList(data);
// //       if (data.length === 0) {
// //         console.log("No data fetched from Firestore");
// //       }
// //     } catch (error) {
// //       console.error("Error fetching data: ", error);
// //     }
// //   };

// //   fetchData();
// // }, []);
// const SKUval = data["SKU"];
// const [SKU, setSKU] = useState('')
// useEffect(() => {
//   const fetchData = async () => {
//     if (SKUval) {
//       const q = query(collection(db, "submittedProduct"), where("SKU", "==", SKUval));
//       const querySnapshot = await getDocs(q);
//       const products = querySnapshot.docs.map((doc) => doc.data());
//       setData(products.length > 0 ? products[0] : {});
//     }
//   };

//   fetchData();
// }, [SKUval]);
