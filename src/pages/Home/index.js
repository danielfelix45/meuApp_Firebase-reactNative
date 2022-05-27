import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
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

      <TouchableOpacity style={styles.logoutBtn} onPress={deslogar}>
        <Text style={styles.logoutText}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fb5b5a'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff'
  },
  logoutBtn: {
    width: "80%",
    backgroundColor: "#ddd",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  logoutText: {
    color: '#fb5b5a',
    fontSize: 20,
    fontWeight: 'bold'
  }
});