import React, { useState } from "react";
import { IPoll, IPollOption } from "../../types/common.types";
import PollOptionController from "./PollOptionController";
import CustomButton from "../Button";
import { firestore } from "../../firebase";

interface Props {
  name: string;
  options: IPollOption[];
  docId: string;
}

export default function PollUI({ name, options, docId }: Props) {
  const [poll, setPoll] = useState<IPoll>({
    name,
    options,
    id: docId,
  });

  const handleVote = () => {
    // Check if allowed to vote / already disable the vote button

    const tempOption = 0;

    const newVotes = poll.options[tempOption].votes + 1;
    const newOptions = poll.options;
    newOptions[tempOption].votes = newVotes;

    setPoll({ options: newOptions, ...poll });

    firestore.collection("polls").doc(poll.id).set(poll);
  };

  const showResults = () => {
    //
  };
  return (
    <>
      <div className="bg-gray pl-20">
        <div className="text-white text-4xl pb-20 pt-20">{poll.name}</div>
        <PollOptionController options={poll.options} />
        <div className="flex text-white mt-10">
          <CustomButton color="pred" className="mr-10" onClick={handleVote}>
            Vote
          </CustomButton>
          <CustomButton
            color="purple"
            className="uppercase"
            onClick={showResults}
          >
            Reveal results
          </CustomButton>
        </div>
      </div>
    </>
  );
}
