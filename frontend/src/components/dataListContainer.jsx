import React, { useEffect, useState } from "react";
import "./dataListContainer.css";
import { db } from "../firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import ViewDetailButton from "./viewDetailButton";
import { useNavigate } from "react-router-dom";

function DataListContainer() {
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
            <div className="dataList-item3">
              {item.approvalPPIC && item.approvalUHQC && item.approvalSHQC ? (
                <span>Approved</span>
              ) : (
                <>
                  {!item.approvalPPIC &&
                    !item.approvalUHQC &&
                    !item.approvalSHQC && (
                      <span className="approval-status">Needs Approval</span>
                    )}
                  {!item.approvalPPIC &&
                    item.approvalUHQC &&
                    item.approvalSHQC && (
                      <span className="approval-status2">
                        Needs PPIC approval
                      </span>
                    )}
                  {item.approvalPPIC &&
                    !item.approvalUHQC &&
                    item.approvalSHQC && (
                      <span className="approval-status2">
                        Needs UHQC approval
                      </span>
                    )}
                  {item.approvalPPIC &&
                    item.approvalUHQC &&
                    !item.approvalSHQC && (
                      <span className="approval-status2">
                        Needs SHQC approval
                      </span>
                    )}
                  {item.approvalPPIC &&
                    !item.approvalUHQC &&
                    !item.approvalSHQC && (
                      <span className="approval-status2">
                        Needs UHQC & SHQC approval
                      </span>
                    )}
                  {!item.approvalPPIC &&
                    !item.approvalUHQC &&
                    item.approvalSHQC && (
                      <span className="approval-status2">
                        Needs UHQC & PPIC approval
                      </span>
                    )}
                  {!item.approvalPPIC &&
                    item.approvalUHQC &&
                    !item.approvalSHQC && (
                      <span className="approval-status2">
                        Needs PPIC & SHQC approval
                      </span>
                    )}
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DataListContainer;
