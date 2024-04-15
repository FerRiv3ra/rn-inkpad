import {StyleSheet} from 'react-native';

export const fabStyles = StyleSheet.create({
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

export const buttonStyles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  text: {
    fontWeight: '600',
  },
});

export const longPressButtonStyles = StyleSheet.create({
  button: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContent: {
    alignItems: 'center',
    gap: 5,
  },
  progress: {
    position: 'absolute',
    height: '100%',
  },
});
