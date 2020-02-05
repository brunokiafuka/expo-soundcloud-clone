import React from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function Stream() {
  return <ScrollView style={styles.container}></ScrollView>;
}

Stream.navigationOptions = {
  title: "Stream"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
