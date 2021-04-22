import React from "react";
import { useNavigation, useRoute } from "@react-navigation/core";

import Button from "../../../components/Button";

import * as S from "./styles";

type Params = {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: "smile" | "hug";
  nextScreen: string;
};

const emojis = {
  hug: "🤗",
  smile: "😄",
};

function Confirmation() {
  const { params } = useRoute();
  const { title, subtitle, icon, nextScreen, buttonTitle } = params as Params;
  const { navigate } = useNavigation();

  return (
    <S.Container>
      <S.Emoji>{emojis[icon]}</S.Emoji>
      <S.LargeMarginHeight />
      <S.Title>{title}</S.Title>
      <S.Desc>{subtitle}</S.Desc>
      <S.LargeMarginHeight />
      <Button text={buttonTitle} onPress={() => navigate(nextScreen)} />
    </S.Container>
  );
}

export default Confirmation;
