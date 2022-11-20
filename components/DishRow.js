import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { useSelector, useDispatch } from "react-redux";
import {
  addtobasket,
  selectBasketItems,
  selectBasketItemsWithId,
  removeFromBasket,
} from "../features/basketSlice";

const DishRow = ({ id, name, description, image, price }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addtobasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
        onPress={() => setIsPressed(!isPressed)}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              <Text>$ {price}</Text>
            </Text>
          </View>

          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F3",
              }}
              source={{
                uri: urlFor(image).url(),
              }}
              className="h-20 w-20 bg-gray-300 p-4 "
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              className= {`bg-emerald-400 h-8 w-8 flex justify-center items-center rounded-full ${items.length == 0 && "bg-gray-400"}`}
              onPress={removeItemFromBasket}
            >
              <Text className="text-white font-bold text-3xl">-</Text>
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity
              className="bg-emerald-400 h-8 w-8 flex justify-center items-center rounded-full"
              onPress={addItemToBasket}
            >
              <Text className="text-white font-bold text-3xl">+</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

    </>
  );
};

export default DishRow;
