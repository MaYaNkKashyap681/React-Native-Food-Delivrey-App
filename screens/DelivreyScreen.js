import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import MapView, {Marker} from "react-native-maps";
import { selectRestaurant } from "../features/restaurantSlice";
import * as Progress from 'react-native-progress'

const DelivreyScreen = () => {
  const naviagation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity>
            <Text className="text-white font-bold ">Order Help ?</Text>
          </TouchableOpacity>
        </View>
        <View className="bg-white mx-5 my-5 rouded-md p-6 z-50 shadow-md">
          <View className = "flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-3xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-20 w-20 "
            />
          </View>
          <Progress.Bar size = {30} color = "#00CCBB" indeterminate = {true} />
          
          <Text className = "mt-3 text-gray-500">Your order at {restaurant.title} is being prepared</Text>
        </View>
      </SafeAreaView>

      <View className = "p-6 text-4xl text-white text-center">
        <Text>Thanks For Ordering</Text>
      </View>
      {/* <MapView
      initialRegion={{
        latitude: "37.764728",
        longitude: "-122.422999",
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      }}
      className = "flex-1 -mt-10 z-0"
      mapType="mutedStandard">

      </MapView> */}
    </View>
  );
};

export default DelivreyScreen;
