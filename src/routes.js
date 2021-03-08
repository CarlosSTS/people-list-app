import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Profile from './pages/Profile';
import Detail from './pages/Detail';

const Stack = createStackNavigator();

const routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: true,
        headerTintColor: "#fff",
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 30,
        },
      }}>

        <Stack.Screen name="Profile" component={Profile}
          options={{ title: "Pessoas" }}
        />
        <Stack.Screen name="Detail" component={Detail}
          options={({ route }) => ({ title: route.params.people.name.first })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default routes;