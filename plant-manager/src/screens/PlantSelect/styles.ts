import { Dimensions, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ms } from "react-native-size-matters";
import styled from "styled-components/native";
import { Plants, Plants_water_frequencies } from "../../@types/plants.types";

const { width } = Dimensions.get("screen");

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;

export const LargeMarginHeight = styled.View`
  height: ${ms(20)}px;
`;

export const Title = styled.Text`
  font-size: ${ms(17)}px;
  color: ${(props) => props.theme.heading};
  font-family: "Medium";
  line-height: ${ms(23)}px;
  margin-top: ${ms(15)}px;
  width: ${width * 0.9}px;
  align-self: center;
`;

export const EnvironmentList = styled(
  FlatList as new () => FlatList<Plants_water_frequencies>
)`
  flex-grow: 0;
  height: ${ms(60)}px;
  width: ${width * 0.9}px;
  align-self: center;
  margin-top: ${ms(24)}px;
`;

export const PlantsList = styled(FlatList as new () => FlatList<Plants>)`
  flex-grow: 1;
  align-self: center;
  margin-top: ${ms(20)}px;
`;
