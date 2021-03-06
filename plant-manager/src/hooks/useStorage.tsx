import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StoragePlantProps } from "../@types/plants.types";
import { Alert } from "react-native";

interface UseStorageRemove<T> {
  key: string;
  state: T[];
}

export function useStorage<T = string>(
  key: string,
  delay = 2000,
  hasDelay = true
) {
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

    isLoading.current = false;
  }, []);

  useEffect(() => {
    if (hasDelay) {
      const timeout = setInterval(() => {
        if (data) {
          handleStorage();
        } else {
          isLoading.current = true;
          handleStorage();
        }
      }, delay);
    } else {
      handleStorage();
    }
  }, []);

  const values = useMemo(
    () => ({
      hasStorage,
      data,
      isLoading,
    }),
    [hasStorage, data, isLoading, isLoading.current]
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
          notificationId: plant.notificationId,
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

export function useStorageRemove<T = any, S = any>({
  key,
  state,
}: UseStorageRemove<T>) {
  const handleRemove = useCallback(async (item: any) => {
    console.log("oi");
    try {
      const data = await AsyncStorage.getItem(key);
      const items: any = data ? (JSON.parse(data) as S) : {};

      delete items[item.id];

      const newState = state.filter((d: any) => d.id === item.id);

      await AsyncStorage.setItem(key, JSON.stringify(items));

      return newState;
    } catch (e) {
      Alert.alert("N??o foi poss??vel remover! ????");
    }
  }, []);

  const values = useMemo(
    () => ({
      handleRemove,
    }),
    [handleRemove]
  );

  return values;
}
