import React from "react";
import Button from "../../../components/Button";

import * as S from "./styles";

function Confirmation() {
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
      <Button text="Começar" />
    </S.Container>
  );
}

export default Confirmation;
