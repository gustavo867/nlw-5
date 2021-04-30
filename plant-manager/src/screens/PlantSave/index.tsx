import React, { useCallback, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/core";
import { moderateScale } from "react-native-size-matters";
import { Alert, Dimensions, Platform } from "react-native";
import { format, isBefore } from "date-fns";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import Button from "../../components/Button";
import ScrollComponent from "../../modules/components/ScrollComponent";
import waterdrop from "../../assets/waterdrop.png";
import { Plants, StoragePlantProps } from "../../@types/plants.types";
import * as Notifications from "expo-notifications";
import * as S from "./styles";
import { useSaveStorage } from "../../hooks/useStorage";

const { width } = Dimensions.get("screen");

type RouteProps = {
  item: Plants;
};

export default function PlantSave() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === "ios");
  const { saveData } = useSaveStorage<StoragePlantProps>(
    "@plantmanager:plants"
  );
  const { params } = useRoute();
  const { goBack, navigate } = useNavigation();

  const { item } = params as RouteProps;

  const handleChangeTime = useCallback(
    (e: Event, dateTime: Date | undefined) => {
      if (Platform.OS === "android") {
        setShowDatePicker((state) => !state);
      }

      if (dateTime && isBefore(dateTime, new Date())) {
        setSelectedDateTime(new Date());
        return Alert.alert("Escolha uma hora no futuro!");
      }

      if (dateTime) {
        setSelectedDateTime(dateTime);
      }
    },
    []
  );

  const handleSave = useCallback(async () => {
    const nextTime = new Date(item.dateTimeNotification);
    const now = new Date();

    const { times, repeat_every } = item.frequency;

    if (repeat_every === "week") {
      const interval = Math.trunc(7 / times);
      nextTime.setDate(now.getDate() + interval);
    } else {
      nextTime.setDate(now.getDate() + 1);
    }

    const seconds = Math.abs(
      Math.ceil((now.getTime() - nextTime.getTime()) / 1000)
    );

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Heeey, 🌱",
        body: `Está na hora de cuidar da sua ${item.name}`,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data: {
          item,
        },
      },
      trigger: {
        seconds: seconds < 60 ? 60 : seconds,
        repeats: true,
      },
    });

    await saveData({
      ...item,
      id: String(item.id),
      dateTimeNotification: selectedDateTime,
      notificationId,
    });

    navigate("Confirmation", {
      title: "Tudo certo",
      subtitle:
        "Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.",
      buttonTitle: "Muito obrigado :D",
      icon: "hug",
      nextScreen: "MyPlants",
    });
  }, [item]);

  return (
    <>
      <S.ArrowAbsolute onPress={() => goBack()}>
        <Entypo name="chevron-left" size={moderateScale(30)} color="#52665A" />
      </S.ArrowAbsolute>
      <S.Container>
        <ScrollComponent showsVerticalScrollIndicator>
          <S.PlantInfo>
            <S.Image
              uri={item.photo}
              width={moderateScale(200)}
              height={moderateScale(200)}
            />
            <S.Title>{item.name}</S.Title>
            <S.Desc>{item.about}</S.Desc>
          </S.PlantInfo>
        </ScrollComponent>
        <S.Controllers>
          <S.TipContainer>
            <S.Icon source={waterdrop} />
            <S.TipText>{item.water_tips}</S.TipText>
          </S.TipContainer>
          <S.AlertText>Escolha o melhor horário para ser lembrado:</S.AlertText>

          {Platform.OS === "ios" && (
            <DateTimePicker
              value={selectedDateTime}
              mode="time"
              display="spinner"
              onChange={handleChangeTime}
            />
          )}
          {Platform.OS === "android" && (
            <S.ActionBtn onPress={() => setShowDatePicker(true)}>
              <S.DateTimePickerText>{`Mudar ${format(
                selectedDateTime,
                "HH:mm"
              )}`}</S.DateTimePickerText>
            </S.ActionBtn>
          )}
          {Platform.OS === "android" && showDatePicker && (
            <DateTimePicker
              value={selectedDateTime}
              mode="time"
              display="spinner"
              onChange={handleChangeTime}
            />
          )}
          <Button
            text="Cadastrar planta"
            onPress={() => handleSave()}
            buttonWidth={width * 0.9}
          />
        </S.Controllers>
      </S.Container>
    </>
  );
}
