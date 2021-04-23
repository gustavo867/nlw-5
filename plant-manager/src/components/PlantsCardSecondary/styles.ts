import { Animated, Dimensions } from "react-native";
import { moderateScale, ms } from "react-native-size-matters";
import styled from "styled-components/native";
import { SvgFromUri } from "react-native-svg";
import { Swipeable } from "react-native-gesture-handler";
const { width } = Dimensions.get("screen");

export const SwipeableContainer = styled(Swipeable)``;

export const AnimatedContainer = styled(Animated.View)``;

export const ContentRightAction = styled.View``;

export const ActionBtnRight = styled.TouchableOpacity`
  width: ${ms(100)}px;
  height: ${ms(85)}px;
  background-color: ${(props) => props.theme.red};
  margin-top: ${ms(15)}px;
  border-radius: ${ms(20)}px;
  justify-content: center;
  align-items: center;
  position: relative;
  right: ${ms(20)}px;
  padding-left: ${ms(15)}px;
`;

export const Container = styled.TouchableOpacity`
  width: 98%;
  padding-horizontal: ${ms(10)}px;
  padding-vertical: ${ms(25)}px;
  border-radius: ${ms(20)}px;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.shape};
  margin-vertical: ${ms(5)}px;
`;

export const Details = styled.View`
  margin-right: ${ms(8)}px;
  align-items: flex-end;
`;

export const Time = styled.Text`
  margin-top: ${ms(5)}px;
  font-size: ${ms(16)}px;
  font-family: "Semi_Bold";
  color: ${(props) => props.theme.body_dark};
`;

export const Label = styled.Text`
  font-size: ${ms(16)}px;
  font-family: "Semi_Bold";
  color: ${(props) => props.theme.body_light};
`;

export const Image = styled(SvgFromUri)``;

export const Name = styled.Text`
  margin-left: ${ms(10)}px;
  font-family: "Semi_Bold";
  font-size: ${ms(17)}px;
  max-width: ${width * 0.5 - moderateScale(30)}px;
  width: ${width * 0.5 - moderateScale(30)}px;
`;
