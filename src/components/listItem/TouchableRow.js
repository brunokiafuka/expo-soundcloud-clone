import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

// constants
import Colors from "../../constants/Colors";

const TouchableRow = ({ icon, label }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.white,
        paddingHorizontal: 13,
        paddingVertical: 20,
        justifyContent: "space-between",
        borderBottomColor: Colors.grey,
        borderBottomWidth: StyleSheet.hairlineWidth
      }}
    >
      <View>
        <Feather name={icon} size={20} />
      </View>
      <View style={{ marginLeft: 10, flex: 1 }}>
        <Text style={{ fontSize: 16 }}>{label}</Text>
      </View>
      <View>
        <Ionicons name="ios-arrow-forward" size={20} color={Colors.grey} />
      </View>
    </TouchableOpacity>
  );
};

export default TouchableRow;
