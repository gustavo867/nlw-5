import { Dimensions } from "react-native";
import { ms } from "react-native-size-matters";
import styled from "styled-components/native";

const { width } = Dimensions.get("screen");

type Props = {
  disabled: boolean;
};

export const Container = styled.TouchableOpacity<Props>`
  background-color: ${(props) =>
    props.disabled ? props.theme.green_light : props.theme.green};
  align-items: center;
  justify-content: center;
  border-radius: ${ms(16)}px;
  height: ${ms(56)}px;
  width: ${width * 0.6}px;
  align-self: center;
  margin-top: ${ms(10)}px;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.white};
  font-size: ${ms(17)}px;
  font-family: "Medium";
  line-height: ${ms(23)}px;
`;
