import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput } from "react-native";
import { Booking } from "../screen/BookingHistory/CanceledTab";
import { NavRef } from "../../App";
import { Cast } from "../screen/BookingDetailScreen";

interface CastItemProps {
  item: Cast
}

const CastItem : React.FC<CastItemProps> = (props) => {
  const {item} = props
  return (
    <TouchableOpacity
      style={{flexDirection:'row', alignItems:'center', padding:16}}
    >
      <View style={{flexDirection:'row', alignItems:'center', flexGrow:1}}>
        <Image source={item.img} style={{width:48,height:48, marginRight:16}}/>
        <View>
          <Text style={{color:'#3B353E',fontSize:14, padding:4}}>{item.name}</Text>
          <Text style={{fontSize:12,color:'#A59FA8'}}>{item.point}</Text>
        </View>
      </View>
      <Image source={require('../assets/img/ic_chatCircleDots.png')} style={{width:24,height:24}}/>
    </TouchableOpacity>

  );
}

export default CastItem
