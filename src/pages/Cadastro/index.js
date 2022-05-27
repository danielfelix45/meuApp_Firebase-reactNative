import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import firebase from '../../services/firebaseConnection';


export default function Cadastro() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function cadastrar() {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
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
      <Text style={styles.textCadastro}>CADASTRO</Text>

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

      <TouchableOpacity style={styles.cadastroBtn} onPress={cadastrar}>
        <Text style={styles.cadastroText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.areaConta}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.textConta}>Já tenho uma conta</Text>
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
  textCadastro: {
    fontSize: 45,
    fontWeight: 'bold',
    color: "#fb5b5a",
    marginBottom: 40
  },
  input: {
    width: "80%",
    backgroundColor: "#ccc",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 10
  },
  cadastroBtn: {
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
  cadastroText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  areaConta: {
    alignItems: 'center',
    marginTop: 15
  },
  textConta: {
    color: '#121212',
    fontSize: 15
  }
});