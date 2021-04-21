import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import Button from "../../components/Button";
import Input from "./components/Input";
import * as S from "./styles";
import ScrollComponent from "../../modules/components/ScrollComponent";

function UserIdentification() {
  const [name, setName] = useState("");
  const { navigate } = useNavigation();

  return (
    <ScrollComponent>
      <S.Container>
        <S.Content>
          <S.Form>
            <S.Emoji>{name !== "" ? "😄" : "😀"}</S.Emoji>
            <S.Title>Como podemos{"\n"}chamar você?</S.Title>
            <Input
              placeholder="Digite um nome"
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <S.LargeMarginHeight />
            <Button
              text="Confirmar"
              disabled={name === ""}
              onPress={() => navigate("Confirmation")}
            />
          </S.Form>
        </S.Content>
      </S.Container>
    </ScrollComponent>
  );
}

export default UserIdentification;
