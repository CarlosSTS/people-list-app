import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { View, Image, Text, FlatList } from 'react-native';
import { CapitalizeFirstLetter } from '../../utils';
import styles from './styles'

const PeopleList = (props) => {
  const { people } = props;
  const navigation = useNavigation()

  function navigationToDetail(people) {
    navigation.navigate('Detail', { people })
  }

  return (
    <>
    <FlatList
      style={styles.container}
      data={people}
      keyExtractor={item => String(Math.random(item))}
      renderItem={({ item: people }) => (
        <RectButton
          onPress={() => navigationToDetail(people)}>
          <View style={styles.line}>
            <Image
              style={styles.avatar}
              source={{ uri: people.picture.thumbnail }}
            />
            <Text style={styles.lineText}>
              {` ${CapitalizeFirstLetter(people.name.title)
                } ${CapitalizeFirstLetter(people.name.first)
                } ${CapitalizeFirstLetter(people.name.last)
                }`}
            </Text>
          </View>
        </RectButton>
      )}
    />
    </>
  )
}

export default PeopleList;