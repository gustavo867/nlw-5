import { Dimensions } from "react-native";
import { ms } from "react-native-size-matters";
import styled from "styled-components/native";

const { width } = Dimensions.get("screen");

export const Container = styled.View`
  width: ${width * 0.9}px;
  align-self: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${ms(20)}px;
`;

export const Column = styled.View``;

export const Title = styled.Text`
  font-size: ${ms(32)}px;
  font-family: "Light";
  line-height: ${ms(36)}px;
  max-width: ${width * 0.8 - ms(60)}px;
  color: ${(props) => props.theme.heading};
`;

export const Image = styled.Image`
  height: ${ms(70)}px;
  width: ${ms(70)}px;
  border-radius: ${ms(35)}px;
`;
