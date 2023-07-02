import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Button,
  Pressable,
  FlatList,
  Image,
  Animated,
  Modal,
} from "react-native";
import theme from "../constants";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;
const { width, height } = Dimensions.get("window");

export class Welcome extends Component {
  state = {
    showTerms: false,
  };

  renderIllustrations() {
    const { illustrations } = this.props;
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        extratDate={this.state}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => (
          <Image
            source={item.source}
            resizeMode="contain"
            style={{ width, height: height / 2, overflow: "visible" }}
          />
        )}
      ></FlatList>
    );
  }

  /* scrollX = new Animated.Value(0);
  renderSteps() {
    const { illustrations } = this.props;
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      {illustrations.map((item, index) => {
        return <View key={`step-${index}`} style={styles.steps} />;
      })}
    </View>;
  }*/
  renderTermsService() {
    return (
      <Modal
        animationType="slide"
        visible={this.state.showTerms}
        onRequestClose={() => this.setState({ showTerms: false })}
      >
        <View style={{ padding: 25, justifyContent: "space-evenly" }}>
          <Text style={{ marginBottom: 25 }}>Terms of Service</Text>
          <Text style={{ marginBottom: 25 }}>
            1. Your use of the Service is at your sole risk. The service is
            provided on an "as is" and "as available" basis.
          </Text>
          <Text style={{ marginBottom: 25 }}>
            2. Support for Expo services is only available in English, via
            e-mail.
          </Text>
          <Text style={{ marginBottom: 25 }}>
            3. You understand that Expo uses third-party vendors and hosting
            partners to provide the necessary hardware, software, networking,
            storage, and related technology required to run the Service.
          </Text>
          <Text style={{ marginBottom: 25 }}>
            4. You must not modify, adapt or hack the Service or modify another
            website so as to falsely imply that it is associated with the
            Service, Expo, or any other Expo service.
          </Text>
          <Text style={{ marginBottom: 25 }}>
            5. You may use the Expo Pages static hosting service solely as
            permitted and intended to host your organization pages, personal
            pages, or project pages, and for no other purpose. You may not use
            Expo Pages in violation of Expo's trademark or other rights or in
            violation of applicable law. Expo reserves the right at all times to
            reclaim any Expo subdomain without liability to you.
          </Text>
          <Text style={{ marginBottom: 25 }}>
            6. You agree not to reproduce, duplicate, copy, sell, resell or
            exploit any portion of the Service, use of the Service, or access to
            the Service without the express written permission by Expo.
          </Text>
          <Text style={{ marginBottom: 25 }}>
            7. We may, but have no obligation to, remove Content and Accounts
            containing Content that we determine in our sole discretion are
            unlawful, offensive, threatening, libelous, defamatory,
            pornographic, obscene or otherwise objectionable or violates any
            party's intellectual property or these Terms of Service.
          </Text>
          <Text style={{ marginBottom: 25 }}>
            8. Verbal, physical, written or other abuse (including threats of
            abuse or retribution) of any Expo customer, employee, member, or
            officer will result in immediate account termination.
          </Text>
          <Text style={{ marginBottom: 25 }}>
            9. You understand that the technical processing and transmission of
            the Service, including your Content, may be transferred unencrypted
            and involve (a) transmissions over various networks; and (b) changes
            to conform and adapt to technical requirements of connecting
            networks or devices.
          </Text>
          <Text style={{ marginBottom: 25 }}>
            10. You must not upload, post, host, or transmit unsolicited e-mail,
            SMSs, or "spam" messages.
          </Text>
        </View>
      </Modal>
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: h * 0.1,
            padding: 8,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            Your Home.
            <Text style={{ color: "#0AC4BA" }}>Greener,</Text>
          </Text>
          <Text style={{ marginTop: 14, color: "#C5CCD6", fontSize: 18 }}>
            Enjoy the experience
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: h * 0.1,
          }}
        >
          {this.renderIllustrations()}
        </View>
        <View
          style={{
            marginTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable
            title="Login"
            backgroundColor="#00d4ff"
            onPress={() => {
              navigation.navigate("Login");
            }}
            style={{
              backgroundColor: "#00d4ff",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 12,
              paddingHorizontal: 32,
              borderRadius: 4,
              elevation: 3,
              width: w * 0.8,
            }}
          >
            <Text style={{ color: "white" }}>Login</Text>
          </Pressable>

          <Pressable
            title="Signup"
            onPress={() => {
              navigation.navigate("SignUp");
            }}
            style={{
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 12,
              paddingHorizontal: 32,
              borderRadius: 4,
              elevation: 3,
              width: w * 0.8,
              marginTop: 10,
            }}
          >
            <Text style={{ color: "black" }}>Signup</Text>
          </Pressable>

          <Pressable
            title="Terms"
            onPress={() => {
              this.setState({ showTerms: true });
            }}
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 12,
              paddingHorizontal: 32,
              borderRadius: 10,
              elevation: 0,
              width: w * 0.8,
              marginTop: 4,
              backgroundColor: "transparent",
            }}
          >
            <Text style={{ color: "gray" }}>Terms of service</Text>
          </Pressable>
        </View>
        {this.renderTermsService()}
      </View>
    );
  }
}

Welcome.defaultProps = {
  illustrations: [
    { id: 1, source: require("../assets/images/illustration_1.png") },
    { id: 2, source: require("../assets/images/illustration_2.png") },
    { id: 3, source: require("../assets/images/illustration_3.png") },
  ],
};

const styles = StyleSheet.create({
  stepsContainer: {
    position: "absolute",
    bottom: 30,
    right: 0,
    left: 0,
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
    backgroundColor: "gray",
  },
});

export default Welcome;
