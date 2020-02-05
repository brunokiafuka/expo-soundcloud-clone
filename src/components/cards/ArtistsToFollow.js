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
    marginTop: 20,
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
    height: 150,
    borderRadius: 75,
    borderColor: Colors.grey,
    borderWidth: StyleSheet.hairlineWidth
  },
  imageContainer: {
    width: 150,
    marginRight: 20,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: Colors.brandOrange,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5
  },
  buttonText: {
    color: Colors.white,
    fontWeight: "bold"
  }
});

const ArtistsToFollow = ({ title, subTitle, artists }) => {
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
        {artists.map((artist, index) => (
          <View
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
                uri: artist.avatar
              }}
              style={styles.image}
            />
            <Text
              style={{ fontSize: 18, marginVertical: 10 }}
              numberOfLines={1}
            >
              {artist.name}
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Follow</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ArtistsToFollow;
