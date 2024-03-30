import React, { useEffect, useState } from "react";
import "./formOutput2.css";
import NextButton from "./nextButton";
import AutoOutputTB from "./autoOutputTB.jsx";
import "./outputTB2.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

function FormOutput2(props) {
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
      <div className="form-wrapper2">
        {[
          "packSKU1",
          "packType1",
          "printCode1",
          "printCode2",
          "kodifikasi",
        ].map((key, index) => (
          <AutoOutputTB
            key={index}
            title={key.toUpperCase()}
            value={data[key]}
          />
        ))}
      </div>
      <NextButton text="<<Back" link="/showData" />
    </>
  );
}

export default FormOutput2;
