import {StyleSheet} from 'react-native';
import {PersonalTheme, ValidPlatforms} from '../types/alertTypes';

export const getStyles = (
  os: ValidPlatforms,
  dark = false,
  personalTheme?: PersonalTheme,
  buttons = 2,
  icon = false,
) => {
  const {
    backgroundInputColor,
    cardBackgroundColor,
    descriptionColor,
    inputBorderColor,
    inputColor,
    lineColor,
    titleColor,
  } = personalTheme || {};

  const ios = StyleSheet.create({
    button: {
      backgroundColor: 'transparent',
      borderLeftColor: !!lineColor ? lineColor : dark ? '#616161' : '#C3C3C3',
      borderTopColor: !!lineColor ? lineColor : dark ? '#616161' : '#C3C3C3',
      borderTopWidth: 1,
      paddingVertical: 12,
    },
    buttonsContainer: {
      flexDirection: buttons <= 2 ? 'row' : undefined,
      marginTop: 15,
    },
    description: {
      color: !!descriptionColor ? descriptionColor : dark ? '#FFF' : '#000',
      marginTop: 8,
      paddingLeft: '15%',
      paddingRight: icon ? '12%' : '15%',
      textAlign: 'center',
    },
    flex: {
      flex: 1,
    },
    label: {
      color: '#4F87FF',
      fontWeight: '700',
      marginTop: 15,
      paddingHorizontal: 20,
    },
    modalContainer: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
    modalView: {
      backgroundColor: !!cardBackgroundColor
        ? cardBackgroundColor
        : dark
        ? '#222'
        : '#EEE',
      borderRadius: 10,
      paddingTop: 20,
      width: '90%',
    },
    textInput: {
      backgroundColor: !!backgroundInputColor
        ? backgroundInputColor
        : dark
        ? '#1c1c1e'
        : '#FFF',
      borderColor: !!inputBorderColor
        ? inputBorderColor
        : dark
        ? '#616161'
        : '#C3C3C3',
      borderRadius: 10,
      borderWidth: 1,
      color: !!inputColor ? inputColor : dark ? '#FFF' : '#000',
      marginHorizontal: '5%',
      marginTop: 10,
      padding: 7,
    },
    title: {
      color: !!titleColor ? titleColor : dark ? '#FFF' : '#000',
      fontSize: 17,
      fontWeight: '600',
      textAlign: 'center',
    },
  });

  const android = StyleSheet.create({
    button: {
      backgroundColor: 'transparent',
      paddingVertical: 12,
    },
    buttonsContainer: {
      flexDirection: 'row',
      gap: 25,
      justifyContent: 'flex-end',
      marginTop: 15,
      paddingHorizontal: 20,
    },
    description: {
      color: !!descriptionColor ? descriptionColor : dark ? '#FFF' : '#000',
      marginBottom: 10,
      marginTop: 8,
      paddingLeft: 20,
      paddingRight: icon ? 30 : 20,
    },
    flex: {
      flex: 1,
    },
    label: {
      color: '#00d982',
      fontWeight: '700',
      marginTop: 15,
      paddingHorizontal: 20,
    },
    modalContainer: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
    modalView: {
      backgroundColor: !!cardBackgroundColor
        ? cardBackgroundColor
        : dark
        ? '#282F2C'
        : '#FFF',
      borderRadius: 5,
      paddingTop: 20,
      width: '90%',
    },
    textInput: {
      backgroundColor: !!backgroundInputColor
        ? backgroundInputColor
        : 'transparent',
      borderBottomColor: !!inputBorderColor ? inputBorderColor : '#00d982',
      borderBottomWidth: 1.5,
      borderRadius: 3,
      color: !!inputColor ? inputColor : dark ? '#FFF' : '#000',
      marginHorizontal: '5%',
      padding: 7,
    },
    title: {
      color: !!titleColor ? titleColor : dark ? '#FFF' : '#000',
      fontSize: 16,
      fontWeight: '600',
      marginHorizontal: 20,
    },
  });

  return os === 'ios' ? ios : android;
};
