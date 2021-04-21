import React, { useCallback, useContext, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { ThemeContext } from "styled-components";
import { Plants, Plants_water_frequencies } from "../../@types/plants.types";
import AvatarHeader from "../../components/AvatarHeader";
import EnvironmentButton from "../../components/EnviromentButton";
import Loading from "../../components/Loading";
import PlantCardPrimary from "../../components/PlantCardPrimary";
import { api } from "../../services/api";
import * as S from "./styles";

function PlantSelect() {
  const [plantsEnvironment, setPlantsEnvironment] = useState<
    Plants_water_frequencies[] | []
  >([]);
  const [currentSelect, setCurrentSelect] = useState<
    "living_room" | "bedroom" | "kitchen" | "bathroom" | "all"
  >("all");
  const [plants, setPlants] = useState<Plants[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const { green: themeGreen } = useContext(ThemeContext);

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
      `plants?_sort=name&_order=asc&page=${page}&_limit=8`
    );

    if (!plants.data) {
      return setIsLoading(true);
    }

    if (page > 1) {
      setPlants((state) => [...state, ...plants.data]);
    } else {
      setPlants(plants.data);
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <AvatarHeader />
      <S.LargeMarginHeight />
      <S.Title>
        Em qual ambiente {"\n"}
        <S.Title
          style={{
            fontFamily: "Regular",
          }}
        >
          você quer colocar sua planta?
        </S.Title>
      </S.Title>
      <S.EnvironmentList
        data={plantsEnvironment as any}
        keyExtractor={(item) => item.key}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item, index }) => (
          <EnvironmentButton
            onPress={() =>
              setCurrentSelect((state) =>
                state === item.key ? "all" : (item.key as any)
              )
            }
            active={currentSelect === item.key}
            text={item.title}
          />
        )}
      />
      <S.PlantsList
        data={plants.filter((item) => {
          return (
            item.environments.includes(currentSelect) || currentSelect === "all"
          );
        })}
        onEndReachedThreshold={0.1}
        onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        renderItem={({ item, index }) => (
          <PlantCardPrimary item={item} index={index} />
        )}
        ListFooterComponent={
          loadingMore ? (
            <ActivityIndicator color={themeGreen} size="large" />
          ) : (
            <></>
          )
        }
      />
    </S.Container>
  );
}

export default PlantSelect;
