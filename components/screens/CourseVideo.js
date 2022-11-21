import React, { useState, useCallback, useEffect } from "react";
import {
  Text,
  View,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  ScrollView,
  Dimensions,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Download({ route }) {
  const { width, height } = Dimensions.get("window");

  // const { link, mentor, videoLink, desc } = route.params;
  const { link, mentor, videoLink, description } = route.params.course;
  const [playing, setPlaying] = useState(false);
  const [isReady, SetIsReady] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        paddingTop: 20,
        paddingHorizontal: 10,
        height: height,
        alignItems:'center'
      }}
    >
      <Text style={styles.Text}> This is the best course for you </Text>
      <YoutubePlayer
        width={width-10}
        height={200}
        play={playing}
        videoId={link}
        onChangeState={onStateChange}
        style={styles.video}
        onReady={() => SetIsReady(true)}
      />
      {!isReady && (
        <View>
          <ActivityIndicator color="#e76015" size={48} />
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontFamily: "JosefinSans-semiBold",
              paddingVertical: 10,
            }}
          >
            Loading video ....
          </Text>
        </View>
      )}
      <Text style={styles.credit}>
        All credit :<Text style={styles.creditTo}> @{mentor}</Text>{" "}
      </Text>
      <Text
        style={{
          fontFamily: "JosefinSans-bold",
          fontSize: 16,
          paddingHorizontal: 16,
          marginBottom: 5,
        }}
      >
        About Course :
      </Text>
      <ScrollView
        contentContainerStyle={{
          width: width,
          marginBottom: 10,
          paddingBottom: 10,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.desc}>{description}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Linking.openURL(`${videoLink}`);
          }}
        >
          <Text style={styles.buttonText}> See full course playlist </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "#e76015",
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 40,
  },
  buttonText: {
    fontFamily: "JosefinSans-semiBold",
    fontSize: 16,
  },
  Text: {
    fontSize: 16,
    fontFamily: "JosefinSans-bold",
    textAlign: "center",
    marginVertical: 20,
  },
  credit: {
    fontFamily: "JosefinSans-bold",
    fontSize: 16,
    marginVertical: 20,
    paddingLeft: 10,
    fontWeight: "500",
  },
  creditTo: {
    fontFamily: "JosefinSans-semiBold",
    fontSize: 16,
    color: "#e76015",
    textDecorationLine: "underline",
    textDecorationColor:'#e76015'
  },
  videoView: {
    height: 400,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  desc: {
    paddingHorizontal: 16,
    fontFamily: "JosefinSans-medium",
    fontSize: 12,
    lineHeight: 16,
  },
});
