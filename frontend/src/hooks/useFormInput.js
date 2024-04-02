import { useEffect, useState } from "react";
import { productInputs } from "../formSource";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

function useFormInput() {
  const [data, setData] = useState({});

  function handleChangeData(id, value) {
    setData({ ...data, [id]: value });
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const counterDocRef = doc(db, "counters", "productCounter");
      const counterDocSnap = await getDoc(counterDocRef);
      let counter = 1;
      if (counterDocSnap.exists()) {
        const { value } = counterDocSnap.data();
        counter = value >= 1 && value <= 10 ? value + 1 : 1;
      }

      const customId = `SP${counter}`;
      await setDoc(counterDocRef, { value: counter });
      await setDoc(doc(db, "submittedProduct", customId), {
        ...data,
        approvalUHQC: false,
        approvalSHQC: false,
        approvalPPIC: false,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const SKUval = data["sku"];
  useEffect(() => {
    const fetchData = async () => {
      if (SKUval) {
        const q = query(collection(db, "product"), where("SKU", "==", SKUval));
        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs.map((doc) => doc.data());
        setData(products.length > 0 ? products[0] : {});
      }
    };

    fetchData();
  }, [SKUval]);

  return {
    data,
    handleChangeData,
    onSubmitForm,
    productInputs,
  };
}

export default useFormInput;
