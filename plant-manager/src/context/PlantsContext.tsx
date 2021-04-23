import React, {
  useState,
  useCallback,
  createContext,
  ReactNode,
  useEffect,
  useMemo,
} from "react";
import { format } from "date-fns";
import { Plants, Plants_water_frequencies } from "../@types/plants.types";
import { useStorage } from "../hooks/useStorage";
import { api } from "../services/api";

interface IPlantsContext {
  plants: Plants[];
  setData: React.Dispatch<React.SetStateAction<Plants[]>>;
  myPlants: Plants[];
  handleFetchMore: (distance: number) => void;
  isLoading: boolean;
  loadingMore: boolean;
  plantsEnvironment: Plants_water_frequencies[];
}

type Props = {
  children?: ReactNode;
};

export const PlantsContext = createContext<IPlantsContext>(
  {} as IPlantsContext
);

export function PlantsProvider({ children }: Props) {
  const [data, setData] = useState<Plants[]>([]);
  const [myPlantsData, setMyPlantsData] = useState<Plants[]>([]);
  const [plantsEnvironment, setPlantsEnvironment] = useState<
    Plants_water_frequencies[] | []
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const { data: storagedData, hasStorage } = useStorage<Plants[]>(
    "@plantmanager:plants"
  );

  const plants = useMemo(() => {
    return data.length > 1
      ? data.map((item) => ({
          ...item,
          dateTimeNotification: new Date(),
          hour: format(new Date(), "HH:mm"),
        }))
      : [];
  }, [data]);

  const myPlants = useMemo(() => {
    return myPlantsData.length > 1
      ? myPlantsData.map((item) => ({
          ...item,
          dateTimeNotification: new Date(),
          hour: format(new Date(), "HH:mm"),
        }))
      : [];
  }, [myPlantsData]);

  const handleFetchMore = useCallback(
    (distance: number) => {
      if (distance < 1) {
        return;
      }

      setLoadingMore(true);
      setPage((state) => state + 1);
      loadPlants();
    },
    [page, loadingMore]
  );

  const loadPlants = useCallback(async () => {
    const plants = await api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=8`
    );

    if (!plants.data) {
      return setIsLoading(true);
    }

    if (page > 1) {
      setData((state) => [...state, ...plants.data]);
    } else {
      setData(plants.data);
    }

    setIsLoading(false);
    setLoadingMore(false);
  }, [api, page]);

  const callApi = useCallback(async () => {
    try {
      const res = await api.get("plants_environments?_sort=title&_order=asc");

      setPlantsEnvironment([
        {
          key: "all",
          title: "Todos",
        },
        ...res.data,
      ]);
      setIsLoading(false);
    } catch (e) {
      console.log(e.request);
    }
  }, [api]);

  useEffect(() => {
    callApi();
    loadPlants();
  }, []);

  useEffect(() => {
    if (hasStorage) {
      if (storagedData) {
        setMyPlantsData(storagedData as any);
      }
    }
  }, [storagedData, hasStorage]);

  const values = useMemo(
    () => ({
      plants,
      setData,
      myPlants,
      handleFetchMore,
      isLoading,
      loadingMore,
      plantsEnvironment,
    }),
    [
      plants,
      data,
      setData,
      myPlantsData,
      myPlants,
      handleFetchMore,
      isLoading,
      loadingMore,
      plantsEnvironment,
    ]
  );

  return (
    <PlantsContext.Provider value={values}>{children}</PlantsContext.Provider>
  );
}
