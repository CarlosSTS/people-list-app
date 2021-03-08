import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container : {
    padding: 15,
    marginTop: 10,

  },
  avatar : {
    aspectRatio: 1, // não redimensionar image
    alignSelf: 'center',
    width:128,
    height:128,
    borderRadius: 64,
    backgroundColor: '#eee',

  },
  detailContainer : {
    backgroundColor: '#e2f9ff',
    marginTop: 20,
    marginBottom: 40,
    elevation: 1,
  },
});

export default styles;