import { Dimensions, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ms } from "react-native-size-matters";
import { SvgFromUri } from "react-native-svg";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("screen");

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-between;
  background-color: ${(props) => props.theme.shape};
`;

export const ArrowAbsolute = styled.TouchableOpacity`
  position: absolute;
  left: ${ms(15)}px;
  z-index: 100;
  top: ${StatusBar.currentHeight ? StatusBar.currentHeight + ms(20) : ms(30)}px;
`;

export const PlantInfo = styled.View`
  flex: 1;
  padding-horizontal: ${ms(30)}px;
  padding-vertical: ${ms(50)}px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.shape};
`;

export const ActionBtn = styled.TouchableOpacity`
  width: ${width}px;
  align-self: center;
  align-items: center;
  justify-content: center;
  padding-vertical: ${ms(40)}px;
`;

export const DateTimePickerText = styled.Text`
  color: ${(props) => props.theme.heading};
  font-size: ${ms(24)}px;
  font-family: "Regular";
  text-align: center;
`;

export const Image = styled(SvgFromUri)``;

export const Title = styled.Text`
  font-family: "Semi_Bold";
  color: ${(props) => props.theme.heading};
  font-size: ${ms(24)}px;
  margin-top: ${ms(15)}px;
`;

export const Desc = styled.Text`
  text-align: center;
  font-family: "Regular";
  color: ${(props) => props.theme.heading};
  font-size: ${ms(17)}px;
  margin-top: ${ms(10)}px;
`;

export const Controllers = styled.View`
  background-color: ${(props) => props.theme.white};
  padding-horizontal: ${ms(20)}px;
  padding-bottom: ${ms(10)}px;
`;

export const TipContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.blue_light};
  padding: ${ms(20)}px;
  border-radius: ${ms(20)}px;
  bottom: ${ms(20)}px;
`;

export const Icon = styled.Image`
  height: ${ms(56)}px;
  width: ${ms(56)}px;
`;

export const TipText = styled.Text`
  flex: 1;
  margin-left: ${ms(20)}px;
  font-family: "Regular";
  color: ${(props) => props.theme.blue};
  text-align: justify;
`;

export const AlertText = styled.Text`
  text-align: center;
  font-family: "Regular";
  color: ${(props) => props.theme.heading};
  font-size: ${ms(12)}px;
  margin-bottom: ${ms(5)}px;
`;
