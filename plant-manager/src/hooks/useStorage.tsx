import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StoragePlantProps } from "../@types/plants.types";

export function useStorage<T = string>(key: string) {
  const [hasStorage, setHasStorage] = useState(false);
  const [data, setData] = useState<T>();
  const isLoading = useRef(true);

  const handleStorage = useCallback(async () => {
    const storageData = await AsyncStorage.getItem(key);

    if (storageData) {
      isLoading.current = false;
      setHasStorage(true);
      setData(JSON.parse(storageData));
    } else {
      isLoading.current = false;
      setHasStorage(false);
    }
  }, []);

  useEffect(() => {
    handleStorage();
  }, []);

  const values = useMemo(
    () => ({
      hasStorage,
      data,
      isLoading,
    }),
    [hasStorage, data, isLoading]
  );

  return values;
}

export function useSaveStorage<T = StoragePlantProps, R = any>(key: string) {
  const saveData = useCallback(
    async (plant: R | any) => {
      const data = await AsyncStorage.getItem(key);
      const oldData = data ? (JSON.parse(data) as T) : {};

      const newPlant = {
        [plant.id]: {
          data: plant,
        },
      };

      await AsyncStorage.setItem(
        key,
        JSON.stringify({ ...newPlant, ...oldData })
      );
    },
    [key]
  );

  const values = useMemo(() => ({ saveData }), [saveData]);

  return values;
}
