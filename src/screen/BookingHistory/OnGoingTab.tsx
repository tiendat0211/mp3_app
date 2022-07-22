import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput } from "react-native";
import { Booking } from "./CanceledTab";
import BookingHistoryItem from "../../components/BookingHistoryItem";

const DATA: Booking[] = [
  {
    id: 1,
    title: 'sPhoton technology, Floor 2nd, Creative Building, 70/27 Dai Co Viet street, Hai Ba Tru...'
  },
]

const OnGoingTab : React.FC = () => {
  return <>
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <BookingHistoryItem item={item} type={"ongoing"}/>
      )}
    />
  </>
}

export default OnGoingTab
