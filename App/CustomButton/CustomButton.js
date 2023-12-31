import { View, Text,StyleSheet,Pressable} from 'react-native'
import React from 'react'

const customButton = ({onPress,text,type="PRIMARY",bgColor,fgColor}) => {
  return (
    <Pressable onPress={onPress}
     style={[styles.container,
     styles[`container_${type}`],
     bgColor?{backgroundColor:bgColor}:{}

     ]}>
      <Text style=
      {[
        styles.text,
        styles[`text_${type}`],
        fgColor?{color:fgColor}:{}
      ]}>{text}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  container:{
    width:'100%',
    padding:15,
    marginVertical:5,
    alignItems:'center',
    borderRadius:5,
  },
  container_PRIMARY:{
    backgroundColor:'blue',
  },

  container_TERTIARY:{

  },

  container_SECONDARY:{
    borderColor:'blue',
    borderWidth:2,
  },

  text:{
    fontWeight:'bold',
    color:'white',
  },

  text_TERTIARY:{
    color:'grey',
  },
  text_SECONDARY:{
    color:'blue',
  }
});

export default customButton;