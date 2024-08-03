import React from 'react';
import {Modal, Text, TextInput, View} from 'react-native';

import {Button, Icon} from './components';
import {useAlertContainer} from './hooks/useAlertContainer';
import {useTheme} from './hooks/useTheme';
import {AlertData, PersonalTheme} from './types/alertTypes';

type Props = {
  animationType?: 'none' | 'fade' | 'slide';
  appearance?: 'light' | 'dark';
  personalTheme?: PersonalTheme;
  theme?: 'ios' | 'android';
};

export function AlertContainer({
  theme,
  appearance,
  personalTheme,
  animationType,
}: Props) {
  const {prompt, isAlert, inputRef, setTextInput, handlePress} =
    useAlertContainer();
  const {styles, textButtonColor, cancelWeight, ios} = useTheme({
    appearance,
    buttons: (prompt as AlertData)?.buttons?.length,
    personalTheme,
    theme,
    icon: !!(prompt as AlertData)?.icon,
  });

  if (!prompt) return;

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
  } = prompt as AlertData;

  return (
    <Modal
      style={{zIndex: 9999}}
      visible={!!prompt}
      transparent
      animationType={animationType}>
      <View
        style={{
          ...styles.modalContainer,
          backgroundColor: !!backgroundColor
            ? backgroundColor
            : 'rgba(0,0,0,0.4)',
        }}>
        <View
          style={{
            ...styles.modalView,
            marginBottom: isAlert ? 0 : '50%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 15,
            }}>
            {!!icon && <Icon icon={icon} iconColor={iconColor} ios={ios} />}
            <View style={{flex: 1}}>
              <Text style={{...styles.title}}>{title}</Text>
              {description && (
                <Text style={{...styles.description}}>{description}</Text>
              )}
            </View>
          </View>
          {!ios && !!label && <Text style={{...styles.label}}>{label}</Text>}
          {!isAlert && (
            <TextInput
              placeholder={placeholder ?? prompt.title}
              onChangeText={setTextInput}
              placeholderTextColor={
                !!placeholderColor
                  ? placeholderColor
                  : appearance === 'dark'
                  ? '#666'
                  : '#C3C3C3'
              }
              ref={inputRef}
              style={{...styles.textInput}}
            />
          )}

          <View style={{...styles.buttonsContainer}}>
            {!!buttons ? (
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
      </View>
    </Modal>
  );
}
