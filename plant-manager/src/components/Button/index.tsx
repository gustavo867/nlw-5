import React from "react";

import { Dimensions, TouchableOpacityProps } from "react-native";
import { ms } from "react-native-size-matters";
import * as S from "./styles";

interface Props extends TouchableOpacityProps {
  text: string;
  disabled?: boolean;
  buttonWidth?: number;
  buttonHeight?: number;
}

const { width } = Dimensions.get("screen");

function Button({
  text,
  disabled = false,
  buttonHeight = ms(56),
  buttonWidth = width * 0.6,
  ...rest
}: Props) {
  return (
    <S.Container
      activeOpacity={0.7}
      style={[
        rest.style,
        {
          height: buttonHeight,
          width: buttonWidth,
        },
      ]}
      disabled={disabled}
      {...(rest as any)}
    >
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}

export default Button;
