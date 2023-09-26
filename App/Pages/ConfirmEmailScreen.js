import { View, Text,Image,StyleSheet,ScrollView} from 'react-native'
import React,{useState} from 'react'
import CustomInput from '../customInput/CustomInput'
import CustomButton from '../CustomButton/CustomButton';

const OnConfirmPressed=()=>{
  console.warn("Confirmed");
}

const onResendPresed=()=>{
  console.warn("Resend th code");
}

const ConfirmEmailScreen= ()=> {
    
    const [code,setCode]=useState('');
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
        <Text style={styles.title}>Confirm your Email</Text>
      <View style={styles.container}>
     
      <CustomInput 
      placeholder="Enter your Confirmation Code"
      value={code}
      setValue={setCode}
      />

      </View>
      <CustomButton text="Confirm" 
      onPress={OnConfirmPressed}
      type="SECONDARY"/>
      
      <CustomButton text="Resend code" 
      onPress={onResendPresed} type="TERTIARY"/>
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

export default ConfirmEmailScreen;
 