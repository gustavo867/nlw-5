import { useNavigation } from "@react-navigation/core";
import React from "react";

import { TouchableOpacityProps } from "react-native";
import { ms } from "react-native-size-matters";
import { Plants } from "../../@types/plants.types";

import * as S from "./styles";

interface PlantsProps extends TouchableOpacityProps {
  item: Plants;
  index: number;
}

function PlantCardPrimary({ item, index, ...rest }: PlantsProps) {
  const { navigate } = useNavigation();

  return (
    <S.Container
      onPress={() => navigate("PlantSave", { item: item })}
      {...(rest as any)}
    >
      <S.Image uri={item.photo} height={ms(80)} width={ms(80)} />
      <S.Name>{item.name}</S.Name>
    </S.Container>
  );
}

export default PlantCardPrimary;
