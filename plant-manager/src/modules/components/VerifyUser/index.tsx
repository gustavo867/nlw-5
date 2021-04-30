import React, { useEffect } from "react";
import Loading from "../../../components/Loading";
import { useStorage } from "../../../hooks/useStorage";
import { navigate } from "../../../routes/routes";

function VerifyUser() {
  const { data, isLoading, hasStorage } = useStorage("@plantmanager:user");

  useEffect(() => {
    if (isLoading.current === false) {
      if (hasStorage && data) {
        navigate("PlantSelect");
      } else {
        navigate("Welcome");
      }
    }
  }, [isLoading, hasStorage, data]);

  return <Loading />;
}

export default VerifyUser;
