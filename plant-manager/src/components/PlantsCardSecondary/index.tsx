import React from "react";
import { useNavigation } from "@react-navigation/core";

import { TouchableOpacityProps } from "react-native";
import { ms } from "react-native-size-matters";

import * as S from "./styles";

interface PlantsProps extends TouchableOpacityProps {
  item: {
    name: string;
    photo: string;
    hour: string;
  };
  index: number;
}

function PlantCardSecondary({ item, index, ...rest }: PlantsProps) {
  const { navigate } = useNavigation();

  return (
    <S.Container
      onPress={() => navigate("PlantSave", { item: item })}
      {...(rest as any)}
    >
      <S.Image uri={item.photo} height={ms(50)} width={ms(50)} />
      <S.Name>{item.name}</S.Name>
      <S.Details>
        <S.Label>Regar às</S.Label>
        <S.Time>{item.hour}</S.Time>
      </S.Details>
    </S.Container>
  );
}

export default PlantCardSecondary;
