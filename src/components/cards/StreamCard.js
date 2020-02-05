import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import numeral from "numeral";
import { Ionicons, EvilIcons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginBottom: 20,
    paddingVertical: 10
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
    //paddingLeft: 20
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  actionButtons: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
    borderColor: Colors.grey,
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  overlayBtn: {
    backgroundColor: "rgba(0, 0, 0, 0.8);",
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginBottom: 4,
    alignSelf: "flex-start"
  },
  timeTagContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 13,
    paddingVertical: 5,
    marginBottom: 10,
    borderBottomColor: Colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});

const StreamCard = ({
  name,
  title,
  avatar,
  artwork,
  isLiked,
  repost,
  likes,
  listens,
  hastag,
  durantion
}) => {
  return (
    <View style={styles.container}>
      <View
        style={{ flexDirection: "row", marginBottom: 5, paddingHorizontal: 13 }}
      >
        <Image
          resizeMode="cover"
          source={{ uri: avatar }}
          style={styles.avatar}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{ fontSize: 14, fontWeight: "bold" }}
            >{`${name} `}</Text>
            <Text style={{ fontSize: 14, color: Colors.grey }}>
              posted a track
            </Text>
          </View>

          <Text style={styles.subTitle}>22 hours ago</Text>
        </View>
      </View>

      <View style={{ height: 150, overflow: "hidden", paddingHorizontal: 13 }}>
        <ImageBackground
          resizeMode="cover"
          source={{ uri: artwork }}
          style={styles.image}
        >
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
              top: 60
            }}
          >
            <TouchableOpacity style={styles.overlayBtn}>
              <Text style={{ color: Colors.grey, fontSize: 15 }}>{name}</Text>
            </TouchableOpacity>
            <View style={styles.overlayBtn}>
              <Text
                style={{ color: Colors.white, fontSize: 15 }}
                numberOfLines={2}
              >
                {title}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.timeTagContainer}>
        <Text style={styles.subTitle}>{hastag}</Text>
        <Text style={styles.subTitle}>{durantion}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 13
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Ionicons name="ios-play" size={20} color={Colors.grey} />
          <Text style={{ color: Colors.grey, marginLeft: 4 }}>{listens}</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.actionButtons}>
            <EvilIcons name="retweet" size={30} color={Colors.grey} />
            <Text style={{ color: Colors.grey, marginLeft: 4 }}>{repost}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButtons}>
            <Ionicons
              name="ios-heart"
              size={20}
              color={isLiked ? Colors.brandOrange : Colors.grey}
            />
            <Text style={{ color: Colors.grey, marginLeft: 4 }}>
              {numeral(likes).format("0.0a")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButtons}>
            <Ionicons name="ios-more" size={20} color={Colors.grey} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default StreamCard;
