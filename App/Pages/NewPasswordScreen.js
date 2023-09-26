import { View, Text,Image,StyleSheet,ScrollView} from 'react-native'
import React,{useState} from 'react'
import CustomInput from '../customInput/CustomInput'
import CustomButton from '../CustomButton/CustomButton';

const OnsubmitPressed=()=>{
  console.warn("submitted");
}

const onSignInPresed=()=>{
  console.warn("OnResendPressed");
}

const NewPasswordScreen= ()=> {
  const [code,setcode]=useState('');
  const [NewPassword,setNewPassword]=useState('');
    return (
     
        <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password</Text>
      <View style={styles.container}>
     
      <CustomInput 
      placeholder="code"
      value={code}
      setValue={setcode}
      />

      <CustomInput 
      placeholder="Enter your New Pssword"
      value={NewPassword}
      setValue={setNewPassword}
      />
      </View>
      <CustomButton text="submit" 
      onPress={OnsubmitPressed}
      />
      
      <CustomButton text="Back to Sign In" 
      onPress={onSignInPresed} type="TERTIARY"/>
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

export default NewPasswordScreen;
 