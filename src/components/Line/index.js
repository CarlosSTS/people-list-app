import React from 'react';
import { View, Text } from 'react-native'
import styles from './styles';

function Line({ label = '', content = "-" }) {

  return (
    <View style={styles.line}>
      <Text style={[
        styles.cell,
        styles.label,
        label.length > 8 ? styles.longLabel : null
      ]}>{label}:</Text>
      <Text style={[
        styles.cell,
        styles.content,
        content.length > 20 ? styles.longContent : null
      ]}>{content}</Text>
    </View>
  );
}

export default Line;