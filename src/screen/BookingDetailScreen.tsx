import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CastItem from "../components/CastItems";
import { NavRef } from "../../App";

export interface Cast {
  id: number,
  img: any,
  name:string,
  point:string
}

const DATA: Cast[] = [
  {
    id: 1,
    img: require('../assets/img/img_user.png'),
    name: 'Cast name',
    point: '15,000 points / 30mins'
  },
  {
    id: 2,
    img: require('../assets/img/img_user.png'),
    name: 'Cast name',
    point: '15,000 points / 30mins'
  },
  {
    id: 3,
    img: require('../assets/img/img_user.png'),
    name: 'Cast name',
    point: '15,000 points / 30mins'
  },
  {
    id: 4,
    img: require('../assets/img/img_user.png'),
    name: 'Cast name',
    point: '15,000 points / 30mins'
  },
  {
    id: 5,
    img: require('../assets/img/img_user.png'),
    name: 'Cast name',
    point: '15,000 points / 30mins'
  }
]

const BookingDetailScreen: React.FC = () => {

  return (
    <View style={{flex:1}}>
      <View style={{
        flexDirection:"row",
        padding:18,
        marginBottom:20,
        alignItems:"center",
        backgroundColor:"white"}}>
        <TouchableOpacity
          onPress={()=>{
            NavRef?.current?.goBack()
          }}
        >
          <Image
            source={require('../assets/img/ic_arrowleft.png')}
            style={{height:36,width:36}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 18, color:'#3B353E', flexGrow:1, paddingLeft:16}}>Booking History</Text>

      </View>

      <ScrollView>
      <View style={{padding:16}}>
        <Text style={{fontSize:16,color:"#3B353E"}}>
          Booking Code: BK2205201
        </Text>
        <Text style={{fontSize:12,color:'#A59FA8',paddingTop:4}}
        >dd/mm/yyyy - hh:mm</Text>
      </View>

      <View style={{flexDirection:'row',paddingTop:4, paddingBottom:4, marginLeft:16, marginRight:8}}>
        <Text style={styles.titleText}>Start time:</Text>
        <Text style={styles.infoText}>dd/mm/yyyy - hh:mm</Text>
      </View>

      <View style={{flexDirection:'row',paddingTop:4, paddingBottom:4, marginLeft:16, marginRight:8}}>
        <Text style={styles.titleText}>End time:</Text>
        <Text style={styles.infoText}>dd/mm/yyyy - hh:mm</Text>
      </View>

      <View style={{flexDirection:'row',paddingTop:4, paddingBottom:4, marginLeft:16, marginRight:8}}>
        <Text style={styles.titleText}>Booking:</Text>
        <Text style={styles.infoText}>4 hours</Text>
      </View>

      <View style={{flexDirection:'row',paddingTop:4, paddingBottom:4, marginLeft:16, marginRight:8}}>
        <Text style={styles.titleText}>Extend time:</Text>
        <Text style={styles.infoText}>2 hours</Text>
      </View>

      <View style={{flexDirection:'row',paddingTop:4, paddingBottom:4, marginLeft:16, marginRight:8}}>
        <Text style={styles.titleText}>Service:</Text>
        <Text style={styles.infoText}>Private dine</Text>
      </View>

      <View style={{flexDirection:'row',paddingTop:4, paddingBottom:4, marginLeft:16, marginRight:8}}>
        <Text style={styles.titleText}>Location:</Text>
          <Text style={styles.infoText}>55 Nichols Lane</Text>
      </View>

      <View style={{flexDirection:'row',paddingRight:8}}>
        <Text style={styles.titleText}> </Text>
        <Text style={styles.infoText}>Anaheim, CA 92801</Text>
      </View>

      <View style={{ marginLeft:16,marginBottom:16, marginTop:48}}>
        <Text style={{fontSize:16,color:'#3B353E', paddingBottom:2}}>Payment</Text>
        <Text style={{fontSize:12,color:'#A59FA8'}}>Porta quisque orci ullamcorper</Text>
      </View>

      <View style={{flexDirection:'row',paddingTop:4, paddingBottom:4, marginLeft:16, marginRight:8}}>
        <Text style={styles.titleText}>Extend amount:</Text>
        <Text style={styles.infoText}>800 points</Text>
      </View>

      <View style={{flexDirection:'row',paddingTop:4, paddingBottom:4, marginLeft:16, marginRight:8}}>
        <Text style={styles.titleText}>Amount:</Text>
        <Text style={styles.infoText}>41.000 points</Text>
      </View>

      <View style={{borderWidth:1, borderColor:'rgba(222, 212, 220, 1)', borderStyle:'dashed', margin:16}}></View>

      <View style={{flexDirection:'row',paddingTop:4, paddingBottom:4, marginLeft:16, marginRight:8}}>
        <Text style={styles.titleText}>Total</Text>
        <Text style={{fontSize:14, color:'#E44CC7'}}>41.800 points</Text>
      </View>


      <View style={{ marginLeft:16,marginBottom:16, marginTop:48}}>
        <Text style={{fontSize:16,color:'#3B353E', paddingBottom:2}}>List of cast</Text>
        <Text style={{fontSize:12,color:'#A59FA8'}}>Porttitor aliquam in nunc</Text>
      </View>

      {
          DATA.map((item)=>{
            return <CastItem key={item.id} item = {item}/>
          })
      }
      </ScrollView>
    </View>
  );

}

const styles = StyleSheet.create({
  titleText:{
    flexGrow:1,
    fontSize:14,
    color:'#A59FA8'
  },
  infoText:{
    fontSize:14,
    color:'#3B353E'
  }
})

export default BookingDetailScreen
