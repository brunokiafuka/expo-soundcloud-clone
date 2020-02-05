import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import Colors from "../constants/Colors";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import StreamScreen from "../screens/Stream";
import SettingsScreen from "../screens/SettingsScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const TabBarComponent = props => {
  return (
    <React.Fragment>
      <BottomTabBar {...props} />
    </React.Fragment>
  );
};

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"md-home"} />
};

HomeStack.path = "";

const StreamStack = createStackNavigator(
  {
    Links: StreamScreen
  },
  config
);

StreamStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-musical-note"} />
  )
};

StreamStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"ios-bookmarks"} />
  )
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    StreamStack,
    SettingsStack
  },
  {
    tabBarComponent: props => (
      <TabBarComponent
        {...props}
        style={{
          backgroundColor: Colors.tabBar,
          shadowColor: "#fff",
          overflow: "visible",
          shadowOffset: {
            width: 0,
            height: -2
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 2
        }}
      />
    ),
    tabBarOptions: {
      showLabel: false
    }
  }
);

tabNavigator.path = "";

export default tabNavigator;
