import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#E2F9FF',
  },
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#BBB",

    alignItems: 'center',
    flexDirection: 'row',
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
  },
  avatar: {
    left: 10,
    aspectRatio: 1, // não redimensionar image
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#eee',

  }
});

export default styles;