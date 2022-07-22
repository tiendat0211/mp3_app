import React, { useRef } from "react";

import { Image, StyleSheet, View, TouchableOpacity, Text, ScrollView, Animated, Dimensions } from "react-native";
import { AnimatedRegion } from "react-native-maps";
import { AnimatedMapView } from "react-native-maps/lib/MapView";


const TestAnimation: React.FC = () => {

  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0,140 ],
    outputRange: [200, 60],
    extrapolate: 'clamp',
  })

  const imageTranslate = scrollY.interpolate({
    inputRange: [0, 140],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  })

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, 140 / 2, 140],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });

  const titleScale = scrollY.interpolate({
    inputRange: [0, 140 / 2, 140],
    outputRange: [1, 1, 0.8],
    extrapolate: 'clamp',
  });
  const titleTranslate = scrollY.interpolate({
    inputRange: [0, 140 / 2, 140],
    outputRange: [0, 0, -8],
    extrapolate: 'clamp',
  });

  return(
    <>
      <ScrollView
        style={{flex:1, marginTop:100}}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
        overScrollMode={"never"}
      >

        {[...Array(10)].map((arr: number,index:number) => {
          return (
            <View
              key={index}
              style={{backgroundColor:'grey', padding:15, margin:20, alignItems:'center'}}>
              <Text>{index}</Text>
            </View>

          )
        })
        }
      </ScrollView>
      <Animated.View
        style={[styles.header,{height:headerHeight}]}
      >
        <Animated.Image
          style={[
            styles.backgroundImage,
            {
              opacity: imageOpacity,
              transform: [{translateY: imageTranslate}]
            }
          ]}
          source={require('../assets/img/img_user.png')}
        />
        <Animated.View
          style={[
            styles.bar,
            {
              transform: [
                { scale: titleScale },
                { translateY: titleTranslate },
              ],
            },
          ]}
        >
          <Text style={styles.title}>Title</Text>
        </Animated.View>

      </Animated.View>

    </>

  );

}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
  },
  bar: {
    marginTop: 28,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    marginTop: 200,
  },
  backgroundImage: {
    resizeMode: 'cover',
    position:'absolute',
    left:0,
    right:0,
    height:200,
    width:Dimensions.get("screen").width
  },
})

export default TestAnimation
