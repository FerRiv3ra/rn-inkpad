import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {Button, Icon} from './components';
import {useAlertContainer} from './hooks/useAlertContainer';
import {useTheme} from './hooks/useTheme';
import type {AlertData, PersonalTheme} from './types/alertTypes';

export type AlertContainerProps = {
  animationType?: 'none' | 'fade' | 'slide';
  appearance?: 'light' | 'dark';
  personalTheme?: PersonalTheme;
  theme?: 'ios' | 'android';
  /**
   * Tapping the dimmed background cancels the alert or prompt.
   * Off by default, like the native dialogs.
   */
  dismissOnBackdropPress?: boolean;
};

export function AlertContainer({
  theme,
  appearance,
  personalTheme,
  animationType,
  dismissOnBackdropPress = false,
}: AlertContainerProps) {
  const {prompt, isAlert, inputRef, setTextInput, handlePress, textInput} =
    useAlertContainer();
  const {styles, textButtonColor, cancelWeight, ios} = useTheme({
    appearance,
    buttons: (prompt as AlertData)?.buttons?.length,
    personalTheme,
    theme,
    icon: !!(prompt as AlertData)?.icon,
  });

  if (!prompt) {
    return null;
  }

  const {placeholderColor, backgroundColor} = personalTheme ?? {};

  const {
    title,
    icon,
    iconColor,
    buttons,
    cancelColorText,
    cancelText,
    confirmColorText,
    confirmText,
    description,
    label,
    placeholder,
    keyboardType,
    secureTextEntry,
    autoCapitalize,
    maxLength,
    inputProps,
  } = prompt as AlertData;

  return (
    <Modal
      style={local.modal}
      visible={!!prompt}
      transparent
      animationType={animationType}
      onRequestClose={() => handlePress(true)}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={[
          styles.modalContainer,
          {backgroundColor: backgroundColor ?? 'rgba(0,0,0,0.4)'},
        ]}>
        <Pressable
          testID="alert-backdrop"
          disabled={!dismissOnBackdropPress}
          onPress={() => handlePress(true)}
          style={StyleSheet.absoluteFill}
        />
        <View accessibilityViewIsModal style={styles.modalView}>
          <View style={local.header}>
            {!!icon && <Icon icon={icon} iconColor={iconColor} ios={ios} />}
            <View style={local.flex}>
              <Text accessibilityRole="header" style={styles.title}>
                {title}
              </Text>
              {description && (
                <Text style={styles.description}>{description}</Text>
              )}
            </View>
          </View>
          {!ios && !!label && <Text style={styles.label}>{label}</Text>}
          {!isAlert && (
            <TextInput
              testID="prompt-input"
              accessibilityLabel={label ?? placeholder ?? title}
              {...inputProps}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
              autoCapitalize={autoCapitalize}
              maxLength={maxLength}
              placeholder={placeholder ?? title}
              value={textInput}
              onChangeText={setTextInput}
              onSubmitEditing={() => handlePress()}
              placeholderTextColor={
                placeholderColor
                  ? placeholderColor
                  : appearance === 'dark'
                    ? '#666'
                    : '#C3C3C3'
              }
              ref={inputRef}
              style={[styles.textInput, inputProps?.style]}
            />
          )}

          <View style={styles.buttonsContainer}>
            {buttons ? (
              buttons.map((button, index) => (
                <Button
                  button={button}
                  isFirst={index === 0}
                  key={index}
                  theme={theme}
                  appearance={appearance}
                  buttons={buttons.length}
                  onPress={() => handlePress(true, button.onPress)}
                />
              ))
            ) : (
              <>
                {(!isAlert || (prompt as AlertData).showCancelButton) && (
                  <Button
                    button={{
                      text: cancelText ?? 'Cancel',
                      onPress: () => handlePress(true),
                      textStyle: {
                        color: cancelColorText ?? textButtonColor,
                        fontWeight: cancelWeight,
                      },
                    }}
                    theme={theme}
                    appearance={appearance}
                    isFirst
                  />
                )}
                <Button
                  button={{
                    text: confirmText ? confirmText : isAlert ? 'Ok' : 'Done',
                    onPress: () => handlePress(),
                    textStyle: {
                      color: confirmColorText ?? textButtonColor,
                      fontWeight: isAlert ? '500' : '700',
                    },
                  }}
                  theme={theme}
                  appearance={appearance}
                />
              </>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const local = StyleSheet.create({
  modal: {zIndex: 9999},
  header: {flexDirection: 'row', marginHorizontal: 15},
  flex: {flex: 1},
});
