import React, {useState} from 'react';
import {
  Platform,
  Switch as RNSwitch,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SwitchProps} from '../../types';

export const Switch = ({
  backgrounColor = '#1DFF56',
  border,
  borderColor,
  borderWidth = 2,
  isOn,
  fullWidth,
  justifyContent,
  onChange,
  textStyle,
  text,
}: SwitchProps) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const isWeb = Platform.OS === 'web';

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    if (!!onChange) {
      onChange(!isEnabled);
    }
  };

  return (
    <View
      style={{
        width: fullWidth ? '100%' : 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        justifyContent,
      }}>
      {text && <Text style={textStyle}>{text}</Text>}

      {isWeb ? (
        <TouchableOpacity
          onPress={toggleSwitch}
          style={[
            styles.switchContainer,
            {borderWidth: border ? borderWidth : 0, borderColor},
            {backgroundColor: isOn ? backgrounColor : '#D9D9DB'},
          ]}>
          <View
            style={[
              styles.thumb,
              {alignSelf: isOn ? 'flex-end' : 'flex-start'},
            ]}
          />
        </TouchableOpacity>
      ) : (
        <View
          style={{
            borderWidth: border ? borderWidth : 0,
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 50,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    padding: 5,
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
});
