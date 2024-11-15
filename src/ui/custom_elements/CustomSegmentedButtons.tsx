import { JSX, RefAttributes, useState } from "react";
import { StyleProp, Text, View } from "react-native";
import { Button, ButtonProps, SegmentedButtons } from "react-native-paper";
import { Style } from "react-native-paper/lib/typescript/components/List/utils";

interface Props {
  value: string;
  onValueChange: (value: string) => void;
  buttons: { value: string; label: string; disabled?: boolean }[];
  textColor?: string;
  secondaryTextColor?: string;
  backgroundColor?: string;
  style?: StyleProp<Style>;
}

export const CustomSegmentedButtons = ({
  value,
  onValueChange,
  buttons,
  textColor,
  secondaryTextColor,
  backgroundColor,
  style,
}: Props) => {
  const customButtons = buttons.map((button) => {
    return {
      ...button,
      checkedColor: textColor,
      uncheckedColor: secondaryTextColor,
    };
  });

  const customTheme = {
    colors: {
      secondaryContainer: backgroundColor,
    },
  };

  return (
    <SegmentedButtons
      value={value}
      onValueChange={onValueChange}
      buttons={customButtons}
      theme={customTheme}
      style={style}
    />
  );
};
