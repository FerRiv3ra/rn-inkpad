import {StyleSheet} from 'react-native';

export const actionSheetStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'flex-end',
  },
  closeButton: {
    borderRadius: 50,
    padding: 5,
    position: 'absolute',
    right: 15,
    top: 15,
    zIndex: 5,
  },
  controlsCupertino: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingHorizontal: '3%',
    paddingTop: 20,
  },
  controlsMaterial: {
    paddingTop: 20,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
  },
  textCenter: {
    textAlign: 'center',
  },
  textLeft: {
    textAlign: 'left',
    marginLeft: 10,
  },
  subTitle: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 13,
  },
});
