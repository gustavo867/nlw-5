import { Dimensions, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ms } from "react-native-size-matters";
import styled from "styled-components/native";
const { width } = Dimensions.get("screen");

type PlantsType = {
  hour: string;
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string[];
  frequency: {
    times: number;
    repeat_every: string;
  };
  dateTimeNotification: Date;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: ${ms(30)}px;
  background-color: ${(props) => props.theme.background};
`;

export const SpotLight = styled.View`
  background-color: ${(props) => props.theme.blue_light};
  padding-horizontal: ${ms(20)}px;
  border-radius: ${ms(20)}px;
  height: ${ms(110)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${ms(20)}px;
`;

export const SpotLightImage = styled.Image`
  width: ${ms(60)}px;
  height: ${ms(60)}px;
`;

export const SpotLightText = styled.Text`
  flex: 1;
  color: ${(props) => props.theme.blue};
  padding-horizontal: ${ms(20)}px;
`;

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantsTitle = styled.Text`
  font-size: ${ms(24)}px;
  font-family: "Semi_Bold";
  margin-vertical: ${ms(20)}px;

  color: ${(props) => props.theme.heading};
`;

export const PlantsList = styled(FlatList as new () => FlatList<PlantsType>)``;
