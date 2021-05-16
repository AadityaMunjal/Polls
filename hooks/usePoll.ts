import React, { useState } from "react";
import { firestore } from "../firebase";
import { DocumentData } from "../types/common.types";

export default function usePoll(docId: string) {
  const [data, setData] = useState<DocumentData>();

  firestore
    .collection("polls")
    .doc(docId)
    .onSnapshot((doc) => {
      setData(doc.data());
    });

  return { data };
}
