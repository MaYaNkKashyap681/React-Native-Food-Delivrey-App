import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { selectRestaurant } from "../features/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import { useSelector, useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context/";
import { urlFor } from "../sanity";

const Basket = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupedItems, setGroupedItems] = useState([]);
  const dispatch = useDispatch();

  //The Logic is used for grouping things together
  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItems(groupedItems);
  }, [items]);

  console.log(restaurant);
  return (
    <SafeAreaView className = "flex justify-between">
      <View>
        <View className="bg-white p-4">
          <Text className="text-lg font-bold text-center">Basket</Text>
          <Text className="text-center text-gray-400">{restaurant.title}</Text>
        </View>

        <View className="flex-row items-center p-4 space-x-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 10-35 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CC00]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={{
            paddingBottom: 15,
          }}
          className = "h-64"
        >
          {Object.entries(groupedItems).map(([key, basketI]) => (
            <View
              key={key}
              className="flex-row items-center justify-between px-5 py-2 space-x-4 bg-white"
            >
              <Text>{basketI.length} x</Text>
              <Image
                source={{
                  uri: urlFor(basketI[0]?.image).url(),
                }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{basketI[0]?.name}</Text>
              <Text className="text-xs text-gray-400">
                $. {basketI[0]?.price}
              </Text>
              <TouchableOpacity>
                <Text
                  className="text-[#00CC00] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">SubTotal</Text>
            <Text className="text-gray-400">{basketTotal}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivrey Fee</Text>
            <Text className="text-gray-400">$. {5.9}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Order Total</Text>
            <Text className="text-black text-xl font-bold">$. {basketTotal + 5.9}</Text>
          </View>
          <TouchableOpacity className = "rounded-lg bg-[#00CC00] p-4"
          onPress = {() => navigation.navigate("PreparingOrder")}>
            <Text className = "text-center text-white text-lg font-bold">Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Basket;
