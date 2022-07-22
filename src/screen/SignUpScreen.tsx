import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  TextInput,
  Pressable,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { NavRef } from "../../App";
import DatePicker from 'react-native-date-picker'

const SignUpScreen: React.FC = () => {

  const [secure,setSecure] = useState(true)
  const [retypeSecure,setRetypeSecure] = useState(true)
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [isDate, setIsDate] = useState(false)

  return <>
    <View style={styles.header}>
      <View style={{flexGrow:1}}>
        <TouchableOpacity onPress={() => {NavRef?.current?.goBack()}}>
       <Image
          source={require('../assets/img/ic_arrowleft.png')}
          style={{height:40, width:40, marginTop:28}}
        />
        </TouchableOpacity>

        <Text style={{fontSize:36,color:'rgba(59, 53, 62, 1)', marginTop:24, marginBottom:16}}>Sign up</Text>
        <Text
          style={{fontSize:16,color:'rgba(165, 159, 168, 1)',paddingBottom:26}}
        >Sign up to become member</Text>

        <View style={{flexDirection:'row'}}>
          <View style={[styles.forms2,{marginRight:15}]}>
            <Image
              source={require('../assets/img/ic_user.png')}
              style={{height:24,width:24, marginLeft:20, marginRight:16}}
            />
            <TextInput
              placeholder={'First name'}
              style={{flexGrow:1,fontSize:16}}
            >
            </TextInput>
          </View>

          <View style={styles.forms2}>
            <Image
              source={require('../assets/img/ic_userList.png')}
              style={{height:24,width:24, marginLeft:20, marginRight:16}}
            />
            <TextInput
              placeholder={'Last name'}
              style={{flexGrow:1,fontSize:16}}
            >
            </TextInput>
          </View>
        </View>

        <View style={styles.forms}>
          <Image
            source={require('../assets/img/ic_phone.png')}
            style={{height:24,width:24, marginLeft:20, marginRight:16}}
          />
          <TextInput
            placeholder={'Phone number'}
            style={{flexGrow:1,fontSize:16}}
          />
        </View>

        <View style={styles.forms}>
          <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}
            onPress={()=>setOpen(true)}
          >
            <Image
              source={require('../assets/img/ic_calendarBlank.png')}
              style={{height:24,width:24, marginLeft:20, marginRight:16}}
            />
           <DatePicker
             modal
             mode="date"
             open={open}
             date={date}
             onConfirm={(date) => {
               setOpen(false)
               setDate(date)
               setIsDate(true)
             }}
             onCancel={() => {
               setOpen(false)
             }}
           />
            {isDate === true ?
              <Text style={{fontSize:16,flexGrow:1, paddingTop:14, paddingBottom:14}}>
                {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}
              </Text>
              :
              <Text style={{fontSize:16,flexGrow:1, paddingTop:14, paddingBottom:14, color:'#B4B1B6'}}>
                Date of birth
              </Text>
            }
          </TouchableOpacity>

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

        <View style={styles.forms}>
          <Image
            source={require('../assets/img/ic_lock.png')}
            style={{height:24,width:24, marginLeft:20, marginRight:16}}
          />
          <TextInput
            placeholder={'Retype password'}
            style={{flexGrow:1, fontSize:16}}
            secureTextEntry={retypeSecure}
          />
          <TouchableOpacity
            onPress={()=>{
              if (retypeSecure === true) {
                setRetypeSecure(false)
              }else {
                setRetypeSecure(true)
              }
            }}
          >
            <Image
              source={require('../assets/img/ic_eyeSlash.png')}
              style={{height:24,width:24, marginLeft:20, marginRight:16}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableOpacity>
          <LinearGradient colors={['#DC21B8', '#4AC1FD']}
                          style={{alignItems:"center", marginTop:28, borderRadius:100}}
          >
            <Text style={{fontSize:18, color:'#FFFCFC', paddingTop:16, paddingBottom:16}}> Sign Up </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

    </View>
    <View style={styles.footer}>
      <Text style={{color:'#A59FA8', paddingRight:8}}>Already have account ?</Text>
      <TouchableOpacity
        onPress={()=>{
          NavRef?.current?.navigate("SignInScreen")
        }}
      >
        <Text style={{color:'#E44CC7'}}>Sign in</Text>
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
      paddingLeft:100,
      marginBottom:29,
      paddingTop:24
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
    forms2:{
      flexDirection:'row',
      alignItems:'center',
      borderWidth:1,
      borderColor:'rgba(244, 235, 243, 1)',
      borderRadius:100,
      width:(Dimensions.get("screen").width-45)/2,
      marginTop:10,
      marginBottom:10,
    }
})


export default SignUpScreen
