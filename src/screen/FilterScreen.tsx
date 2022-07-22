import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from "react-native";


const FilterScreen: React.FC = () => {

  const [islocal,setIslocal] = useState(false)
  const [isDown,setIsDown] = useState(false)
  const [isUp,setIsUp] = useState(false)
  const [isHN,setIsHN] = useState(false)
  const [isHCM,setIsHCM] = useState(false)

  const [checkedGrade,setCheckedGrade] = useState(
    new Array(3).fill(false)
  )

  const handleGrade = (position:any) => {
    const updatedCheckedState = checkedGrade.map((item, index) =>
      index === position ? !item : item,
    );

    setCheckedGrade(updatedCheckedState);
  }

  return <>

   <View style={styles.container}>
     <View style={styles.filter}>
       <View style={styles.innerFilter}>
         <Image
           source={require('../assets/img/ic_arrowleft.png')}
           style={styles.icon}
         />
         <Text style={styles.filterText}>Filter</Text>
       </View>
       <Text style={styles.clearText}>Clear</Text>
     </View>


     <Text style={styles.optionsText}> Sort by </Text>

     <View style={styles.sortItems}>
         <TouchableOpacity
           style={ islocal === true ?  styles.sortItem2 : styles.sortItem1}
           onPress={()=>{
             setIslocal(true)
             setIsDown(false)
             setIsUp(false)
           }}
         >
           <Image
             source={require('../assets/img/ic_MapPinLine.png')}
             style={styles.icon}
           />
           <Text
             style={islocal === true ? styles.sortItem_Text2 : styles.sortItem_Text1}
           >Around you</Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={isDown === true ?  styles.sortItem2 : styles.sortItem1}
           onPress={()=>{
             setIslocal(false)
             setIsDown(true)
             setIsUp(false)
           }}
         >
           <Image
             source={require('../assets/img/ic_TrendDown.png')}
             style={styles.icon}
           />
           <Text
             style={isDown === true ? styles.sortItem_Text2 : styles.sortItem_Text1}
           >Points: highest to lowest</Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={isUp === true ?  styles.sortItem2 : styles.sortItem1}
           onPress={()=>{
             setIslocal(false)
             setIsDown(false)
             setIsUp(true)
           }}>
           <Image
             source={require('../assets/img/ic_TrendUp.png')}
             style={styles.icon}
           />
           <Text
             style={isUp === true ? styles.sortItem_Text2 : styles.sortItem_Text1}
           >Points: lowest to highest</Text>
         </TouchableOpacity>
       </View>

     <Text style={styles.optionsText}> Location </Text>
     <View  style={styles.option}>
       <TouchableOpacity
         onPress={()=>{
         setIsHN(true)
         setIsHCM(false)}
         }
       >
         <Text
           style={isHN === true ? styles.option_innerText2:styles.option_innerText1}
         >Ha Noi</Text>
       </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>{
          setIsHN(false)
          setIsHCM(true)}
        }>
        <Text
          style={isHCM === true ? styles.option_innerText2:styles.option_innerText1}
        >Ho Chi Minh city</Text>
      </TouchableOpacity>

     </View>


     <View style={styles.select}>
       <View>
         <Text style={styles.optionsText}> Cast grade </Text>
         <View  style={styles.option}>
           <TouchableOpacity
             onPress={()=>handleGrade(0)}
           >
             <Text
               style={checkedGrade[0] === true ? styles.option_innerText2 : styles.option_innerText1}
             >Diamond</Text>
           </TouchableOpacity>
           <TouchableOpacity
             onPress={()=>handleGrade(1)}
           >
             <Text
               style={checkedGrade[1] === true ? styles.option_innerText2 : styles.option_innerText1}
             >Platinum</Text>
           </TouchableOpacity>
           <TouchableOpacity
             onPress={()=>handleGrade(2)}
           >
              <Text
                style={checkedGrade[2] === true ? styles.option_innerText2 : styles.option_innerText1}
              >Gold</Text>
           </TouchableOpacity>

         </View>
       </View>
       <TouchableOpacity
         onPress={() => {
           setCheckedGrade([true,true,true])
         }}
       >
         <Text style={styles.selectText}> Select all </Text>
       </TouchableOpacity>

     </View>

    <Text style={styles.optionsText}> Age </Text>
     <ScrollView>

     </ScrollView>

   </View>
  </>
}

const styles = StyleSheet.create({
  container:{

  },
  filter:{
    flexDirection:"row",
    padding:17,
    alignItems:"center",
    borderBottomColor:"#DED4DC",
    borderBottomWidth:1
  },
  innerFilter:{
    flexGrow:1,
    flexDirection:"row",
    alignItems:"center"
  },
  icon:{
    height:24,
    width:24,
    marginRight:16
  },
  filterText:{
    fontSize:18,
    color:"#3B353E"
  },
  clearText:{
    fontSize:16,
    color:"#A59FA8"
  },

  optionsText:{
    fontSize:16,
    color:"#1B151E",
    padding:16,
    marginTop:8,
  },
  sortItems:{
    flexDirection:"row",
    marginLeft:8,

  },
  sortItem1:{
    width: (Dimensions.get("screen").width-64)/3,
    padding:16,
    borderWidth:1,
    borderColor:"#F4EBF3",
    borderRadius:18,
    marginRight:8,
    marginLeft:8
  },

  sortItem2:{
    width: (Dimensions.get("screen").width-64)/3,
    padding:16,
    borderWidth:1,
    borderColor:"#E44CC7",
    borderRadius:18,
    marginRight:8,
    marginLeft:8
  },

  sortItem_Text1:{
    fontSize:10,
    color:"#A59FA8",
    marginTop:11
  },
  sortItem_Text2:{
    fontSize:10,
    color:"#4F4752",
    marginTop:11
  },
  option:{
    flexDirection:"row",
    paddingLeft:12
  },
  option_innerText1:{
    fontSize:16,
    borderColor:"#F4EBF3",
    borderWidth:1,
    borderRadius:100,
    paddingLeft:16,
    paddingRight:16,
    paddingTop:4,
    paddingBottom:4,
    marginLeft:4,
    marginRight:4
  },

  option_innerText2:{
    fontSize:16,
    borderColor:"#E44CC7",
    borderWidth:1,
    borderRadius:100,
    paddingLeft:16,
    paddingRight:16,
    paddingTop:4,
    paddingBottom:4,
    marginLeft:4,
    marginRight:4
  },

  select:{
    flexDirection:"row",
    alignItems:"center",
  },
  selectText:{
    color:"#E44CC7",
    fontSize:14
  }
})

export default FilterScreen
