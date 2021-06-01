import React from "react";
import PollUI from "../../components/Poll/PollUI";
import { DocumentData } from "../../types/common.types";
import { firestore } from "../../firebase";

export const getServerSideProps = async (context) => {
  const id: string = context.params.id;
  const res = await firestore.collection("polls").doc(id).get();
  const data: DocumentData = res.data();

  return { props: { data, id } };
};

interface Props {
  data: DocumentData;
  id: string;
}

export default function Poll({ data, id: docId }: Props) {
  return (
    <>
      <PollUI name={data.name} options={data.options} docId={docId} />
    </>
  );
}
