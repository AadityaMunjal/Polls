import React, { useState } from "react";
import { firestore } from "../firebase";

export default function usePoll(docId: string) {
  const [data, setData] = useState<any>();

  firestore
    .collection("polls")
    .doc(docId)
    .onSnapshot((doc) => {
      setData(doc.data());
    });

  return { data };
}
