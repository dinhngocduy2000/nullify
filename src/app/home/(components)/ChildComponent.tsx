"use client";
import { QUERY_KEYS } from "@/library/enum/query-keys";
import { fetchCurrentUser } from "@/networking/usersAPI";
import { useQuery } from "@tanstack/react-query";
import React from "react";

type Props = {};

const ChildComponent = (props: Props) => {
  const { data: userProfile } = useQuery({
    queryKey: [QUERY_KEYS.PROFILE],
    queryFn: () => fetchCurrentUser(),
  });
  return <div></div>;
};

export default ChildComponent;
