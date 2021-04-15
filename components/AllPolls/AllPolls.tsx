import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase";
import { IPoll } from "../../types/common.types";
import Poll from "../Poll/Poll";

export default function AllPolls() {
  const [polls, setPolls] = useState<Array<IPoll>>();
  const [loading, setLoading] = useState<boolean>(true);

  const getData = async () => {
    setLoading(true);
    const snapshot = await firestore.collection("polls").get();

    // convert firestore.DocumentData to IPoll:
    const pollData: Array<IPoll> = snapshot.docs.map((item) => {
      const doc = item.data();
      return { name: doc.name, options: doc.options, id: item.id };
    });
    setPolls(pollData);
    console.log(polls);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {!loading ? (
        <>
          {polls.map((poll) => {
            return (
              <Poll
                name={poll.name}
                options={poll.options}
                id={poll.id}
                key={poll.id}
              />
            );
          })}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
