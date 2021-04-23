import React, { useContext } from "react";
import { TouchableOpacityProps } from "react-native";
import { ms } from "react-native-size-matters";
import { Feather } from "@expo/vector-icons";

import * as S from "./styles";
import { ThemeContext } from "styled-components";

interface PlantsProps extends TouchableOpacityProps {
  item: {
    name: string;
    photo: string;
    hour: string;
  };
  index: number;
  handleRemove?: () => void;
}

function PlantCardSecondary({
  item,
  index,
  handleRemove,
  ...rest
}: PlantsProps) {
  const colors = useContext(ThemeContext);

  return (
    <S.SwipeableContainer
      overshootRight={false}
      renderRightActions={() => (
        <S.AnimatedContainer>
          <S.ContentRightAction>
            <S.ActionBtnRight onPress={handleRemove}>
              <Feather name="trash" size={ms(32)} color={colors.white} />
            </S.ActionBtnRight>
          </S.ContentRightAction>
        </S.AnimatedContainer>
      )}
    >
      <S.Container {...(rest as any)}>
        <S.Image uri={item.photo} height={ms(50)} width={ms(50)} />
        <S.Name>{item.name}</S.Name>
        <S.Details>
          <S.Label>Regar às</S.Label>
          <S.Time>{item.hour}</S.Time>
        </S.Details>
      </S.Container>
    </S.SwipeableContainer>
  );
}

export default PlantCardSecondary;
