import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Welcome from "../screens/Welcome.js";
import Product from "../screens/Product.js";
import Login from "../screens/Login.js";
import Explore from "../screens/Explore.js";
import Settings from "../screens/Settings.js";
import Browse from "../screens/Browse.js";
import Signup from "../screens/Signup.js";
import Forgot from "../screens/Forgot.js";
import { theme } from "../constants";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    height: theme.sizes.base * 5,
    backgroundColor: theme.colors.white, // or 'white
    borderBottomColor: "transparent",
    elevation: 0, // for android
  },
  HeaderBackButton: <Image source={require("../assets/icons/back.png")} />,
  headerBackTitle: null,

  headerLeftContainerStyle: {
    alignItems: "center",
    marginLeft: 5 * 2,
    paddingRight: 5,
  },
  headerRightContainerStyle: {
    alignItems: "center",
    paddingRight: 5,
  },
};

const HomeStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen
          options={{ headerBackTitle: null, headerTitle: "" }}
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerBackTitle: null, headerTitle: "" }}
        />
        <Stack.Screen
          name="Browse"
          component={Browse}
          options={{ headerBackTitle: null, headerTitle: "" }}
        />
        <Stack.Screen
          name="SignUp"
          component={Signup}
          options={{ headerBackTitle: null, headerTitle: "" }}
        />
        <Stack.Screen
          name="Forgot"
          component={Forgot}
          options={{ headerBackTitle: null, headerTitle: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStackNavigator;
