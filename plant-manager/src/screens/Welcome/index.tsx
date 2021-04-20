import React from "react";

import hero from "../../assets/hero.png";
import Button from "../../components/Button";
import * as S from "./styles";

function Welcome() {
  return (
    <S.Container>
      <S.Title>
        Gerencie {"\n"} suas plantas{"\n"} de forma fácil
      </S.Title>
      <S.HeroImg source={hero} resizeMode="contain" />
      <S.Desc>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </S.Desc>
      <S.LargeMargin />
      <Button text=">" />
    </S.Container>
  );
}

export default Welcome;
