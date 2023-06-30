import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {LoginStyle} from './login.Style';

export default function Login({navigation}) {
  const [username, setUsername] = useState('');

  return (
    <View style={LoginStyle.loginContainer}>
      <View style={LoginStyle.content}>
        <Text style={LoginStyle.signinText}>Sign In</Text>
        <View style={LoginStyle.form}>
          <Text style={LoginStyle.inputlabel}>username</Text>
          <TextInput
            mode="outlined"
            style={LoginStyle.signinInput}
            placeholder="username"
            placeholderTextColor="#777777"
            value={username}
            secureTextEntry={false}
            onChangeText={setUsername}
          />
        </View>
        <View style={LoginStyle.loginBtns}>
          <TouchableOpacity
            style={LoginStyle.signinBtnOpacity}
            onPress={() => navigation.navigate('Dashboard')}>
            <Text style={LoginStyle.btnText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
