import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imageUrl="https://img.freepik.com/free-vector/mega-sale-banner-blue-yellow-colors_1017-32176.jpg?w=996&t=st=1668863139~exp=1668863739~hmac=68290f627086418c35e6ddcbe7524e476f1800b02b12e5017728ed8e5b31cf53" textontop = "Discount"/>
      <CategoryCard imageUrl="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?w=900&t=st=1668883554~exp=1668884154~hmac=06c40166c69bf55411eacd711149ff75a2e3d177de3762779ba9bf4b9802676a" textontop = "Pizza"/>
      <CategoryCard imageUrl="https://img.freepik.com/premium-photo/penne-pasta-tomato-sauce-with-meat-tomatoes-decorated-with-pea-sprouts-dark-table_2829-3411.jpg?w=900" textontop = "Pasta"/>
      <CategoryCard imageUrl="https://img.freepik.com/free-photo/high-angle-japanese-dumplings-composition_23-2148809869.jpg?w=900&t=st=1668883658~exp=1668884258~hmac=227b90d54db58156dfa972bcca4c2b2159899d3c8ef679c81c7d4bac5bb089d8" textontop = "Momos"/>
      <CategoryCard imageUrl="https://img.freepik.com/free-photo/schezwan-noodles-szechwan-vegetable-hakka-noodles-chow-mein-is-popular-indo-chinese-recipes-served-bowl-plate-with-wooden-chopsticks_466689-74642.jpg?w=900&t=st=1668883691~exp=1668884291~hmac=9baaf3f30445924bbf1e0aa5aff534d6b9e18fa3c9c6e641c3741893a3b02828" textontop = "Noodles"/>
      <CategoryCard imageUrl="https://img.freepik.com/free-photo/omelette-with-mushrooms-dried-herbs_140725-6283.jpg?w=740&t=st=1668883809~exp=1668884409~hmac=1b6cc57040825148ba5d718b493947f9566f03533da35d5fb1e0cd3cd3e1c37f" textontop = "Omlette"/>
      <CategoryCard imageUrl="https://img.freepik.com/premium-photo/chicken-biriyani-using-jeera-rice-arranged-earthenware-with-raitha-grey-background_527904-8.jpg?w=900" textontop = "Biriyani "/>

    </ScrollView>
  );
};

export default Categories;
