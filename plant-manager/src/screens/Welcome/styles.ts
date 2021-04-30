import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ms } from "react-native-size-matters";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("screen");

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.heading};
  font-size: ${ms(30)}px;
  max-width: ${width * 0.7}px;
  text-align: center;
  align-self: center;
  margin-top: ${ms(30)}px;
  font-family: "Semi_Bold";
  line-height: ${ms(34)}px;
`;

export const LargeMargin = styled.View`
  height: ${ms(40)}px;
`;

export const HeroImg = styled.Image`
  margin-top: ${ms(40)}px;
  align-self: center;
`;

export const Desc = styled.Text`
  color: #5c6660;
  font-size: ${ms(17)}px;
  max-width: ${width * 0.8}px;
  text-align: center;
  margin-top: ${ms(40)}px;
  align-self: center;
  font-family: "Regular";
`;
