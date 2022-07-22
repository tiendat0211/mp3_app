import React, { useState } from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";


interface StarRatingProps {
  star: number,
  setStar: (star: number) => void
}

const StarRating: React.FC<StarRatingProps> = (props) => {
  console.log("Star re-render");

  const {setStar, star} = props

  return <>
    <View style={styles.star_rating}>
      {[...Array(5)].map((arr: number,index:number) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={ () => setStar(index+1)}>
          <Image
            source={ star >= index+1 ? require('../assets/img/ic_star2.png') : require('../assets/img/ic_star.png')}
            style={{ height:35, width:35,marginLeft:17}}
          />
           </TouchableOpacity>
        )
      })
      }
    </View>
  </>

}

const styles = StyleSheet.create({
  star_rating:{
    flexDirection:"row",
    paddingTop:18.5,
    paddingLeft: 55
  }
})

export default React.memo(StarRating, (prev, next) => {
  return prev.star === next.star
})
