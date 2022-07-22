import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput } from "react-native";
import { Booking } from "../screen/BookingHistory/CanceledTab";
import { NavRef } from "../../App";


type StatusBookingType =
  | "ongoing"
  | "upcoming"
  | "ended"
  | "canceled";

interface BookingHistoryItemProps {
  item: Booking
  type: StatusBookingType
}

const BookingHistoryItem : React.FC<BookingHistoryItemProps> = (props) => {

  let { item, type } = props;

  return <>
    <TouchableOpacity
      key={item.id}
      // onPress={()=>{
      //   NavRef?.current?.navigate("BookingDetailScreen")
      // }}
    >
      <View style={styles.container} >

        <View style={styles.innerIcon}>
          <Image
            source={require('../assets/img/ic_mapPin.png')}
            style={{ height:14, width:11,}}
          />
        </View>

        <View style={styles.title}>

          <Text style={styles.innerText}>{item.title}</Text>

          {(type === 'ongoing' || type === 'upcoming') && <Text style={{paddingBottom:4}}>
            Start time: dd/mm/yyyy - hh:mm
          </Text>
          }

          {(type === 'ongoing' || type === 'ended') && <Text>
            510 minutes - 15,000 points
          </Text>
          }

          <View style={styles.status}>
            <View style={styles.listImg}>
              <Image
                source={require('../assets/img/img_user.png')}
                style={styles.innerImg}/>
            </View>
            <Text style={{paddingTop:6, fontSize:14}} >dd/mm/yyyy - hh:mm</Text>
          </View>

        </View>

      </View>

    </TouchableOpacity>
  </>
}

const styles = StyleSheet.create({
  container:{
    marginLeft:16,
    marginRight:16,
    flexDirection:"row",
    borderBottomColor:"#A59FA8",
    borderBottomWidth:1,
    borderStyle: 'dashed',
  },
  innerIcon:{
    paddingTop:28,
  },
  title:{
    padding:16,
  },
  status:{
    flexDirection:"row",
    marginTop:15
  },
  innerText:{
    fontSize:14,
    color: "#3B353E",
    paddingRight:15,
    paddingBottom:15
  },
  innerImg:{
    height:32,
    width:32,

  },
  listImg:{
    flexGrow:1,
  },

});

export default BookingHistoryItem
