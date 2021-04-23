import React, { useContext, useState } from "react";
import { ActivityIndicator } from "react-native";
import { ThemeContext } from "styled-components";
import AvatarHeader from "../../components/AvatarHeader";
import EnvironmentButton from "../../components/EnviromentButton";
import Loading from "../../components/Loading";
import PlantCardPrimary from "../../components/PlantCardPrimary";
import { usePlants } from "../../hooks/usePlants";
import * as S from "./styles";

function PlantSelect() {
  const {
    isLoading,
    plantsEnvironment,
    plants,
    handleFetchMore,
    loadingMore,
  } = usePlants();
  const [currentSelect, setCurrentSelect] = useState<
    "living_room" | "bedroom" | "kitchen" | "bathroom" | "all"
  >("all");
  const { green: themeGreen } = useContext(ThemeContext);

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
