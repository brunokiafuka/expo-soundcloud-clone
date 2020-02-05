import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";

// constants
import Colors from "../constants/Colors";

// custom components
import { ListItem } from "../components";
export default function SettingsScreen() {
  const options = [
    {
      label: "Liked Tracks",
      icon: "bar-chart-2"
    },
    {
      label: "Playlist & albuns",
      icon: "layers"
    },
    {
      label: "Following",
      icon: "users"
    },
    {
      label: "Station",
      icon: "globe"
    }
  ];
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
    >
      <View>
        {options.map(opt => (
          <ListItem.TouchableRow
            key={opt.label}
            icon={opt.icon}
            label={opt.label}
          />
        ))}
      </View>
    </ScrollView>
  );
}

SettingsScreen.navigationOptions = {
  title: "Library"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor
  },

  contentContainer: {
    paddingVertical: 20
  }
});
