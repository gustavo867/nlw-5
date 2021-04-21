import { Dimensions } from "react-native";
import { ms } from "react-native-size-matters";
import styled from "styled-components/native";
import { SvgFromUri } from "react-native-svg";
const { width } = Dimensions.get("screen");

export const Container = styled.TouchableOpacity`
  width: ${width * 0.4}px;
  background-color: ${(props) => props.theme.shape};
  border-radius: ${ms(20)}px;
  padding-vertical: ${ms(10)}px;
  min-height: ${ms(100)}px;
  align-items: center;
  margin: ${ms(10)}px;
`;

export const Image = styled(SvgFromUri)``;

export const Name = styled.Text`
  color: ${(props) => props.theme.heading};
  font-size: ${ms(13)}px;
  font-family: "Semi_Bold";
  margin-vertical: ${ms(16)}px;
`;
