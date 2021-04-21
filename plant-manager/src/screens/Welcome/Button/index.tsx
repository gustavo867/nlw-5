import React, { useContext } from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";
import { ms } from "react-native-size-matters";
import { ThemeContext } from "styled-components";

interface Props extends TouchableOpacityProps {
  text: string;
}

function Button({ text, ...rest }: Props) {
  const { white } = useContext(ThemeContext);

  return (
    <S.Container activeOpacity={0.7} {...(rest as any)}>
      <Feather name="chevron-right" size={ms(20)} color={white} />
    </S.Container>
  );
}

export default Button;
