import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  Switch,
  TextInput,
} from "react-native";
import { theme } from "../constants";
const { width } = Dimensions.get("window");

const GRAY_COLOR = "rgba(168, 182, 200, 0.30)";

class Settings extends Component {
  state = {
    budget: 850,
    monthly: 1700,
    notifications: true,
    newsletter: false,
    editing: null,
    profile: {},
  };

  handleEdit(name, text) {
    const { profile } = this.state;
    profile[name] = text;

    this.setState({ profile });
  }

  toggleEdit(name) {
    const { editing } = this.state;
    this.setState({ editing: !editing ? name : null });
  }

  renderEdit(name) {
    const { profile, editing } = this.state;

    if (editing === name) {
      return (
        <TextInput
          defaultValue={profile[name]}
          onChangeText={(text) => this.handleEdit([name], text)}
          style={{
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 4,
            width: width * 0.5,
            height: 25,
          }}
        />
      );
    }

    return <Text>{profile[name]}</Text>;
  }

  render() {
    const { profile, editing } = this.state;
    return (
      <View
        style={{
          padding: theme.sizes.base * 2,
          backgroundColor: "white",
          flex: 1,
        }}
      >
        <ScrollView>
          <View style={{ marginTop: 15 }}>
            <Text style={{ color: theme.colors.gray }}>Username</Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 3,
              }}
            >
              {this.renderEdit("username")}

              <TouchableOpacity onPress={() => this.toggleEdit("username")}>
                <Text style={{ color: theme.colors.secondary }}>
                  {editing === "username" ? "Save" : "Edit"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: 25 }}>
            <Text style={{ color: theme.colors.gray2 }}>Location</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 3,
              }}
            >
              <Text style={{ fontWeight: 500 }}>Milan</Text>

              <TouchableOpacity>
                <Text style={{ color: theme.colors.secondary }}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginTop: 25 }}>
            <Text style={{ color: theme.colors.gray2 }}>Email</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 3,
              }}
            >
              <Text style={{ fontWeight: 500 }}>adedaher5@gmail.com</Text>
            </View>
          </View>

          <View
            style={{
              marginTop: theme.sizes.base * 3,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>Notifications</Text>
            <Switch
              thumbColor={
                this.state.notifications ? theme.colors.secondary : GRAY_COLOR
              }
              ios_backgroundColor={GRAY_COLOR}
              trackColor={{
                false: GRAY_COLOR,
                true: theme.colors.secondary,
              }}
              value={this.state.notifications}
              onValueChange={(value) => this.setState({ notifications: value })}
            />
          </View>

          <View
            style={{
              marginTop: theme.sizes.base * 2,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>Newsletter</Text>
            <Switch
              thumbColor={
                this.state.newsletter ? theme.colors.secondary : GRAY_COLOR
              }
              ios_backgroundColor={GRAY_COLOR}
              trackColor={{
                false: GRAY_COLOR,
                true: theme.colors.secondary,
              }}
              value={this.state.newsletter}
              onValueChange={(value) => this.setState({ newsletter: value })}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  },
  thumb: {
    width: theme.sizes.base,
    height: theme.sizes.base,
    borderRadius: theme.sizes.base,
    borderColor: "white",
    borderWidth: 3,
    backgroundColor: theme.colors.secondary,
  },
});
export default Settings;
