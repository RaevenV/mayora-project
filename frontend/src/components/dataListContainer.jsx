import React, { useEffect, useState } from "react";
import "./dataListContainer.css";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import ViewDetailButton from "./viewDetailButton";

//nanti disini bakal ambil data dari SubmittedProducts collection
//baru diallocate dan ditampilin disini

//pemanggilan propsnya bakal kita oper SKU / itemID
//baru di DataListItem bakal dicari dan ditampilin data2nya
function DataListContainer() {
  const [approval, setApproval] = useState(false);
  const [dataList, setDataList] = useState([]);

  function handleApproval() {
    if (approval) {
      setApproval(false);
    } else {
      setApproval(true);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "submittedProduct")
        );
        const data = querySnapshot.docs.map((doc) => doc.data());
        setDataList(data);
        if (data.length === 0) {
          console.log("No data fetched from Firestore");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="data-list-container">
      {dataList.map((item, index) => (
        <div className="dataListItem-container" key={index}>
          <div className="dataListItem-wrapper">
            <div className="dataList-item">{item.SKU}</div>
            <div className="dataList-item">{item.productName}</div>
            <div className="dataList-item">{item.line}</div>
            <div className="dataList-item">{item.productionDate}</div>
            <div className="dataList-item">{item.qtNum}</div>
            <div className="dataList-item">{item.buyer}</div>
            <ViewDetailButton searchParam={item.SKU} />
            <div className="dataList-item">Approve</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DataListContainer;
