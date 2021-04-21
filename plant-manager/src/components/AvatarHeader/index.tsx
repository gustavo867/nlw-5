import React from "react";
import * as S from "./styles";

function AvatarHeader() {
  return (
    <S.Container>
      <S.Title>
        Ola,{"\n"}
        <S.Title style={{ fontFamily: "Semi_Bold" }}>Tiago</S.Title>
      </S.Title>
      <S.Image
        source={{ uri: "https://avatars.githubusercontent.com/u/63013756?v=4" }}
      />
    </S.Container>
  );
}

export default AvatarHeader;
