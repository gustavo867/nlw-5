import React from "react";
import { useStorage } from "../../hooks/useStorage";
import * as S from "./styles";

function AvatarHeader() {
  const { data } = useStorage<string>("@plantmanager:user");

  return (
    <S.Container>
      <S.Title>
        Ola,{"\n"}
        <S.Title style={{ fontFamily: "Semi_Bold" }}>
          {data ? data : ""}
        </S.Title>
      </S.Title>
      <S.Image
        source={{ uri: "https://avatars.githubusercontent.com/u/63013756?v=4" }}
      />
    </S.Container>
  );
}

export default AvatarHeader;
