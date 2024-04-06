import {StyleSheet} from 'react-native';

export const progressBarStyles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
  },
  progressText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
});
