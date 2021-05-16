import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import usePoll from "../../hooks/usePoll";
import PollUI from "../../components/Poll/PollUI";
import { DocumentData, IPoll } from "../../types/common.types";

export default function Poll() {
  const router = useRouter();
  const { id } = router.query;
  const [poll, setPoll] = useState<DocumentData>();

  const { data } = usePoll(id);

  useEffect(() => {
    setPoll(data);
  }, [data]);

  console.log(data);

  return <>{poll && <PollUI name={poll.name} options={poll.options} />}</>;
}
