import type {ReactNode} from 'react';
import type {
  DimensionValue,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {renderIcon} from '../../helpers/renderIcon';
import {useTheme} from '../../theme/ThemeProvider';
import type {A11yProps, IconProp} from '../../types';
import {CloseGlyph} from '../glyphs/Glyphs';

export type DialogButton = {
  text: string;
  onPress: () => void;
  variant?: 'text' | 'solid';
  color?: string;
};

export type DialogProps = A11yProps & {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
  /** Footer buttons, rendered right-aligned. */
  buttons?: DialogButton[];
  closeOnBackdrop?: boolean;
  showCloseButton?: boolean;
  closeIcon?: IconProp;
  animationType?: 'none' | 'fade' | 'slide';
  width?: DimensionValue;
  backgroundColor?: string;
  backdropColor?: string;
  radius?: number;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
};

export const Dialog = ({
  accessibilityLabel,
  animationType = 'fade',
  backdropColor,
  backgroundColor,
  buttons,
  children,
  closeIcon = CloseGlyph,
  closeOnBackdrop = true,
  onClose,
  radius,
  showCloseButton,
  style,
  testID,
  title,
  titleStyle,
  visible,
  width = '85%',
}: DialogProps) => {
  const {colors, radius: themeRadius} = useTheme();

  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      animationType={animationType}
      onRequestClose={onClose}>
      <View
        style={[
          styles.backdrop,
          {backgroundColor: backdropColor ?? colors.overlay},
        ]}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Close"
          testID={testID ? `${testID}-backdrop` : undefined}
          disabled={!closeOnBackdrop}
          onPress={onClose}
          style={StyleSheet.absoluteFill}
        />
        <View
          accessibilityViewIsModal
          accessibilityLabel={accessibilityLabel ?? title}
          testID={testID}
          style={[
            styles.card,
            {
              width,
              backgroundColor: backgroundColor ?? colors.background,
              borderRadius: radius ?? themeRadius.lg,
            },
            style,
          ]}>
          {(!!title || showCloseButton) && (
            <View style={styles.header}>
              {!!title && (
                <Text style={[styles.title, {color: colors.text}, titleStyle]}>
                  {title}
                </Text>
              )}
              {showCloseButton && (
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel="Close"
                  testID={testID ? `${testID}-close` : undefined}
                  hitSlop={8}
                  onPress={onClose}>
                  {renderIcon(closeIcon, {size: 18, color: colors.textMuted})}
                </Pressable>
              )}
            </View>
          )}
          {typeof children === 'string' ? (
            <Text style={{color: colors.textMuted, lineHeight: 20}}>
              {children}
            </Text>
          ) : (
            children
          )}
          {!!buttons?.length && (
            <View style={styles.footer}>
              {buttons.map((button, index) => {
                const solid = button.variant === 'solid';
                const tint = button.color ?? colors.primary;
                return (
                  <Pressable
                    key={button.text}
                    accessibilityRole="button"
                    accessibilityLabel={button.text}
                    testID={testID ? `${testID}-button-${index}` : undefined}
                    onPress={button.onPress}
                    style={({pressed}) => [
                      styles.button,
                      {
                        backgroundColor: solid ? tint : 'transparent',
                        borderRadius: themeRadius.md,
                        opacity: pressed ? 0.7 : 1,
                      },
                    ]}>
                    <Text
                      style={{
                        color: solid ? '#FFFFFF' : tint,
                        fontWeight: '600',
                      }}>
                      {button.text}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    padding: 20,
    maxWidth: 480,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
    marginTop: 18,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
});
