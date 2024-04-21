import {StyleSheet} from 'react-native';

export const slideStyles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    borderRadius: 100,
    overflow: 'hidden',
  },
  text: {fontWeight: '600', fontSize: 16},
  thumb: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 100,
    zIndex: 1,
  },
});

export const sliderStyles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    overflow: 'visible',
  },
  track: {
    height: '100%',
    position: 'absolute',
    zIndex: -1,
  },
  thumb: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});
