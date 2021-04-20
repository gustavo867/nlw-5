import React, { ReactNode } from "react";
import {
  Platform,
  ScrollViewProps,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { moderateScale } from "react-native-size-matters";

interface Props extends ScrollViewProps {
  bounces?: boolean;
  children?: ReactNode;
}

const ScrollComponent = React.forwardRef<ScrollView, Props>((props, ref) => {
  const { bounces, children, ...rest } = props;

  if (Platform.OS === "ios") {
    return (
      <ScrollView
        style={{
          flexGrow: 1,
          overflow: "hidden",
        }}
        bounces={bounces}
        ref={ref}
        showsVerticalScrollIndicator={false}
        {...rest}
      >
        <KeyboardAwareScrollView
          contentContainerStyle={{
            flex: 1,
            paddingBottom: moderateScale(60),
          }}
        >
          {children}
        </KeyboardAwareScrollView>
      </ScrollView>
    );
  } else {
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1,
          flexGrow: 1,
        }}
        behavior="height"
      >
        <ScrollView
          bounces={bounces}
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="always"
          style={{
            marginBottom: moderateScale(10),
            flex: 1,
            flexGrow: 1,
          }}
          contentContainerStyle={{
            marginBottom: moderateScale(20),
          }}
          ref={ref}
          {...rest}
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
});

export default ScrollComponent;
