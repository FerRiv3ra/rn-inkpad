import {StyleSheet} from 'react-native';

export const cardStyles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 3,
  },
  cardContent: {
    flexDirection: 'row',
  },
  icon: {
    paddingRight: 10,
    paddingTop: 22,
  },
  title: {
    fontWeight: '800',
  },
  description: {
    paddingRight: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 5,
    gap: 10,
  },
  button: {
    paddingHorizontal: 10,
    borderRadius: 2,
    paddingVertical: 2,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});

export const cardImageStyles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  text: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});
