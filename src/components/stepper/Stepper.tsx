import type {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {renderIcon} from '../../helpers/renderIcon';
import {useTheme} from '../../theme/ThemeProvider';
import type {A11yProps, IconProp} from '../../types';
import {CheckGlyph} from '../glyphs/Glyphs';

export type Step = {
  label?: string;
  /** Replaces the step number. */
  icon?: IconProp;
};

export type StepperProps = A11yProps & {
  steps: Step[];
  /** Index of the active step (0-based). Steps before it are completed. */
  current: number;
  orientation?: 'horizontal' | 'vertical';
  activeColor?: string;
  completedColor?: string;
  pendingColor?: string;
  textColor?: string;
  /** Icon drawn on completed steps. Defaults to a built-in check. */
  completedIcon?: IconProp;
  /** Makes the steps pressable. */
  onStepPress?: (index: number) => void;
  size?: number;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
};

export const Stepper = ({
  accessibilityLabel = 'Progress steps',
  activeColor,
  completedColor,
  completedIcon = CheckGlyph,
  current,
  labelStyle,
  onStepPress,
  orientation = 'horizontal',
  pendingColor,
  size = 28,
  steps,
  style,
  testID,
  textColor,
}: StepperProps) => {
  const {colors} = useTheme();
  const active = activeColor ?? colors.primary;
  const completed = completedColor ?? active;
  const pending = pendingColor ?? colors.border;
  const horizontal = orientation === 'horizontal';

  return (
    <View
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      style={[horizontal ? styles.row : styles.column, style]}>
      {steps.map((step, i) => {
        const isCompleted = i < current;
        const isActive = i === current;
        const stepColor = isCompleted ? completed : isActive ? active : pending;
        const isLast = i === steps.length - 1;

        return (
          <View key={i} style={horizontal ? styles.hStep : styles.vStep}>
            {horizontal && !isLast && (
              <View
                style={[
                  styles.hLine,
                  {
                    top: size / 2 - 1,
                    backgroundColor: isCompleted ? completed : pending,
                  },
                ]}
              />
            )}
            <View style={horizontal ? styles.hCircle : styles.vCircleCol}>
              <Pressable
                accessibilityRole={onStepPress ? 'button' : undefined}
                accessibilityLabel={step.label ?? `Step ${i + 1}`}
                accessibilityState={{
                  selected: isActive,
                  disabled: !onStepPress,
                }}
                testID={testID ? `${testID}-step-${i}` : undefined}
                disabled={!onStepPress}
                onPress={() => onStepPress?.(i)}
                style={{
                  width: size,
                  height: size,
                  borderRadius: size / 2,
                  borderWidth: 2,
                  borderColor: stepColor,
                  backgroundColor:
                    isCompleted || isActive ? stepColor : 'transparent',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {isCompleted && !step.icon ? (
                  renderIcon(completedIcon, {
                    size: size * 0.6,
                    color: '#FFFFFF',
                  })
                ) : step.icon ? (
                  renderIcon(step.icon, {
                    size: size * 0.55,
                    color: isCompleted || isActive ? '#FFFFFF' : pending,
                  })
                ) : (
                  <Text
                    style={{
                      color: isActive ? '#FFFFFF' : colors.textMuted,
                      fontWeight: '700',
                      fontSize: size * 0.45,
                    }}>
                    {i + 1}
                  </Text>
                )}
              </Pressable>
              {!horizontal && !isLast && (
                <View
                  style={[
                    styles.vLine,
                    {backgroundColor: isCompleted ? completed : pending},
                  ]}
                />
              )}
            </View>
            {!!step.label && (
              <Text
                numberOfLines={2}
                style={[
                  styles.label,
                  horizontal
                    ? styles.hLabel
                    : {marginLeft: 12, marginTop: size / 4},
                  {
                    color:
                      textColor ?? (isActive ? colors.text : colors.textMuted),
                  },
                  isActive && styles.activeLabel,
                  labelStyle,
                ]}>
                {step.label}
              </Text>
            )}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  column: {
    flexDirection: 'column',
  },
  hStep: {
    flex: 1,
    alignItems: 'center',
  },
  hCircle: {
    zIndex: 1,
  },
  hLine: {
    position: 'absolute',
    left: '50%',
    right: '-50%',
    height: 2,
  },
  hLabel: {
    textAlign: 'center',
    paddingHorizontal: 2,
  },
  vStep: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  vCircleCol: {
    alignItems: 'center',
  },
  vLine: {
    width: 2,
    height: 32,
    marginVertical: 4,
  },
  label: {
    fontSize: 12,
    marginTop: 6,
  },
  activeLabel: {
    fontWeight: '700',
  },
});
