import { StatusBar } from "expo-status-bar";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Basket from "./screens/Basket";
import RestaurntScreen from "./screens/RestaurantScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DelivreyScreen from "./screens/DelivreyScreen";

import { store } from "./store.js";
import { Provider } from "react-redux";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurntScreen} />
            <Stack.Screen
              name="Basket"
              component={Basket}
              options={{ headerShown: false, presentation: "modal" }}
            />
            <Stack.Screen
              name="PreparingOrder"
              component={PreparingOrderScreen}
              options={{ headerShown: false, presentation: "fullScreenModal" }}
            />
            <Stack.Screen
              name="DelivreyScreen"
              component={DelivreyScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
