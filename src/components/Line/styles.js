import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  line: {
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: "#C5C5C5"
  },
  cell: {
    fontSize: 18,
    paddingLeft: 5,
    //     borderWidth: 1, 
  },
  label: {
    fontWeight: 'bold',
    flex: 1,
  },
  content: {
    flex: 3,
  },
  longLabel : {
    fontSize: 11,
  },
  longContent : {
    fontSize: 15,
  }
});

export default styles;