import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Alert,
  View,
  Dimensions,
  TextInput,
  Pressable,
  ActivityIndicator,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  ScrollView,
  Keyboard,
} from "react-native";
import { theme } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("window");

const VALID_EMAIL = "contact@react-ui-kit.com";
const VALID_PASSWORD = "subscribe";

class Forgot extends Component {
  state = {
    email: VALID_EMAIL,
    password: VALID_PASSWORD,
    loading: false,
    errors: [],
  };

  handleLogin() {
    console.log(this.state.password);
    Keyboard.dismiss();
    const { navigation } = this.props;
    const { email } = this.state;
    const errors = [];
    this.setState({ loading: true });
    setTimeout(() => {
      if (email === VALID_EMAIL) {
        errors.push("email");
        console.log("email");
      }

      this.setState({ errors, loading: false });

      if (!errors.length) {
        Alert.alert(
          "Password sent!",
          "Please check you email.",
          [
            {
              text: "OK",
              onPress: () => {
                navigation.navigate("Login");
              },
            },
          ],
          { cancelable: false }
        );
      } else {
        Alert.alert(
          "Error",
          "Please check you Email address.",
          [{ text: "Try again" }],
          { cancelable: false }
        );
      }
    }, 2000);
  }

  render() {
    const { loading, errors } = this.state;
    const hasErrors = (key) => (errors.includes(key) ? true : false);
    const { navigation } = this.props;

    return (
      <ScrollView vertical style={{ backgroundColor: "white", flex: 1 }}>
        <KeyboardAvoidingView
          enabled
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={{
            padding: theme.sizes.base * 2,
            backgroundColor: "white",
            flex: 1,
          }}
        >
          <View style={{ justifyContent: "center", height: height * 0.7 }}>
            <Text style={{ fontWeight: 700, fontSize: 24 }}>Forgot</Text>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <View>
                <Text style={{ color: theme.colors.gray2 }}>Email</Text>
                <TextInput
                  placeholder={VALID_EMAIL}
                  onChangeText={(text) => {
                    this.setState({ email: text }, function () {
                      console.log(this.state.email);
                    });
                    console.log(text);
                  }}
                  style={[
                    styles.input,
                    { marginTop: 10 },
                    hasErrors("email") && {
                      borderColor: theme.colors.accent,
                      borderWidth: 1,
                    },
                  ]}
                />
              </View>

              <View>
                <TouchableOpacity
                  style={{
                    marginTop: 45,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => {
                    this.handleLogin();
                  }}
                >
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={[theme.colors.primary, theme.colors.secondary]}
                    style={[
                      styles.linearGradient,
                      {
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                      },
                    ]}
                  >
                    {this.state.loading ? (
                      <ActivityIndicator size="large" color="white" />
                    ) : (
                      <Text
                        style={{
                          paddingVertical: 12,
                          paddingHorizontal: 32,
                          borderRadius: 10,
                          elevation: 0,
                          width: width * 0.85,
                          marginTop: 4,
                          color: "white",
                          textAlignVertical: "center",
                          textAlign: "center",
                        }}
                      >
                        Forgot
                      </Text>
                    )}
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ marginTop: 15 }}
                  onPress={() => {
                    navigation.navigate("Login");
                  }}
                >
                  <Text
                    style={{
                      textAlignVertical: "center",
                      textAlign: "center",
                      color: theme.colors.gray,
                      textDecorationLine: "underline",
                    }}
                  >
                    Back to Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.black,
    borderRadius: theme.sizes.radius,
    fontSize: theme.sizes.font,
    fontWeight: "500",
    color: theme.colors.black,
    height: theme.sizes.base * 3,
    padding: 5,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
});

export default Forgot;
