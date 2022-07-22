import React, { useEffect } from "react";
import {Button, NativeModules } from "react-native";

const { CalendarModule, ToastModule } = NativeModules;

const NewModuleButton = () => {

  useEffect(()=>{
    ToastModule.showToast('Toast Example,....',ToastModule.SHORT)
  },[])

  const onPress = () => {
    CalendarModule.createCalendarEvent('testName', 'testLocation');
  };

  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};

export default NewModuleButton
