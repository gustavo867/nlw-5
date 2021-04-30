import { Dimensions, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ms } from "react-native-size-matters";
import styled from "styled-components/native";
import { SvgFromUri } from "react-native-svg";
import { Plants as PlantsType } from "../../@types/plants.types";

const { width, height } = Dimensions.get("screen");

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

export const Blur = styled.View`
  height: ${height}px;
  width: ${width}px;
  position: absolute;
  z-index: 10;
  background-color: #ccc;
  opacity: 0.8;
`;

export const RemoveModal = styled.View`
  width: ${width * 0.75}px;
  height: ${height * 0.45}px;
  padding: ${ms(5)}px;
  border-radius: ${ms(25)}px;
  position: absolute;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  top: ${height * 0.2}px;
  z-index: 1000;
  background-color: ${(props) => props.theme.background};
`;

export const ActionButtonsContainer = styled.View`
  width: 95%;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const ModalImgContainer = styled.View`
  background-color: ${(props) => props.theme.shape};
  height: ${ms(120)}px;
  width: ${ms(120)}px;
  border-radius: ${ms(12)}px;
  align-items: center;
  justify-content: center;
`;

export const ModalImg = styled(SvgFromUri)``;

export const ModalTitle = styled.Text`
  font-size: ${ms(17)}px;
  font-family: "Regular";
  align-self: center;
  text-align: center;
  color: ${(props) => props.theme.heading};
`;

export const ActionBtn = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 45%;
  border-radius: ${ms(12)}px;
  height: ${ms(48)}px;
  background-color: ${(props) => props.theme.shape};
  align-items: center;
  justify-content: center;
  margin-top: ${ms(20)}px;
`;

export const ActionBtnText = styled.Text`
  color: ${(props) => props.theme.heading};
  font-size: ${ms(15)}px;
  font-family: "Regular";
`;
