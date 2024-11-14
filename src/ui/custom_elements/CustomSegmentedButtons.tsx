import {JSX, RefAttributes, useState} from 'react';
import {Text, View} from 'react-native';
import {Button, ButtonProps, SegmentedButtons} from 'react-native-paper';

interface Props {
  value: string;
  onValueChange: (value: string) => void;
  buttons: {value: string; label: string; disabled?: boolean}[];
  textColor?: string;
  secondaryTextColor?: string;
  backgroundColor?: string;
}

export const CustomSegmentedButtons = ({
  value,
  onValueChange,
  buttons,
  textColor,
  secondaryTextColor,
  backgroundColor,
}: Props) => {
  const customButtons = buttons.map(button => {
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
    />
  );
};
