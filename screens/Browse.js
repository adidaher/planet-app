import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { theme, mocks } from "../constants";
const { width } = Dimensions.get("window");
class Browse extends Component {
  state = {
    active: "Products",
    categories: [],
  };

  componentDidMount() {
    this.setState({ categories: this.props.categories });
  }

  handleTab = (tab) => {
    const { categories } = this.props;
    const filtered = categories.filter((category) =>
      category.tags.includes(tab.toLowerCase())
    );
    this.setState({ active: tab, categories: filtered });
  };

  renderTab(tab) {
    const { active } = this.state;
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.handleTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text
          style={{
            fontSize: 14,
            color: !isActive ? theme.colors.gray : theme.colors.secondary,
          }}
        >
          {tab}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { profile } = this.props;
    const { categories } = this.state;
    const tabs = ["Products", "Inspirations", "Shop"];
    const { navigation } = this.props;
    return (
      <View
        style={{
          padding: theme.sizes.base * 2,
          backgroundColor: "white",
          flex: 1,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontWeight: 500, fontSize: 26 }}>Browse</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Image source={profile.avatar} style={styles.avatar} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomColor: theme.colors.gray2,
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginVertical: theme.sizes.base,
            marginTop: 25,
          }}
        >
          {tabs.map((tab) => this.renderTab(tab))}
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: theme.sizes.base * 2 }}
        >
          {/*categories*/}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
              paddingHorizontal: theme.sizes.base * 2,
              marginBottom: theme.sizes.base * 3.5,
            }}
          >
            {categories.map((category) => (
              <TouchableOpacity key={category.name} onPress={() => {}}>
                {/*card*/}
                <View
                  style={[
                    styles.card,
                    styles.shadow,
                    {
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: theme.colors.white,
                    },
                  ]}
                >
                  <View
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 50,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image source={category.image} />
                  </View>
                  <Text style={{ fontSize: 16, height: 20 }} height={20}>
                    {category.name}
                  </Text>

                  <Text style={{ color: theme.colors.gray }}>
                    {category.count} products
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

Browse.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories,
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base,
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3,
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
  },
  card: {
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.base + 4,
    marginBottom: theme.sizes.base,
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 2,
  },
});

export default Browse;
