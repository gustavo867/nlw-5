import React from "react";
import LottieView from "lottie-react-native";
import load from "../../assets/load.json";
import * as S from "./styles";
import { ms } from "react-native-size-matters";

function Loading() {
  return (
    <S.Container>
      <LottieView
        source={load}
        autoPlay
        loop
        style={{
          backgroundColor: "transparent",
          width: ms(200),
          height: ms(200),
        }}
      />
    </S.Container>
  );
}

export default Loading;
