import { View, Text,Image,StyleSheet,ScrollView} from 'react-native'
import React,{useState} from 'react'
import CustomInput from '../customInput/CustomInput'
import CustomButton from '../CustomButton/CustomButton';

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


const onRegisterPressed=()=>{
    console.warn('OnRegisterPressed');
}

const onTermsOfUserpolicy=()=>{
    console.warn('Terms and conditions');
}
const SignUp= ()=> {
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');  
    const [passwordRepeat,setPasswordRepeat]=useState('');
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
        <Text style={styles.title}>Create an Account</Text>
      <View style={styles.container}>
     
      <CustomInput 
      placeholder="Username"
      value={username}
      setValue={setUsername}
      />

      <CustomInput 
      placeholder="email"
      value={email}
      setValue={setEmail}
      />

      <CustomInput 
      placeholder="password"
      value={password}
      setValue={setPassword}
      secureTextEntry={true}/>
      
      <CustomInput 
      placeholder="Repeatpassword"
      value={passwordRepeat}
      setValue={setPasswordRepeat}
      secureTextEntry={true}/> 

      </View>
      <CustomButton text="Register" onPress={onRegisterPressed}/>
   <Text style={styles.text}>
    By registering you confirm thta u accept our <Text style={styles.link} onPress={onTermsOfUserpolicy}>terms and conditions </Text>of privacy policy
   </Text>
    <CustomButton text="Sign In With Facebook" onPress={onSignInFacebook} bgColor="#E7EAF4" fgColor="#4765A9"/>
    <CustomButton text="Sign In With Google" onPress={onSignInGoogle} bgColor="#e3e3e3" fgColor="#DD4DD4"/>
    <CustomButton text="Have a account SignIn" onPress={onSignUpPress} type="TERTIARY"/>
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
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'#051C60',
    margin:10,
  },
  text:{
    color:'gray',
    marginVertical:10,
  },
  link:{
    color:'orange',
  }
})

export default SignUp;
 