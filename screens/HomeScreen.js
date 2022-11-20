import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchIcon, UserIcon } from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  const navigation = useNavigation();

  //when ui loads
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  //when component loads
  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured"] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->{
            ...,
          }
        }
      }
      `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView className="pb-8">
      <View className="flex-row justify-between p-2 bg-white">
        <View className="flex-row items-center">
          <View className="flex-row pb-3 items-center space-x-2">
            <Image
              source={{
                uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450",
              }}
              className="h-7 w-7 rounded-full"
            />
          </View>
          <View className="ml-3">
            <Text>Deliver Now</Text>
            <Text className="font-bold text-xl">Current Location </Text>
          </View>
        </View>
        <View>
          <Image
            source={{
              uri: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1668861722~exp=1668862322~hmac=04b6399f5418f9200518171768480eb69db72b55602ccd380436b047ab7f85e9",
            }}
            className="h-11 w-11"
          />
        </View>
      </View>

      {/* Search */}
      <View className="p-4 bg-white">
        <View className="flex-row justify-center items-center space-x-2 bg-gray-300 p-2">
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/13/13283.png?w=740&t=st=1668862032~exp=1668862632~hmac=6d035d3df6732fee19e0e83a115cc5fdcb78ae63cef4ca5e475436d438ebcb18",
            }}
            className="h-6 w-6 flex p-1"
          />
          <TextInput
            className="flex-1 bg-gray-300 p-1 font-bold text-md"
            placeholder="search for dish"
          />
        </View>
      </View>

      <ScrollView
        className="bg-gray-100 flex-1"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Categories />
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key = {category._id}
            id = {category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
