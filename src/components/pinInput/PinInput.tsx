import type {ComponentRef} from 'react';
import {useEffect, useRef, useState} from 'react';
import type {
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useTheme} from '../../theme/ThemeProvider';
import type {A11yProps} from '../../types';

export type PinInputProps = A11yProps & {
  /** Number of cells. */
  length?: number;
  /** Controlled value. */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Called once all cells are filled. */
  onComplete?: (value: string) => void;
  /** Masks the digits. */
  secure?: boolean;
  /** Only allow digits (default) or any character. */
  numeric?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoFocus?: boolean;
  disabled?: boolean;
  error?: boolean;
  variant?: 'box' | 'underline';
  size?: number;
  gap?: number;
  radius?: number;
  color?: string;
  borderColor?: string;
  focusedColor?: string;
  errorColor?: string;
  textColor?: string;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  cellStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const PinInput = ({
  accessibilityHint,
  accessibilityLabel = 'Verification code',
  autoFocus,
  backgroundColor,
  borderColor,
  cellStyle,
  color,
  defaultValue = '',
  disabled,
  error,
  errorColor,
  focusedColor,
  gap = 10,
  keyboardType,
  length = 4,
  numeric = true,
  onChange,
  onComplete,
  radius,
  secure,
  size = 48,
  style,
  testID,
  textColor,
  textStyle,
  value,
  variant = 'box',
}: PinInputProps) => {
  const {colors, radius: themeRadius} = useTheme();
  const inputRef = useRef<ComponentRef<typeof TextInput>>(null);
  const [internal, setInternal] = useState(defaultValue);
  const [focused, setFocused] = useState(false);
  const current = (value ?? internal).slice(0, length);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (current.length === length) {
      onCompleteRef.current?.(current);
    }
  }, [current, length]);

  const handleChange = (text: string) => {
    const clean = (numeric ? text.replace(/[^0-9]/g, '') : text).slice(
      0,
      length,
    );
    if (value === undefined) {
      setInternal(clean);
    }
    onChange?.(clean);
  };

  const focus = () => {
    if (!disabled) {
      inputRef.current?.focus();
    }
  };

  const idle = borderColor ?? colors.border;
  const active = focusedColor ?? color ?? colors.primary;
  const errorTint = errorColor ?? colors.error;
  const activeIndex = Math.min(current.length, length - 1);

  return (
    <View testID={testID} style={[styles.container, style]}>
      <Pressable
        accessibilityRole="none"
        accessible={false}
        onPress={focus}
        style={[styles.row, {gap}]}>
        {Array.from({length}, (_, i) => {
          const char = current[i];
          const isActive = focused && i === activeIndex && !disabled;
          const tint = error ? errorTint : isActive ? active : idle;
          return (
            <View
              key={i}
              testID={testID ? `${testID}-cell-${i}` : undefined}
              style={[
                styles.cell,
                {
                  width: size,
                  height: size,
                  backgroundColor:
                    backgroundColor ??
                    (variant === 'box' ? colors.surface : 'transparent'),
                },
                variant === 'box'
                  ? {
                      borderWidth: isActive || error ? 2 : 1,
                      borderColor: tint,
                      borderRadius: radius ?? themeRadius.md,
                    }
                  : {
                      borderBottomWidth: isActive || error ? 3 : 2,
                      borderBottomColor: tint,
                    },
                disabled && styles.disabled,
                cellStyle,
              ]}>
              <Text
                style={[
                  styles.char,
                  {color: textColor ?? colors.text, fontSize: size * 0.45},
                  textStyle,
                ]}>
                {char ? (secure ? '•' : char) : isActive ? '|' : ''}
              </Text>
            </View>
          );
        })}
      </Pressable>
      <TextInput
        ref={inputRef}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        testID={testID ? `${testID}-input` : undefined}
        value={current}
        onChangeText={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        maxLength={length}
        autoFocus={autoFocus}
        editable={!disabled}
        keyboardType={keyboardType ?? (numeric ? 'number-pad' : 'default')}
        autoComplete="one-time-code"
        textContentType="oneTimeCode"
        caretHidden
        style={styles.hiddenInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cell: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  char: {
    fontWeight: '700',
  },
  disabled: {
    opacity: 0.5,
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    width: 1,
    height: 1,
  },
});
