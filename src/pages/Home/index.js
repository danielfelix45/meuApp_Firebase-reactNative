import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import firebase from '../../services/firebaseConnection';

export default function Home({ route }) {
  const navigation = useNavigation();

  async function deslogar() {
    await firebase.auth().signOut();

    navigation.navigate('Login')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Seja Bem-Vindo!</Text>
      <Text style={styles.text}>{route.params?.user}</Text>

      <Button title='Sair' onPress={deslogar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10
  }
});