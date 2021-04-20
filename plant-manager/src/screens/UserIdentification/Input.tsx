import React, { useContext, useEffect, useState } from "react";
import { Keyboard, TextInputProps } from "react-native";
import { ThemeContext } from "styled-components";

import * as S from "./styles.input";

const Input: React.FC<TextInputProps> = ({ children, value, ...props }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { green: themeGreen } = useContext(ThemeContext);

  useEffect(() => {
    Keyboard.addListener("keyboardDidHide", () => {
      setIsFocus(false);
    });

    Keyboard.addListener("keyboardDidShow", () => {
      setIsFocus(true);
    });

    return () => {
      Keyboard.removeListener("keyboardDidHide", (e) => {});
      Keyboard.removeListener("keyboardDidShow", (e) => {});
    };
  }, []);

  useEffect(() => {
    if (value !== "") {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, [value]);

  return (
    <S.Container
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      style={(isFilled || isFocus) && { borderColor: themeGreen }}
      {...(props as any)}
    />
  );
};

export default Input;
