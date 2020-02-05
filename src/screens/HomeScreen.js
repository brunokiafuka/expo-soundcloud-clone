import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

// constants
import Colors from "../constants/Colors";

// custom components
import { Cards } from "../components";

// mockdata
import relatedSongs from "../mockdata/relatedSong";
import artistsToFollow from "../mockdata/artistsToFollow";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Cards.BannerCard
          title="SoundClone Weekly"
          subTitle="All of SoundClone. Just for you."
          imageUrl={
            "https://i1.sndcdn.com/artworks-000602129680-lnrzyj-t500x500.jpg"
          }
        />

        <Cards.HorizontalListCard
          title="More of what you like"
          songs={relatedSongs}
          subTitle="Suggestions based on what you've liked or played"
        />
        <Cards.ArtistsToFollow
          title="Artist you should follow"
          artists={artistsToFollow}
          subTitle="Based on your listing history"
        />
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: "Home"
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
