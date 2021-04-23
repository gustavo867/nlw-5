import React, { useContext } from "react";
import { PlantsContext } from "../context/PlantsContext";

export function usePlants() {
  const {
    handleFetchMore,
    isLoading,
    plantsEnvironment,
    plants,
    loadingMore,
    myPlants,
    setData,
  } = useContext(PlantsContext);

  return {
    handleFetchMore,
    isLoading,
    plantsEnvironment,
    plants,
    loadingMore,
    myPlants,
    setData,
  };
}
