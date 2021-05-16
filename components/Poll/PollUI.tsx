import React from "react";
import { IPollOption } from "../../types/common.types";
import PollOption from "./PollOption";
import CustomButton from "../Button";

interface Props {
  name: string;
  options: Array<IPollOption>;
}

export default function PollUI({ name, options }: Props) {
  return (
    <>
      <div className="bg-gray pl-20">
        <div className="text-white text-4xl pb-20 pt-20">{name}</div>
        {options.map((option) => {
          return <PollOption votes={option.votes} name={option.name} />;
        })}
        <div className="flex text-white mt-10">
          <CustomButton className="mr-10">Vote</CustomButton>
          <CustomButton bgColor="purple" className="uppercase" disabled>
            Reveal results
          </CustomButton>
        </div>
      </div>
    </>
  );
}
