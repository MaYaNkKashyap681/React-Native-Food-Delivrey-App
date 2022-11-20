import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BasketItem = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basket = useSelector(selectBasketTotal);

  if(items.length === 0) return null;
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        className="bg-blue-500 mx-5 p-4 rounded-lg flex-row items-center justify-between"
        onPress={() => navigation.navigate("Basket")}
      >
        <Text className="bg-blue-800 font-extrabold p-2 text-white">
          {items.length}
        </Text>
        <Text className="font-extrabold text-white text-xl">View Basket</Text>
        <Text className="text-lg text-white font-extrabold">$ {basket}.00</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketItem;
