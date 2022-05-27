import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  LogBox
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
      <Text style={styles.textEntrar}>ENTRAR</Text>

      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(texto) => setEmail(texto)}
        value={email}
      />

      <Text style={styles.text}>Senha</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(texto) => setPassword(texto)}
        value={password}
        secureTextEntry={true}
      />

      <Button title='Acessar' onPress={login} />

      <TouchableOpacity
        style={styles.areaConta}
        onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.textConta}>Criar uma conta</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  textEntrar: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 20
  },
  text: {
    fontSize: 18
  },
  input: {
    height: 40,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#121212',
    fontSize: 17
  },
  areaConta: {
    alignItems: 'center',
    marginTop: 15
  },
  textConta: {
    fontSize: 15
  }
});