import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, Dimensions, FlatList } from "react-native";
import PagerView from 'react-native-pager-view';
import { NavRef } from "../../App";

const StartScreen: React.FC = () => {

  return <>
    <View style={styles.container}>
        <View style={styles.skip}>
          <Text style={{flexGrow:1}}></Text>
          <TouchableOpacity
            onPress={()=>{
              NavRef?.current?.navigate("LoginScreen")
            }}
          >
            <Text style={{fontSize: 16,color:"#4F4752", padding:29}}>Skip</Text>
          </TouchableOpacity>
        </View>
      <PagerView
        style={styles.pagerView}
        initialPage={0}
      >
        <View key="1">
          <Image source={require('../assets/img/img_girl_chooses.png')}/>
          <View style={styles.title}>
            <View style={styles.slogans}>
              <Text style={styles.slogan}>Quick & easy
                <Text style={styles.sub_slogan}> match up</Text>
              </Text>

            </View>
            <Text style={styles.des}>Scan and match up with your suitable companion easily </Text>
          </View>

          <View style={styles.footer}>
            <Image
              source={require('../assets/img/ic_slider1.png')}
              style={styles.sliders}
            />
          </View>

        </View>
        <View key="2">
          <Image source={require('../assets/img/img_businessman.png')}/>
          <View style={styles.title}>
            <View style={styles.slogans}>
              <Text style={styles.slogan}>High quality to become
                <Text style={styles.sub_slogan}> QP girls</Text>
              </Text>

            </View>

            <Text style={styles.des}>Only 10% of candidates pass the interview to become our Cast</Text>
          </View>

          <View style={styles.footer}>
            <Image
              source={require('../assets/img/ic_slider2.png')}
              style={styles.sliders}
            />
          </View>

        </View>
        <View key="3">
          <Image source={require('../assets/img/img_man_lies.png')}/>
          <View style={styles.title}>
            <View style={styles.slogans}>
              <Text style={styles.slogan}>Everything is safe &
                <Text style={styles.sub_slogan}> private
                  <Text style={styles.slogan}> for you</Text>
                </Text>
              </Text>
            </View>
            <Text style={styles.des}>Your safety and privacy is the highest priority to us </Text>
          </View>

          <View style={styles.footer}>
            <Image
              source={require('../assets/img/ic_slider3.png')}
              style={styles.sliders}
            />
          </View>
        </View>
      </PagerView>

    </View>
  </>
}

const styles = StyleSheet.create({
  container:{
    margin:0,
    backgroundColor:"#FFFCFC"
  },
  skip:{
    flexDirection:"row",
    alignItems:"center",
    flexGrow:1
  },
  pagerView: {
    width: '100%',
    height: '100%',
    marginLeft:17,
    flexGrow:2
  },
  title:{
    marginRight:75,
    marginTop:38,
  },
  slogans:{
    marginRight:75,
    marginBottom:16
  },
  slogan:{
    fontSize:30,
    color:' rgba(27, 21, 30, 1)'
  },
  sub_slogan:{
    fontSize:30,
    color: 'rgba(228, 76, 199, 1)'
  },
  des:{
    fontSize:16,
    color:'#A59FA8',
    marginRight:30,
  },
  footer:{
    paddingTop:88
  },
  sliders:{
    height:4,
    width:51,
  }
})

export default StartScreen
