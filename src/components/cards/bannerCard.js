import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.white,
    marginBottom: 20
  },
  subTitle: {
    fontSize: 14,
    color: Colors.grey,
    marginTop: 5,
    marginBottom: 5
  },
  image: {
    width: "100%",
    height: 250
  }
});

const BannerCard = ({ title, subTitle, imageUrl }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{ fontSize: 24 }}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <View style={{ height: 150, overflow: "hidden" }}>
        <Image
          resizeMode="cover"
          source={{ uri: imageUrl }}
          style={styles.image}
        />
      </View>
      <Text style={styles.subTitle}>Based on your listening history</Text>
    </TouchableOpacity>
  );
};

export default BannerCard;
