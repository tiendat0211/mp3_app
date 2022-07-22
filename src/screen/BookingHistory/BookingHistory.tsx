import * as React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { TabView, SceneMap } from 'react-native-tab-view';
import OnGoingTab from "./OnGoingTab";
import CanceledTab from "./CanceledTab";
import { useState } from "react";
import UpComingTab from "./UpComingTab";
import EndedTab from "./EndedTab";

import { TabBar } from "react-native-tab-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavRef } from "../../../App";
import { StackActions } from "@react-navigation/native";
import canceledTab from "./CanceledTab";

const renderScene = SceneMap({
  first: OnGoingTab,
  second: UpComingTab,
  third: EndedTab,
  four: CanceledTab,
  fifth: CanceledTab,
});

const BookingHistory: React.FC = () => {

  const clear = async () => {
    try {
      await AsyncStorage.clear()
      NavRef?.current?.dispatch(StackActions.replace('SignInScreen'))
    } catch(error) {
      console.error(error);
    }
  }

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { id:0 , key: 'first', title: 'Ongoing' },
    { id:1 , key: 'second', title: 'Upcoming' },
    { id:2 , key: 'third', title: 'Ended' },
    { id:3 , key: 'four', title: 'Canceled' },
    { id:4 , key: 'fifth', title: 'Canceled' },
  ]);

  return <>
    <View style={{
      flexDirection:"row",
      padding:18,
      alignItems:"center",
      backgroundColor:"white"}}>

      <Text style={{fontSize: 18, color:'#3B353E', flexGrow:1}}>Booking History</Text>
      <TouchableOpacity>
        <Image
          source={require('../../assets/img/ic_find.png')}
          style={{height:36,width:36}}
        />
      </TouchableOpacity>
    </View>
    <TabView
      renderTabBar={props =>
            <TabBar
              {...props}
              indicatorStyle={{ borderColor: 'rgba(228, 76, 199, 1)', borderRadius:2, borderWidth:1, width:24}}
              style={{ backgroundColor: 'white'}}
              scrollEnabled={true}
              contentContainerStyle={{borderWidth:1}}
              renderLabel={({ route }) => (
                <Text
                  style={ route.id === index ? {color: "#3B353E", fontSize:14}: { color: "#A59FA8", fontSize:14}}
                >
                  {route.title}
                </Text>
              )}

            />
      }
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}

    />
    {/*<TouchableOpacity*/}
    {/*  style={{alignItems:'center', padding:10, backgroundColor:'red'}}*/}
    {/*  onPress={async ()=>{*/}
    {/*    await clear()*/}
    {/*  }}*/}
    {/*>*/}
    {/*  <Text>Log out</Text>*/}
    {/*</TouchableOpacity>*/}
  </>
}

export default BookingHistory

