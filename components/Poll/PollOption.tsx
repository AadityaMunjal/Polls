import React from "react";
import { IPollOption } from "../../types/common.types";

export default function PollOption({ name, votes }: IPollOption) {
  return (
    <>
      <div
        className={`bg-gray-light mt-4 mb-4 p-5 w-96 rounded-lg cursor-pointer`}
      >
        <div className="center text-lg text-white ml-5">{name}</div>
        {/* <div>{votes}</div> */}
      </div>
    </>
  );
}
