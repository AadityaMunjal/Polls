import React, { useState } from "react";
import PollOption from "./PollOption";
import { IPollOption } from "../../types/common.types";

interface Props {
  options: IPollOption[];
}

export default function PollOptionController({ options }: Props) {
  return (
    <>
      {options.map((option, idx) => {
        return <PollOption key={idx} votes={option.votes} name={option.name} />;
      })}
    </>
  );
}
