import { ms } from "react-native-size-matters";
import styled from "styled-components/native";

type Props = {
  active: boolean;
};

export const Container = styled.TouchableOpacity<Props>`
  background-color: ${(props) =>
    props.active ? props.theme.green_light : props.theme.shape};
  align-items: center;
  justify-content: center;
  border-radius: ${ms(12)}px;
  height: ${ms(40)}px;
  width: ${ms(76)}px;
  align-self: center;
  margin-right: ${ms(5)}px;
`;

export const Text = styled.Text<Props>`
  color: ${(props) =>
    props.active ? props.theme.green_dark : props.theme.heading};
  font-size: ${ms(13)}px;
  font-family: ${(props) => (props.active ? "Semi_Bold" : "Regular")};
  line-height: ${ms(23)}px;
`;
