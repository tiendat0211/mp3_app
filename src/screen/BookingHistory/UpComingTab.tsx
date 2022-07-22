import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput } from "react-native";
import { Booking } from "./CanceledTab";
import BookingHistoryItem from "../../components/BookingHistoryItem";

const DATA: Booking[] = [
  {
    id: 1,
    title: 'sPhoton technology, Floor 2nd, Creative Building, 70/27 Dai Co Viet street, Hai Ba Tru...'
  },
  {
    id: 2,
    title: 'sPhoton technology, Floor 2nd, Creative Building, 70/27 Dai Co Viet street, Hai Ba Tru...'
  },
  {
    id: 3,
    title: 'sPhoton technology, Floor 2nd, Creative Building, 70/27 Dai Co Viet street, Hai Ba Tru...'
  },
  {
    id: 4,
    title: 'sPhoton technology, Floor 2nd, Creative Building, 70/27 Dai Co Viet street, Hai Ba Tru...'
  },
  {
    id: 5,
    title: 'sPhoton technology, Floor 2nd, Creative Building, 70/27 Dai Co Viet street, Hai Ba Tru...'
  },
  {
    id: 6,
    title: 'sPhoton technology, Floor 2nd, Creative Building, 70/27 Dai Co Viet street, Hai Ba Tru...'
  },
  {
    id: 7,
    title: 'sPhoton technology, Floor 2nd, Creative Building, 70/27 Dai Co Viet street, Hai Ba Tru...'
  },
  {
    id: 8,
    title: 'sPhoton technology, Floor 2nd, Creative Building, 70/27 Dai Co Viet street, Hai Ba Tru...'
  },
  {
    id: 9,
    title: 'sPhoton technology, Floor 2nd, Creative Building, 70/27 Dai Co Viet street, Hai Ba Tru...'
  },
  {
    id: 10,
    title: 'sPhoton technology, Floor 2nd, Creative Building, 70/27 Dai Co Viet street, Hai Ba Tru...'
  },

]

const UpComingTab : React.FC = () => {
  return <>
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <BookingHistoryItem item={item} type={"upcoming"}/>
      )}
    />
  </>
}

export default UpComingTab
