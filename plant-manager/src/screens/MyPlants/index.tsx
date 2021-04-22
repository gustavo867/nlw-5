import React, { useEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import { StoragePlantProps } from "../../@types/plants.types";
import { useStorage } from "../../hooks/useStorage";
import AvatarHeader from "../../components/AvatarHeader";

import * as S from "./styles";

import waterdrop from "../../assets/waterdrop.png";
import { formatDistance } from "date-fns/esm";
import ptBR from "date-fns/locale/pt-BR";
import PlantCardSecondary from "../../components/PlantsCardSecondary";

interface MyPlantsProps {}

function MyPlants({}: MyPlantsProps) {
  const { data } = useStorage<StoragePlantProps>("@plantmanager:plants");
  const [isLoading, setIsLoading] = useState(true);
  const [nextWaterd, setNextWaterd] = useState("");

  const plants = useMemo(() => {
    if (data) {
      const sortedData = Object.keys(data)
        .map((plant) => ({
          ...data[Number(plant)].data,
          hour: format(
            new Date(data[Number(plant)].data.dateTimeNotification),
            "HH:mm"
          ),
        }))
        .sort((a, b) =>
          Math.floor(
            new Date(a.dateTimeNotification).getTime() / 1000 -
              Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
          )
        );

      return sortedData;
    } else {
      return [];
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      const nextTime = formatDistance(
        new Date(plants![0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: ptBR }
      );

      setNextWaterd(
        `Não esqueça de regar a ${plants[0].name} à ${nextTime} horas.`
      );

      setIsLoading(false);
    }

    setIsLoading(false);
  }, [plants]);

  return (
    <S.Container>
      <AvatarHeader />
      <S.SpotLight>
        <S.SpotLightImage source={waterdrop} />
        <S.SpotLightText>{nextWaterd}</S.SpotLightText>
      </S.SpotLight>

      <S.Plants>
        <S.PlantsTitle>Próximas regadas</S.PlantsTitle>
        <S.PlantsList
          data={plants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item, index }) => (
            <PlantCardSecondary index={index} item={item} />
          )}
          contentContainerStyle={{
            flex: 1,
          }}
          showsVerticalScrollIndicator={false}
        />
      </S.Plants>
    </S.Container>
  );
}

export default MyPlants;
