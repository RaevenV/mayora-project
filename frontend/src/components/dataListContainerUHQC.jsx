import React, { useEffect, useState } from "react";
import "./dataListContainer.css";
import { db } from "../firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import ViewDetailButton from "./viewDetailButton";
import { useNavigate } from "react-router-dom";

function DataListContainerUHQC() {
  const [dataList, setDataList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "submittedProduct"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
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

  const handleViewDetail = (searchParam) => {
    navigate(`/viewdetail/${searchParam}`);
  };

  const handleApprovalToggle = async (id, currentApproval) => {
    try {
      await updateDoc(doc(db, "submittedProduct", id), {
        approvalUHQC: !currentApproval,
      });
      console.log("Approval toggled successfully!");
      setDataList((prevDataList) =>
        prevDataList.map((item) => {
          if (item.id === id) {
            return { ...item, approvalUHQC: !currentApproval };
          }
          return item;
        })
      );
    } catch (error) {
      console.error("Error toggling approval: ", error);
    }
  };

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
            <ViewDetailButton
              searchParam={item.SKU}
              onViewDetail={handleViewDetail}
            />
            <div className="dataList-item2">
              <button
                className="approval-button"
                onClick={() => handleApprovalToggle(item.id, item.approvalUHQC)}
              >
                {item.approvalUHQC ? "Cancel" : "Approve"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DataListContainerUHQC;
