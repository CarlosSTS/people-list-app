import React from 'react';
import { Image, ScrollView,View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './styles';

import Line from '../../components/Line'
const Detail = () => {
  const route = useRoute();
  const people = route.params.people

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: people.picture.large }}
      />
      <View style={styles.detailContainer}>
        <Line label="Email" content={people.email} />
        <Line label="Cidade" content={people.location.city} />
        <Line label="Estado" content={people.location.state} />
        <Line label="Tel" content={people.phone} />
        <Line label="Cel" content={people.cell} />
        <Line label="Nacionalidade" content={people.nat} />
      </View>
    </ScrollView>
  )
}

export default Detail;