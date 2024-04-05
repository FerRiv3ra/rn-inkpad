import {StyleSheet} from 'react-native';

export const inputStyles = StyleSheet.create({
  input: {
    paddingHorizontal: 5,
    paddingVertical: 8,
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  icon: {
    alignSelf: 'center',
  },
  btnViewPass: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    position: 'absolute',
    right: 0,
  },
});
