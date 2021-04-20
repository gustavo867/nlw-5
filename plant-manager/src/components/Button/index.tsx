import React from "react";

import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

interface Props extends TouchableOpacityProps {
  text: string;
}

function Button({ text, ...rest }: Props) {
  return (
    <S.Container activeOpacity={0.7} {...(rest as any)}>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}

export default Button;
