import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { urlFor } from "../sanity";
import { useSelector, useDispatch } from "react-redux";
import DishRow from "../components/DishRow";
import BasketItem from "../components/BasketItem.js";
import {
  selectRestaurant,
  setRestaurant,
} from "../features/restaurantSlice.js";

const RestaurantScreen = () => {
  const dispatch = useDispatch();
  const {
    params: {
      id,
      imgUrl,
      rating,
      genere,
      dishes,
      short_description,
      ratings,
      title,
      address,
    },
  } = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(
      setRestaurant ({
      id,
      imgUrl,
      rating,
      genere,
      dishes,
      short_description,
      title,
      ratings,
      address,
    })
  )
  }, [id]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 35,
        }}
      >
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full h-56 bg-gray-300"
          />
          <TouchableOpacity onPress={() => navigation.goBack} className="">
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/507/507257.png",
              }}
              className="h-8 w-8 bg-white p-2 rounded-full absolute bottom-44 left-3 opacity-50"
            />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
          </View>
          <View className="space-x-2 my-1 px-4">
            <View className="flex-row space-x-1">
              <Image
                source={{
                  uri: "https://cdn.pixabay.com/photo/2014/04/02/10/39/star-304120_1280.png",
                }}
                className="h-4 w-4 overflow-hidden"
              />
              <Text className="font-bold">
                {ratings} .{" "}
                <Text className="text-green-600">
                  <Text className="text-gray-400">Nearby, </Text>
                  {address}
                </Text>
              </Text>
            </View>
            <Text className="text-gray-400 font-semibold text-md mt-2 pl-0 py-2">
              {short_description} The one of the best restaurant of this area
              you will love the food.
            </Text>
          </View>
          <TouchableOpacity className="">
            <Text className="font-bold bg-gray-200 p-2 px-4">
              Have a food allergy?
            </Text>
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
      <BasketItem />
    </>
  );
};

export default RestaurantScreen;
