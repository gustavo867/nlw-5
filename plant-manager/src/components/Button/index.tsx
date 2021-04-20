import React from "react";

import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

interface Props extends TouchableOpacityProps {
  text: string;
  disabled?: boolean;
}

function Button({ text, disabled = false, ...rest }: Props) {
  return (
    <S.Container
      activeOpacity={0.7}
      style={rest.style}
      disabled={disabled}
      {...(rest as any)}
    >
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}

export default Button;
