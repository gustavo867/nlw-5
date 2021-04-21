import { Dimensions } from "react-native";
import { moderateScale, ms } from "react-native-size-matters";
import styled from "styled-components/native";

const { width } = Dimensions.get("screen");

export const Container = styled.TextInput`
  width: ${width * 0.8}px;
  border-bottom-width: ${ms(1)}px;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: ${ms(18)}px;
  font-family: "Regular";
  color: ${(props) => props.theme.body_dark};
  padding: ${ms(10)}px;
  margin-top: ${moderateScale(50)}px;
`;
