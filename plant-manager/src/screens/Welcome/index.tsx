import React from "react";
import { useNavigation } from "@react-navigation/core";

import hero from "../../assets/hero.png";
import Button from "./Button";
import * as S from "./styles";

function Welcome() {
  const { navigate } = useNavigation();

  return (
    <S.Container>
      <S.Title>
        Gerencie {"\n"}suas plantas de{"\n"}forma fácil
      </S.Title>
      <S.HeroImg source={hero} resizeMode="contain" />
      <S.Desc>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </S.Desc>
      <S.LargeMargin />
      <Button text=">" onPress={() => navigate("UserIdentification")} />
    </S.Container>
  );
}

export default Welcome;
