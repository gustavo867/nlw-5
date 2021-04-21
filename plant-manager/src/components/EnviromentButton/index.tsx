import React from "react";

import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

interface Props extends TouchableOpacityProps {
  text: string;
  active?: boolean;
}

function EnvironmentButton({ text, active = false, ...rest }: Props) {
  return (
    <S.Container
      active={active}
      activeOpacity={0.7}
      style={rest.style}
      {...(rest as any)}
    >
      <S.Text active={active}>{text}</S.Text>
    </S.Container>
  );
}

export default EnvironmentButton;
