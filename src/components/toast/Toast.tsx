import {Animated, StyleSheet, Text} from 'react-native';

import {renderIcon} from '../../helpers/renderIcon';
import {useToast} from '../../hooks';
import type {ToastProps} from '../../types';

export const Toast = ({
  accessibilityLabel,
  backgroundColor = 'rgba(0,0,0,0.7)',
  duration = 3000,
  bottom = 30,
  top = 50,
  fontSize = 14,
  icon,
  setVisible,
  position = 'top',
  testID,
  text,
  textColor = '#FFF',
  visible,
}: ToastProps) => {
  const {show, translateY} = useToast(visible, duration, position, setVisible);

  if (!show) return null;

  return (
    <Animated.View
      accessibilityRole="alert"
      accessibilityLiveRegion="polite"
      accessibilityLabel={accessibilityLabel ?? text}
      testID={testID}
      style={[
        styles.container,
        {backgroundColor},
        {transform: [{translateY: translateY}]},
        position === 'top' ? {top} : {bottom},
      ]}>
      {renderIcon(icon, {size: fontSize + 4, color: textColor})}
      {!!text && <Text style={{color: textColor, fontSize}}>{text}</Text>}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    padding: 10,
    paddingHorizontal: 15,
    position: 'absolute',
  },
});
