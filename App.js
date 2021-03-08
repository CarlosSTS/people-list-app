import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from "./src/routes"
import SignOut from "./src/pages/SignOut"

export default function App() {
  return (
    <>
      <StatusBar barStyle="ligth-content" backgroundColor="#000" />
      <Routes />
      <SignOut />
    </>
  );
}