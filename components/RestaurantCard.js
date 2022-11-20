import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity.js";

const RestaurantCard = ({
  id,
  imgUrl,
  rating,
  genere,
  dishes,
  short_description,
  ratings,
  title,
  address,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className=" bg-white mr-3 rounded-md"
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          rating,
          genere,
          dishes,
          short_description,
          ratings,
          title,
          address,
        });
      }}
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-36 w-64 rounded-sm"
      ></Image>
      <View className="px-5 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row gap-2 pt-2">
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2014/04/02/10/39/star-304120_1280.png",
            }}
            className="h-4 w-4 overflow-hidden"
          />
          <Text className="font-bold ">
            {ratings} . <Text className="text-green-600">{genere}</Text>
          </Text>
        </View>
        <Text className="font-bold mt-2 text-gray-500">Nearby. {address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
