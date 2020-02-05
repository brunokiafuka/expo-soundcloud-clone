import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: Colors.white
  },
  subTitle: {
    fontSize: 14,
    color: Colors.grey,
    marginTop: 5,
    marginBottom: 5
  },
  image: {
    width: 150,
    height: 150
  },
  imageContainer: {
    width: 150,
    marginRight: 20,
    marginVertical: 5
  }
});

const HorizontalListCard = ({ title, subTitle, songs }) => {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 24 }}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ flexDirection: "row" }}
      >
        {songs.map((song, index) => (
          <TouchableOpacity
            style={[
              styles.imageContainer,
              {
                marginLeft: index === 0 ? 20 : 0
              }
            ]}
          >
            <Image
              resizeMode="contain"
              source={{
                uri: song.cover
              }}
              style={styles.image}
            />
            <Text
              style={{ fontSize: 16, marginVertical: 10 }}
              numberOfLines={1}
            >
              {song.songTitle}
            </Text>
            <Text
              style={{ fontSize: 14, color: Colors.grey }}
              numberOfLines={1}
            >
              {song.ref}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HorizontalListCard;
