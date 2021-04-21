import React from "react";
import { useNavigation } from "@react-navigation/core";

import Button from "../../../components/Button";

import * as S from "./styles";

function Confirmation() {
  const { navigate } = useNavigation();

  return (
    <S.Container>
      <S.Emoji>😄</S.Emoji>
      <S.LargeMarginHeight />
      <S.Title>Prontinho</S.Title>
      <S.Desc>
        Agora vamos começar a cuidar das suas {"\n"}plantinhas com muito
        cuidado.
      </S.Desc>
      <S.LargeMarginHeight />
      <Button text="Começar" onPress={() => navigate("PlantSelect")} />
    </S.Container>
  );
}

export default Confirmation;
