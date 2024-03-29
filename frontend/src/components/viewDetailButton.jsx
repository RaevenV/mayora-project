import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import "./viewDetailButton.css";

function ViewDetailButton(props) {
//   const [searchData, setSearchData] = useState({});
//   useEffect(() => {
//     const fetchData = async () => {
//       if (props.searchParam) {
//         const q = query(
//           collection(db, "product"),
//           where("SKU", "==", props.searchParam)
//         );
//         const querySnapshot = await getDocs(q);
//         const products = querySnapshot.docs.map((doc) => doc.data());
//         setSearchData(products.length > 0 ? products[0] : {});
//       }
//     };

//     fetchData();
//   }, [props.searchParam]);

// const history = useHistory();

const handleClick = () => {
  const viewDetailLink = "./viewDetail/" + props.searchParam;
  // history.push(viewDetailLink);
};
  return (
    <>
      <div className="detailButtonContainer">
        {/* <Link
          to={viewDetailLink}
          className="detailButton-wrapper"
        >
          View Detail
        </Link> */}
        <button onClick={handleClick} className="detailButton-wrapper">
          View Detail
        </button>
      </div>
    </>
  );
}

export default ViewDetailButton;
