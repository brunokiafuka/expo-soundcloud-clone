import React from "react";
import { ScrollView, StyleSheet } from "react-native";

// constants
import Colors from "../constants/Colors";

// custom components
import { Cards } from "../components";

// mockdata
import stream from "../mockdata/stream";
export default function Stream() {
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
    >
      {stream.map(data => (
        <Cards.StreamCard
          key={data.title}
          name={data.name}
          avatar={data.avatar}
          artwork={data.artwork}
          title={data.title}
          isLiked={data.isLiked}
          repost={data.repost}
          likes={data.likes}
          listens={data.listens}
          hastag={data.hastag}
          durantion={data.durantion}
        />
      ))}
    </ScrollView>
  );
}

Stream.navigationOptions = {
  title: "Stream"
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
