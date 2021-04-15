import React, { useState } from "react";
import { PollOption, PollContainer, PollName } from "./Styles";
import { IPoll } from "../../types/common.types";
import { firestore } from "../../firebase";

export default function AllPolls({ name, options, id }: IPoll) {
  const [poll, setPoll] = useState<IPoll>({
    name: name,
    options: options,
    id: id,
  });

  // TODO: see if the person has already voted for this option after auth is done
  // TODO: toggleVote instead of incrementVotes
  const incrementVotes = (option: number) => {
    // TODO: use spread operator to simplify this:

    const newVotes = poll.options[option].votes + 1;
    const newOptions = poll.options;
    newOptions[option].votes = newVotes;
    const newState: IPoll = {
      name: poll.name,
      options: newOptions,
      id: poll.id,
    };
    setPoll(newState);
    updateVotes();
  };

  const updateVotes = () => {
    firestore.collection("polls").doc(id).update({
      options: poll.options,
    });
  };

  return (
    <PollContainer>
      <PollName>{poll.name}</PollName>
      {poll.options.map((option, index) => {
        return (
          <PollOption>
            <button onClick={() => incrementVotes(index)}>
              {option.name}: {option.votes}
            </button>
          </PollOption>
        );
      })}
    </PollContainer>
  );
}
