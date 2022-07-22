import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  TextInput,
  ScrollView, useWindowDimensions,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { NavRef } from "../../App";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions } from "@react-navigation/native";
import BookingHistoryItem from "../components/BookingHistoryItem";

export interface Schedule {
  id: number;
  title: string
}

const DATA :Schedule[] = [
  {
    id: 1,
    title: 'Thứ hai'
  },
  {
    id: 2,
    title: 'Thứ ba'
  },
  {
    id: 3,
    title: 'Thứ tư'
  },
  {
    id: 4,
    title: 'Thứ năm'
  },
  {
    id: 5,
    title: 'Thứ sáu'
  },
  {
    id: 6,
    title: 'Thứ bảy'
  },
  {
    id: 7,
    title: 'Chủ nhật'
  },

]

const MonHoc :Schedule[] = [
  {
    id: 1,
    title: 'Toan'
  },
  {
    id: 2,
    title: 'Van'
  },
  {
    id: 3,
    title: 'Anh'
  },
  {
    id: 4,
    title: 'Sinh'
  },
  {
    id: 5,
    title: 'Su'
  },
  {
    id: 6,
    title: 'Dia'
  },
  {
    id: 7,
    title: ' '
  },

]


const ScheduleScreen: React.FC = () => {

  const [text,setText] = useState('')
  const [hidden,setHidden] = useState(true)

  const handleClick = (text:string) => {
      setText(text)
    setHidden(false)
  }


  const {height, width} = useWindowDimensions()

  return(
    <>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize:25}}>Thời Khóa Biểu</Text>
      </View>
      <ScrollView style={{flex: 1}}>

        <View style={styles.row}>
          <View style={styles.col}>
            <View style={{    width:50, height:100, padding:5, backgroundColor:'white'}}>
              <Text> </Text>
            </View>
            <View style={styles.lession}>
              <Text>Tiết 1</Text>
            </View>
            <View style={styles.lession}>
              <Text>Tiết 2</Text>
            </View>
            <View style={styles.lession}>
              <Text>Tiết 3</Text>
            </View>
            <View style={styles.lession}>
              <Text>Tiết 4</Text>
            </View>
            <View style={styles.lession}>
              <Text>Tiết 5</Text>
            </View>
            <View style={styles.lession}>
              <Text>Tiết 6</Text>
            </View>
            <View style={styles.lession}>
              <Text>Tiết 7</Text>
            </View>
            <View style={styles.lession}>
              <Text>Tiết 8</Text>
            </View>
          </View>

          <ScrollView
            horizontal={true}
            style={{marginTop:40}}
          >

            <View style={{flexDirection:'column', alignItems:'center'}}>
              <View style={[{flexDirection:'row'},{backgroundColor:'grey'}]}>
                {
                  DATA.map( (item) => {
                    return <View key={item.id} style={styles.content}>
                      <Text> {item.title} </Text>
                    </View>
                  })
                }
              </View>
              <View style={{flexDirection:'row'}}>
                {
                  MonHoc.map( (item) => {
                    return <TouchableOpacity
                      key={item.id} style={styles.content}
                      onPress={()=>handleClick(item.title)}
                    >
                      <Text> {item.title} </Text>
                    </TouchableOpacity>
                  })
                }
              </View>
              <View style={{flexDirection:'row'}}>
                {
                  MonHoc.map( (item) => {
                    return <TouchableOpacity
                      key={item.id} style={styles.content}
                      onPress={()=>handleClick(item.title)}
                    >
                      <Text> {item.title} </Text>
                    </TouchableOpacity>
                  })
                }
              </View>
              <View style={{flexDirection:'row'}}>
                {
                  MonHoc.map( (item) => {
                    return <TouchableOpacity
                      key={item.id} style={styles.content}
                      onPress={()=>handleClick(item.title)}
                    >
                      <Text> {item.title} </Text>
                    </TouchableOpacity>
                  })
                }
              </View>
              <View style={{flexDirection:'row'}}>
                {
                  MonHoc.map( (item) => {
                    return <TouchableOpacity
                      key={item.id} style={styles.content}
                      onPress={()=>handleClick(item.title)}
                    >
                      <Text> {item.title} </Text>
                    </TouchableOpacity>
                  })
                }
              </View>
              <View style={{flexDirection:'row'}}>
                {
                  MonHoc.map( (item) => {
                    return <TouchableOpacity
                      key={item.id} style={styles.content}
                      onPress={()=>handleClick(item.title)}
                    >
                      <Text> {item.title} </Text>
                    </TouchableOpacity>
                  })
                }
              </View>
              <View style={{flexDirection:'row'}}>
                {
                  MonHoc.map( (item) => {
                    return <TouchableOpacity
                      key={item.id} style={styles.content}
                      onPress={()=>handleClick(item.title)}
                    >
                      <Text> {item.title} </Text>
                    </TouchableOpacity>
                  })
                }
              </View>
              <View style={{flexDirection:'row'}}>
                {
                  MonHoc.map( (item) => {
                    return <TouchableOpacity
                      key={item.id} style={styles.content}
                      onPress={()=>handleClick(item.title)}
                    >
                      <Text> {item.title} </Text>
                    </TouchableOpacity>
                  })
                }
              </View>
              <View style={{flexDirection:'row'}}>
                {
                  MonHoc.map( (item) => {
                    return <TouchableOpacity
                      key={item.id} style={styles.content}
                      onPress={()=>handleClick(item.title)}
                    >
                      <Text> {item.title} </Text>
                    </TouchableOpacity>
                  })
                }
              </View>
            </View>

          </ScrollView>

        </View>

      </ScrollView>

    </View>

      {
        !hidden &&
        <View
          style={{
          backgroundColor:'grey',
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 0,
          top: 0,
          height: height/2,
          width: width/2,
            paddingTop:150,
            alignItems:'center'
        }}
        >
          <Text style={{flexGrow:1}}> Day la mon {text} </Text>
          <TouchableOpacity

            style={{backgroundColor:'red', padding:10}}
            onPress={()=>setHidden(true)}
          >
            <Text>Thoat</Text>
          </TouchableOpacity
            >
        </View>

      }

    </>
  );
}

interface ScheduleItemsProps {
  item:Schedule
}

const ScheduleItems: React.FC<ScheduleItemsProps> = (props) => {
  return (
    <View
      key={props.item.id}
      style={{borderColor:'black',borderWidth:1, padding:10, alignItems:'center' }}
    >
      <Text>
        {props.item.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:20,
    flex:1
  },
  header:{
    alignItems:"center",
    paddingTop:50
  },
  col:{
    marginTop:40,
    backgroundColor:'grey'
  },
  lession:{
    width:50,
    height:100,
    paddingTop:40,
    borderColor:'black',
    borderWidth:1,
    alignItems:"center"
  },
  row:{
    flexDirection:'row',
    alignItems:'center'
  },
  content:{
    borderWidth:1,
    paddingTop:40,
    borderColor:'black',
    width:80,
    height:100,
    alignItems:'center'
  }
})

export default ScheduleScreen
