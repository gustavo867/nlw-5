import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ms } from "react-native-size-matters";
import styled from "styled-components/native";

const { height, width } = Dimensions.get("screen");

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: ${height}px;
`;

export const Title = styled.Text`
  font-size: ${ms(24)}px;
  font-family: "Semi_Bold";
  color: ${(props) => props.theme.heading};
`;

export const LargeMarginHeight = styled.View`
  height: ${ms(40)}px;
`;

export const Desc = styled.Text`
  margin-top: ${ms(16)}px;
  font-size: ${ms(17)}px;
  align-self: center;
  max-width: ${width * 0.9}px;
  text-align: center;
  color: ${(props) => props.theme.body_dark};
`;

export const Emoji = styled.Text`
  font-size: ${ms(96)}px;
`;
