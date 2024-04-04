"use client";

import { useSearchParams } from "next/navigation";

const ClientFlashComponents = () => {
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get("error");

  return <>{errorMessage && <p>{errorMessage}</p>}</>;
};

export default ClientFlashComponents;
