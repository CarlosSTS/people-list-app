import React, { useEffect } from 'react';
import { View, BackHandler, Alert } from 'react-native';

const SignOut = () => {
  useEffect(() => { 
    const backAction = () => {
      Alert.alert("Aviso", " Você quer sair do App ? 😔", [
        {
          text: "Não",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Sim", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);


  return <View />;
}

export default SignOut;