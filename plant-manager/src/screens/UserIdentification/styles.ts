import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ms } from "react-native-size-matters";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("screen");

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  width: ${width}px;
  height: ${height}px;
  overflow: hidden;
`;

export const LargeMarginHeight = styled.View`
  height: ${ms(30)}px;
`;

export const Title = styled.Text`
  font-size: ${ms(24)}px;
  line-height: ${ms(32)}px;
  text-align: center;
  font-family: "Semi_Bold";
  color: ${(props) => props.theme.heading};
  margin-top: ${ms(24)}px;
`;

export const Content = styled.View`
  flex: 1;
  width: ${width}px;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  padding-horizontal: ${ms(50)}px;
  align-items: center;
`;

export const Emoji = styled.Text`
  font-size: ${ms(44)}px;
`;
