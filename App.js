import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeStackNavigator from "./navigation/index";
import React from "react";
import * as constants from "./constants";
import AppLoading from "expo-app-loading";

export default class App extends React.Component {
  state = { isLoadingComplete: false };

  handleResourceAsync = async () => {
    const cacheImage = image.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImage);
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={(error) => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      );
    }
    return <HomeStackNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
