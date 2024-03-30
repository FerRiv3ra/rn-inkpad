import {StyleSheet} from 'react-native';

export const buttonStyles = StyleSheet.create({
  fab: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    alignItems: 'center',
    zIndex: 10,
  },
  textContainer: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    marginRight: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
});
