import { View, Text,Image,StyleSheet,ScrollView} from 'react-native'
import React,{useState} from 'react'
import CustomInput from '../customInput/CustomInput'
import CustomButton from '../CustomButton/CustomButton';
import SignUp from './SignUp';

const onSignInPressed=()=>{
    console.warn('Sign in');
}

const onForgotPasswordPressed=()=>{
    console.warn('Forgot password');
}

const onSignInFacebook=()=>{
    console.warn('Sign in with facebook');
}

const onSignInGoogle=()=>{
    console.warn('Sign in with Google');
}

const onSignUpPress=()=>{
    console.warn('onSignUpPress');
}

const Login= ()=> {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');  
    return (
        <ScrollView>
    <View style={styles.root}>
      <Image source={require('./../Assets/Image/login.png')}/>
      <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Learning App</Text>
     
      <CustomInput 
      placeholder="Username"
      value={username}
      setValue={setUsername}
      />

      <CustomInput 
      placeholder="password"
      value={password}
      setValue={setPassword}
      secureTextEntry={true}/>
      
      </View>
    <CustomButton text="Sign In" onPress={onSignInPressed}/>
    <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>
    
    <CustomButton text="Sign In With Facebook" onPress={onSignInFacebook} bgColor="#E7EAF4" fgColor="#4765A9"/>
    <CustomButton text="Sign In With Google" onPress={onSignInGoogle} bgColor="#e3e3e3" fgColor="#DD4DD4"/>
    <CustomButton text="Don't have an account? Create one" onPress={onSignUpPress} type="TERTIARY"/>
    </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({

    root:{
        alignItems:'center',
        padding:20,
        backgroundColor:'skyblue'
    },
    container:{
        backgroundColor:'white',
        borderTopRightRadius:20,
        borderTopLeftRadius:30,
        backgroundColor:'skyblue'
    },
  welcomeText:{
    fontSize:35,
    textAlign:'center',
    fontWeight:'bold',
    paddingTop:5,
    backgroundColor:'skyblue',
    color:'white'
  }
})

export default Login;
 