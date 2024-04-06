import React, {useState} from 'react';
import {Platform, Switch as RNSwitch, View} from 'react-native';

interface Props {
  isOn?: boolean;
  backgrounColor?: string;
  border?: boolean;
  borderColor?: string;
  onChange?: (value: boolean) => void;
}

export const Switch = ({
  isOn,
  onChange,
  backgrounColor = '#1DFF56',
  border,
  borderColor,
}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    if (!!onChange) {
      onChange(!isEnabled);
    }
  };

  return (
    <View
      style={{
        borderWidth: border ? 2 : 0,
        borderColor,
        borderRadius: 16,
      }}>
      <RNSwitch
        trackColor={{false: '#D9D9DB', true: backgrounColor}}
        thumbColor={Platform.OS === 'android' ? backgrounColor : ''}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
