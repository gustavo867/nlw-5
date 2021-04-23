import React, { useEffect, useMemo, useState } from "react";
import { format } from "date-fns";
import { Plants, StoragePlantProps } from "../../@types/plants.types";
import { useStorage, useStorageRemove } from "../../hooks/useStorage";
import AvatarHeader from "../../components/AvatarHeader";
import * as Notifications from "expo-notifications";
import * as S from "./styles";

import waterdrop from "../../assets/waterdrop.png";
import { formatDistance } from "date-fns/esm";
import ptBR from "date-fns/locale/pt-BR";
import PlantCardSecondary from "../../components/PlantsCardSecondary";
import Loading from "../../components/Loading";
import { Alert } from "react-native";

function MyPlants() {
  const { data } = useStorage<StoragePlantProps>("@plantmanager:plants");
  const [plantsData, setPlantsData] = useState<Plants[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextWaterd, setNextWaterd] = useState("");
  const { handleRemove } = useStorageRemove<Plants>({
    key: "@plantmanager:plants",
    state: plantsData,
  });

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
    if (data !== undefined) {
      if (plants.length > 1) {
        const nextTime = formatDistance(
          new Date(plants![0].dateTimeNotification).getTime(),
          new Date().getTime(),
          { locale: ptBR }
        );

        setNextWaterd(
          `Não esqueça de regar a ${plants[0].name} à ${nextTime} horas.`
        );

        setPlantsData(plants);
        setIsLoading(false);
      }
    }

    setIsLoading(false);
  }, [plants, data]);

  useEffect(() => {
    if (!plantsData) {
      setIsLoading(true);
    }
  }, [plantsData]);

  const removePlant = async (item: Plants) => {
    try {
      const s = await Notifications.removeNotificationSubscription(
        item.notificationId
      );

      Alert.alert(`Remover`, `Deseja remover a ${item.name}?`, [
        {
          text: "Não 🙏",
          style: "cancel",
        },
        {
          text: "Sim 😥",
          onPress: async () => {
            const remove = await handleRemove(item);

            setPlantsData(remove as any);
          },
          style: "default",
        },
      ]);
    } catch (e) {
      Alert.alert(`Remover`, `Deseja remover a ${item.name}?`, [
        {
          text: "Não 🙏",
          style: "cancel",
        },
        {
          text: "Sim 😥",
          onPress: async () => {
            const remove = await handleRemove(item);

            setPlantsData(remove as any);
          },
          style: "default",
        },
      ]);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <Loading />;
  }

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
          data={plantsData}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item, index }) => (
            <PlantCardSecondary
              handleRemove={() => removePlant(item as any)}
              index={index}
              item={item}
            />
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
