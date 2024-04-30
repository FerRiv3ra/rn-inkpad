import {StyleSheet} from 'react-native';

export const drawerStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    zIndex: 5,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  drawer: {
    height: '100%',
  },
  button: {
    position: 'absolute',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
  groupItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
  group: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  itemText: {
    fontWeight: '600',
  },
});
