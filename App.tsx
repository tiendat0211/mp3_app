import React, { useEffect, useState } from "react";
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native";
import StartScreen from "./src/screen/StartScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screen/LogInScreen";
import SignInScreen from "./src/screen/SignInScreen";
import SignUpScreen from "./src/screen/SignUpScreen";
import BookingHistory from "./src/screen/BookingHistory/BookingHistory";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BookingDetailScreen from "./src/screen/BookingDetailScreen";
import NewModuleButton from "./src/screen/NewMoudleButton";
import TestAnimation from "./src/screen/TestAnimation";
//import ScheduleScreen from "./src/screen/ScheduleScreen";

type  RootStackParamList = {
  StartScreen: undefined;
  LoginScreen: undefined;
  SignInScreen: undefined
  SignUpScreen: undefined;
  BookingHistory: undefined;
  BookingDetailScreen: undefined;
}

export const NavRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

export const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {

  const [isLogin, setLogin] = useState(false)

  const checkLogin = async () => {
    try {
      const item = await AsyncStorage.getItem("@user");
      console.log({item});
      setLogin(item !== null)
    } catch (e) {
      // read error
    }
  };

  useEffect(() => {
    checkLogin()
  }, [])

  //console.log('login:',isLogin);
  AsyncStorage.getItem('@user', (error, result) => {
    console.log({result});
  }).then((res) => {
    //console.log({res});
  })
  return (

    <NavigationContainer
      ref={NavRef}
    >
      <RootStack.Navigator
        initialRouteName={isLogin ? "BookingHistory" : "StartScreen"}
        screenOptions={{
          headerShown: false,
        }}>

        {
          isLogin === false ?
            <>
              <RootStack.Screen
                name={"StartScreen"}
                component={StartScreen} />

              <RootStack.Screen
                name={"LoginScreen"}
                component={LoginScreen} />

              <RootStack.Screen
                name={"SignInScreen"}
                component={SignInScreen}
              />
              <RootStack.Screen
                name={"SignUpScreen"}
                component={SignUpScreen} />
              <RootStack.Screen
                name={"BookingHistory"}
                component={BookingHistory} />
              <RootStack.Screen
                name={"BookingDetailScreen"}
                component={BookingDetailScreen} />
            </>
            :
            <>
              <RootStack.Screen
                name={"BookingHistory"}
                component={BookingHistory} />
              <RootStack.Screen
                name={"SignInScreen"}
                component={SignInScreen} />
              <RootStack.Screen
                name={"BookingDetailScreen"}
                component={BookingDetailScreen} />
            </>

        }

      </RootStack.Navigator>

    </NavigationContainer>

    // <ScheduleScreen/>
    //<NewModuleButton/>
    //<TestAnimation/>
  );
};

export default App;

