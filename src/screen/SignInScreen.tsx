import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, Dimensions, FlatList, TextInput } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { NavRef } from "../../App";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions } from "@react-navigation/native";

const SignInScreen: React.FC = () => {

  const [secure,setSecure] = useState(true)

  const  [name, setName] = useState('')

  const login = async () => {
    try {
      AsyncStorage.setItem('@user', name, (error) => {

      }).then(() => {

      })
      NavRef?.current?.dispatch(StackActions.replace("BookingHistory"))
    } catch(error) {
      console.error(error);
    }
  }

  return <>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={()=>{
            NavRef?.current?.goBack()
          }}
        >
          <Image
            source={require('../assets/img/ic_arrowleft.png')}
            style={{height:40, width:40, marginTop:68}}
          />
        </TouchableOpacity>
        <Text style={{fontSize:36,color:'rgba(59, 53, 62, 1)', marginTop:24, marginBottom:16}}>Sign in</Text>
        <Text
          style={{fontSize:16,color:'rgba(165, 159, 168, 1)',paddingBottom:42}}
        >
          Login with your phone number</Text>
        <View style={styles.forms}>
          <Image
            source={require('../assets/img/ic_phone.png')}
            style={{height:24,width:24, marginLeft:20, marginRight:16}}
          />
          <TextInput
            value={name}
            placeholder={'Phone number'}
            style={{flexGrow:1,fontSize:16}}
            onChangeText={ text => setName(text)}
          />
        </View>

        <View style={styles.forms}>
          <Image
            source={require('../assets/img/ic_lock.png')}
            style={{height:24,width:24, marginLeft:20, marginRight:16}}
          />
          <TextInput
            placeholder={'Password'}
            style={{flexGrow:1, fontSize:16}}
            secureTextEntry={secure}
          />
          <TouchableOpacity
            onPress={()=>{
              if (secure === true) {
                setSecure(false)
              }else {
                setSecure(true)
              }
            }}
          >
            <Image
              source={require('../assets/img/ic_eyeSlash.png')}
              style={{height:24,width:24, marginLeft:20, marginRight:16}}
            />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row', paddingTop:10}}>
          <Text style={{flexGrow:1}}></Text>
          <Text style={{color:"#4F4752"}}>Forgot password</Text>
        </View>
        <TouchableOpacity
          onPress={async ()=>{
            await login()
          }}
        >
          <LinearGradient colors={['#DC21B8', '#4AC1FD']}
                          style={{alignItems:"center", marginTop:28, borderRadius:100}}
          >
            <Text style={{fontSize:18, color:'#FFFCFC', paddingTop:16, paddingBottom:16}}> Sign In </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={{color:'#A59FA8', paddingRight:8}}>Don’t have any account ?</Text>
        <TouchableOpacity onPress={() => {
          NavRef?.current?.navigate("SignUpScreen")
        }}>
          <Text style={{color:'#E44CC7'}}>Sign up</Text>
        </TouchableOpacity>
      </View>
  </>
}

const styles = StyleSheet.create({
  header:{
    flexGrow:1,
    marginLeft:16,
    marginRight:16
  },
  footer:{
    flexDirection: "row",
    paddingLeft:80,
    marginBottom:29,
  },
  forms:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1,
    borderColor:'rgba(244, 235, 243, 1)',
    borderRadius:100,
    width:Dimensions.get("screen").width-30,
    marginTop:10,
    marginBottom:10
  },

})

export default SignInScreen
