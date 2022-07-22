import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";


interface Food {
  id: number,
  name: string,
  price: number,
}


interface Order {
  name: string,
  foods: Food[]
  total: number
}

const LIST_FOOD: Food[] = [
  {
    id: 1,
    name: "com thit kho",
    price: 20000,
  },
  {
    id: 2,
    name: "com ga",
    price: 20000,
  },
  {
    id: 3,
    name: "com thit rang",
    price: 20000,
  },
  {
    id: 4,
    name: "com rang",
    price: 20000,
  },
  {
    id: 5,
    name: "com trung",
    price: 20000,
  },
  {
    id: 6,
    name: "com thit kho",
    price: 20000,
  },
  {
    id: 7,
    name: "com ga",
    price: 20000,
  },
  {
    id: 8,
    name: "com thit rang",
    price: 20000,
  },
  {
    id: 9,
    name: "com rang",
    price: 20000,
  },
  {
    id: 10,
    name: "com trung",
    price: 20000,
  },

];
const LIST_ORDER: Order[] = [
  {
    name: "Dat",
    foods: [{
      id: 1,
      name: "com thit kho",
      price: 20000,
    },
      {
        id: 2,
        name: "com ga1",
        price: 20000,
      },
      {
        id: 3,
        name: "com ga2",
        price: 20000,
      },
      {
        id: 4,
        name: "com ga3",
        price: 20000,
      },
    ],
    total: 40000,
  },
];


const OrderScreen: React.FC = () => {

  const [checkedFood, setCheckedFood] = useState(
    new Array(LIST_FOOD.length).fill(false),
  );

  const [checkedOrder, setCheckedOder] = useState(
    new Array(LIST_FOOD.length).fill(false),
  );

  const [userName, setUserName] = useState("");

  const [listOrder, setListOrder] = useState(LIST_ORDER);

  const totalOrder = checkedOrder.reduce(
    (total, currentState, index) => {
      if (currentState === true) {
        return total + LIST_ORDER[index].total;
      }
      return total;
    }, 0);

  const handleCheckFood = (position: any) => {
    const updatedCheckedState = checkedFood.map((item, index) =>
      index === position ? !item : item,
    );

    console.log('checkedState',updatedCheckedState)

    setCheckedFood(updatedCheckedState);
  };

  const handleCheckOrder = (position: any) => {
    const updatedCheckedState = checkedOrder.map((item, index) =>
      index === position ? !item : item,
    );

    setCheckedOder(updatedCheckedState);

  };

  const handleOrder = () => {

    console.log("check", checkedFood);

    const totalPrice = checkedFood.reduce(
      (total, currentState, index) => {
        if (currentState === true) {
          return total + LIST_FOOD[index].price;
        }
        return total;
      }, 0);

    const list_foods: Food[] = [];

    for (let i = 0; i < checkedFood.length; i++) {
      if (checkedFood[i] === true) {
        list_foods.push(LIST_FOOD[i]);
      }
    }

    const obj: Order = {
      name: userName,
      foods: list_foods,
      total: totalPrice,
    };

    LIST_ORDER.push(obj);

    setListOrder(LIST_ORDER);
  };


  return <>
    <TextInput
      placeholder={"Nhap ten..."}
      style={{
        fontSize: 18,
        color: "#3B353E",
      }}
      onChangeText={text => setUserName(text)}
    />

    <FlatList
      data={LIST_FOOD}
      renderItem={({ item, index, separators }) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleCheckFood(index)}
        >
          <View style={styles.list_food}>
            <Text style={styles.innerText}>{item.name} - {item.price} VND</Text>
            <Image
              source={
                checkedFood[index] === true ?
                  require("../assets/img/ic_checkbox1.png") :
                  require("../assets/img/ic_checkbox2.png")
              }
              style={{ height: 24, width: 24 }}
            />
          </View>
        </TouchableOpacity>
      )}
      style={{ height: Dimensions.get("screen").height / 1000 }}
    />

    <TouchableOpacity
      onPress={handleOrder}
    >
      <View
        style={{ alignItems: "center", backgroundColor: "grey", padding: 10 }}
      >
        <Text style={{ fontSize: 20, color: "red" }}> Order </Text>
      </View>
    </TouchableOpacity>

    <FlatList
      data={listOrder}
      renderItem={({ item, index, separators }) => (
        <View
          key={index}
        >
          <View style={[styles.list_order, {}]}>
            <Text style={{ fontSize: 18 }}>{item.name}:</Text>

            <ScrollView horizontal style={{ flex: 1, flexDirection: "row", marginHorizontal: 14 }}>
              {
                item.foods.map((food) => {
                  return <Text
                    key={food.id}
                    style={{ fontSize: 18 }}
                  >{food.name}, </Text>;
                })
              }
            </ScrollView>
            <Text style={{ fontSize: 18 }}>{item.total} VND</Text>
            <TouchableOpacity
              onPress={() => handleCheckOrder(index)}
            >
              <Image
                source={
                  checkedOrder[index] === true ?
                    require("../assets/img/ic_checkbox1.png") :
                    require("../assets/img/ic_checkbox2.png")
                }
                style={{ height: 24, width: 24 }}
              />
            </TouchableOpacity>

          </View>
        </View>
      )}

    />
    <TouchableOpacity
      style={{ alignItems: "center", backgroundColor: "grey" }}
    >
      <Text style={{ fontSize: 18, padding: 10 }}>{totalOrder} VND</Text>
    </TouchableOpacity>
  </>;
};

const styles = StyleSheet.create({
  list_food: {
    flexDirection: "row",
  },
  list_order: {
    flexDirection: "row",
  },
  innerText: {
    flexGrow: 1,
    fontSize: 18,
  },
});

export default OrderScreen;
