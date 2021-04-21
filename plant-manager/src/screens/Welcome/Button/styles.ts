import { ms } from "react-native-size-matters";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.green};
  align-items: center;
  justify-content: center;
  border-radius: ${ms(16)}px;
  margin-bottom: ${ms(10)}px;
  height: ${ms(56)}px;
  padding-horizontal: ${ms(10)}px;
  width: ${ms(56)}px;
  align-self: center;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.white};
  font-size: ${ms(24)}px;
`;
