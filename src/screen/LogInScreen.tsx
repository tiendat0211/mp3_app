import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, Dimensions, FlatList, ImageBackground } from "react-native";
import { NavRef } from "../../App";

const LoginScreen: React.FC = () => {
  return <>
    <View style={styles.header}>
      <Image
        source={require('../assets/img/ic_logo.png')}
        style={{height:74, width:74}}
      />
      <Text
        style={{fontSize:30,color:'#3B353E', paddingTop:35, paddingBottom:12}}
      >Sign In
      </Text>
      <Text
        style={{fontSize:16, color:'#A59FA8', paddingBottom:58}}
      >Sign in to have a whale of time with QP
      </Text>

      <TouchableOpacity style={[styles.buttons,{backgroundColor:'rgba(24, 220, 24, 1)'}]}>
        <View style={styles.button}>
          <Image
            source={require('../assets/img/ic_Logoline.png')}
            style={styles.innerIC}
          />
          <Text style={styles.innerText}>Login with Line</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.buttons,{backgroundColor:'rgba(44, 132, 246, 1)'}]}>
        <View style={styles.button}>
          <Image
            source={require('../assets/img/ic_facebook.png')}
            style={styles.innerIC}
          />
          <Text style={styles.innerText}>Login with Facebook</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.buttons,{backgroundColor:'rgba(27, 21, 30, 1)'}]}>
        <View style={styles.button}>
        <Image
          source={require('../assets/img/ic_apple.png')}
          style={styles.innerIC}
        />
        <Text style={styles.innerText}>Login with Apple</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttons,{borderColor:'rgba(244, 235, 243, 1)', borderWidth:1, borderRadius: 100}]}
        onPress={()=>{
          NavRef?.current?.navigate("SignInScreen")
        }}
      >
        <View
          style={styles.button}
        >
        <Image
          source={require('../assets/img/ic_phone.png')}
          style={styles.innerIC}
        />
        <Text >Login with Phone number</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={styles.footer}>
      <Text style={{fontSize:16,color: '#B4B1B6'}}>App version v.12.3</Text>
    </View>
  </>
}

const styles = StyleSheet.create({
  header: {
    margin:0,
    paddingLeft:6,
    paddingTop:115,
    flexGrow:1
  },
  buttons:{
    alignItems:'center',
    width:Dimensions.get("screen").width-30,
    borderRadius:100,
    marginTop:8,
    marginBottom:8
  },
  innerText:{
    fontSize:16,
    color:'#FFFFFF'
  },
  innerIC:{
    height:36,
    width:36,
    marginRight:12
  },
  footer:{
    alignItems:"center",
    paddingBottom:42
  },
  button:{
    flexDirection:'row',
    alignItems:"center",
    paddingTop:8,
    paddingBottom:8,
  }
})

export default LoginScreen
