import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, Dimensions} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import StarRating from "../components/StarRating";

const HomeScreen: React.FC = () => {
  const [isYes,setIsYes] = useState(false);
  const [isNo,setIsNo] = useState(false);
  const [star,setStar] = useState(0)

  return <>
    <View style={styles.container}>
      <View style={styles.review_costumer}>
        <Image
          source={require("../assets/img/ic_arrowleft.png")}
          style={{ height: 24, width: 24, padding: 17 }}
        />
        <Text
          style={{ fontSize: 18, color: "#3B353E", marginLeft: 17 }}
        >
          Review customer
        </Text>
      </View>

      <View style={styles.user}>
        <Image source={{ uri: "https://thuthuatnhanh.com/wp-content/uploads/2021/02/Avatar-ngau-dep-390x390.jpg" }}
               style={{ width: 80, height: 80, marginBottom: 12 }}
        />
        <Text
          style={{ fontSize: 16, color: "#1B151E" }}
        >
          Hiroshi Watanabe
        </Text>
      </View>

      <Text style={{ fontSize: 16, color: "#3B353E", paddingLeft: 16, marginTop: 24 }}
      >
        How was your experience? {star}
      </Text>

      <StarRating setStar={setStar} star={star}/>

      <Text
        style={{paddingTop:31.75, paddingLeft:16, fontSize:16, color: "#3B353E"}}>
        Wanna see him next time ?
      </Text>

      <View style={styles.buttons}>

        <TouchableOpacity
          style={isNo === true ? styles.button1 : styles.button2}
          onPress={()=>{
            setIsYes(false)
            setIsNo(true)}
          }>
          <Text
            style={isNo === true ? styles.innerText1 : styles.innerText2}> No </Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={isYes === true ? styles.button1 : styles.button2}
          onPress={()=>{
            setIsYes(true)
            setIsNo(false)}
          }>
          <Text style={isYes === true ? styles.innerText1 : styles.innerText2}> Yes </Text>
        </TouchableOpacity>
      </View>

    </View>
    <LinearGradient
      colors={ ["#DC21B8", "#4AC1FD"] }
      style={styles.finish}
      start={{ x: 1, y: 0 }}
      end={{ x: -1, y: 0 }}>
      <Text style={{fontSize:16, color:"#FFFCFC"}}> Finish </Text>
    </LinearGradient>

  </>;


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    flexGrow:1
  },
  review_costumer:{
    flexDirection:"row",
    alignItems:"center",
    margin:28,
  },
  user:{
    flexDirection:"column",
    alignItems:"center",
  },
  buttons:{
    flexDirection:"row",
    marginTop:16,
    marginLeft:7.5
  },
  button1:{
    width :  (Dimensions.get('screen').width - 45)/2,
    alignItems:"center",
    paddingTop:10,
    paddingBottom:10,
    marginLeft:7.5,
    marginRight:7.5,
    borderRadius:84,
    borderWidth: 1,
    borderColor:"#E44CC7",
  },
  button2:{
    width :  (Dimensions.get('screen').width - 45)/2,
    alignItems:"center",
    paddingTop:10,
    paddingBottom:10,
    marginLeft:7.5,
    marginRight:7.5,
    borderRadius:84,
    borderWidth: 1,
    borderColor:"#A59FA8",
    borderStyle: 'dashed',
  },
  innerText1:{
    fontSize:16,
    color:"#E44CC7"
  },
  innerText2:{
    fontSize:16,
    color:"#A59FA8"
  },
  finish:{
    alignItems:"center",
    width :  (Dimensions.get('screen').width - 30),
    marginBottom:46,
    marginLeft:15,
    backgroundColor:"red",
    padding:10,
  }
});


export default HomeScreen


