import {StyleSheet} from 'react-native';

export const slideStyles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    borderRadius: 100,
    overflow: 'hidden',
  },
  text: {fontWeight: '600', fontSize: 16},
  track: {
    height: '100%',
    // backgroundColor: '#3f3f3f',
    position: 'absolute',
    zIndex: -1,
  },
  thumb: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 100,
    zIndex: 1,
  },
});
