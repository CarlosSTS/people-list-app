import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet, Text, BackHandler } from 'react-native'
import PeopleList from '../../components/PeopleList'
import api from '../../services/api';

const Profile = () => {
  const [people, setPeoples] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  async function loadPeoples() {
    setLoading(true)
    try {
      const response = await api.get()
      const { results } = response.data
      setPeoples(results)
      setLoading(false)
    } catch {
      setLoading(false)
      setError(true)
    }
  }
  useEffect(() => {
    loadPeoples()
  }, []);

  return (
    <View style={styles.container}>
      { loading ?
        <ActivityIndicator size="large" color="#000" />
        : error ?
          <>
            <Text style={styles.errorText}>Ops... Algo deu errado 😔 </Text>
          </>
          : <PeopleList people={people}
          />}
    </View>
  )
}
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  errorText: {
    alignSelf: 'center',
    color: '#f00',
    fontSize: 18,

  }
})