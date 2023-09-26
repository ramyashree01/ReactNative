import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Login  from './App/Pages/Login'
import SignUp from './App/Pages/SignUp'
import ConfirmEmailScren from './App/Pages/ConfirmEmailScreen'
import ForgotPasswordScreen from './App/Pages/ForgotPasswordScreen'
import NewPasswordScreen from './App/Pages/NewPasswordScreen'

export default function App() {
  return (
    <View style={styles.root}>
      < NewPasswordScreen/>
    </View>
  )
}

const styles=StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'skyblue',
  },
});