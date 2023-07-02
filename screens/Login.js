import React, { Component } from "react";
import {
  StyleSheet,
  Text,
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

class Login extends Component {
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
    const { email, password } = this.state;
    const errors = [];
    this.setState({ loading: true });
    setTimeout(() => {
      if (email === VALID_EMAIL) {
        errors.push("email");
        console.log("email");
      }
      if (password === VALID_PASSWORD) {
        errors.push("password");
        console.log("password");
      }

      this.setState({ errors, loading: false });

      if (!errors.length) {
        console.log("aa");
        console.log(this.state.loading);
        navigation.navigate("Browse");
      }
    }, 2000);
  }

  render() {
    const { loading, errors } = this.state;
    const hasErrors = (key) => (errors.includes(key) ? true : false);
    const { navigation } = this.props;
    return (
      <ScrollView vertical style={{ backgroundColor: "white" }}>
        <KeyboardAvoidingView
          enabled
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={{
            padding: theme.sizes.base * 2,
            backgroundColor: "white",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: 500, fontSize: 26 }}>Login</Text>
          <View
            style={{
              marginTop: 55,
              flex: 0.5,
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            <View style={{ marginTop: 25 }}>
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
                  hasErrors("email") && {
                    borderColor: theme.colors.accent,
                    borderWidth: 1,
                  },
                ]}
              />
            </View>
            <View style={{ marginTop: 35 }}>
              <Text style={{ marginBottom: 8, color: theme.colors.gray2 }}>
                password
              </Text>
              <TextInput
                secureTextEntry={true}
                autoComplete="off"
                label="Password"
                placeholder="subscribe"
                onChangeText={(text) => {
                  this.setState({ password: text }, function () {
                    console.log(this.state.password);
                  });
                  console.log(text);
                }}
                value={this.state.password}
                style={[
                  styles.input,
                  hasErrors("password") && {
                    borderColor: theme.colors.accent,
                    borderWidth: 1,
                  },
                ]}
              />
            </View>
            <View>
              <TouchableOpacity
                style={{
                  marginTop: 65,
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
                      Login
                    </Text>
                  )}
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ marginTop: 15 }}
                onPress={() => {
                  navigation.navigate("Forgot");
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
                  Forgot your password?
                </Text>
              </TouchableOpacity>
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

export default Login;
