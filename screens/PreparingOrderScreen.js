import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress"
import { useNavigation } from "@react-navigation/native";
// import { Circle } from "react-native-progress";

const PreparingOrderScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("DelivreyScreen")
        }, 4000)
    }, [])
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/crossroads.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-72 w-72 rounded-full overflow-hidden"
      />
      <Animatable.Text
      animation="slideInUp"
      iterationCount = {1}
      className = "text-md my-10 text-white font-bold text-center">
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      {/* <Progress.Circle size = {60} indeterminate = {true} color ="white" /> */}
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
