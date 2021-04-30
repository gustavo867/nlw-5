import React, { useContext } from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";
import { ms } from "react-native-size-matters";
import { ThemeContext } from "styled-components";

interface Props extends TouchableOpacityProps {}

function Button({ ...rest }: Props) {
  const { white: whiteTheme } = useContext(ThemeContext);

  return (
    <S.Container activeOpacity={0.7} {...(rest as any)}>
      <Feather name="chevron-right" size={ms(20)} color={whiteTheme} />
    </S.Container>
  );
}

export default Button;
