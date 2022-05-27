import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  LogBox,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import firebase from '../../services/firebaseConnection'

LogBox.ignoreAllLogs(true);

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login() {
    await firebase.auth().signInWithEmailAndPassword(email, password)
      .then((value) => {
        navigation.navigate('Home', { user: value.user.email })
      })
      .catch((e) => {
        alert('Ops,algo deu errado!')
        return;
      })

    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>

      <Image
        source={require('../../img/icon2-login.png')}
        style={styles.img}
      />

      <Text style={styles.meuApp}>MeuAPP</Text>

      <TextInput
        style={styles.input}
        placeholder='Email...'
        underlineColorAndroid='transparent'
        onChangeText={(texto) => setEmail(texto)}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder='Password...'
        underlineColorAndroid='transparent'
        onChangeText={(texto) => setPassword(texto)}
        value={password}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.loginBtn} onPress={login}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.areaConta}
        onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.textConta}>Fazer cadastro</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  meuApp: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40
  },
  input: {
    width: "80%",
    fontSize: 17,
    backgroundColor: "#ddd",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,

  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
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
  loginText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  areaConta: {
    alignItems: 'center',
    marginTop: 15
  },
  textConta: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold'
  }
});