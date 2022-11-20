import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity.js";
import restaurant from "../sanity/schemas/restaurant";

const FeaturedRow = ({ id, title, description }) => {
  
  const [restaurants, setrestaurants] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "featured" && _id == $id] {
          ...,
          restaurants[]->{
            ...,
            dishes[]->,
            type-> {
              name
            }
          }
        }[0]
        `,{id}
      )
      .then((data) => setrestaurants(data?.restaurants));
  }, [id]);
  console.log(restaurants);
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg ">{title}</Text>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2267/2267911.png",
          }}
          className="h-4 w-4"
        />
      </View>
      <Text className="text-xs text-gray-400 font-semibold px-4">
        {description}
      </Text>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          // paddingBottom: 10
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            dishes={restaurant.dishes}
            short_description={restaurant.short_description}
            genere={restaurant.type?.name}
            ratings={restaurant.ratings}
            address = {restaurant.address}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
