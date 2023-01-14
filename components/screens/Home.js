import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions
} from "react-native";
import topCourses from "../api/topCourses";
import courseTypes from "../api/courseTypes";
import { Video } from "expo-av";

const Home = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  const courseBox = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("CourseDetails", {
            courseId: item.id,
          })
        }
      >
        <View style={styles.courseBox}>
          <Image source={{ uri: item.img }} style={styles.courseImg} />
          <View style={styles.courseDetails}>
            <Text style={styles.courseName}>{item.courseName}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const courseType = ({ item }) => {
    return (
      <Text style={[styles.courseTypeText, { backgroundColor: item.color }]}>
        {item.name}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          alignItems: "flex-start",
          width: "100%",
          paddingLeft: 20,
        }}
      >
        <Text
          style={[
            styles.headerText,
            { fontSize: 16, fontFamily: "JosefinSans-regular" },
          ]}
        >
          Welcome,
        </Text>
        <Text
          style={{
            fontSize: 26,
            color: "#f57608",
            paddingLeft: 10,
            fontFamily: "JosefinSans-medium",
          }}
        >
          Chaitali
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          display: "flex",
          alignItems: "center",
          width: width,
          justifyContent: "flex-start",
          marginBottom:10,
          paddingBottom:10
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Video
            style={styles.banner}
            source={{
              uri: "https://cdnl.iconscout.com/lottie/premium/thumb/online-education-3575818-2997699.mp4",
            }}
            resizeMode="contain"
            isLooping
            shouldPlay
          />
        </View>
        <View style={styles.topCourseContainer}>
          <FlatList
            data={courseTypes}
            renderItem={courseType}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "90%",
              marginTop: 15,
            }}
          >
            <Text style={styles.topCourseHeading}>Best Courses </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("TopCourses")}
              style={{}}
            >
              <Text style={styles.topCourseSubheading}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={styles.FlatList}
            data={topCourses}
            renderItem={courseBox}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Courses")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Start Learning</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 40,
  },
  header: {
    flexDirection: "column",
    alignItems: "flex-start",
    fontFamily: "JosefinSans-light",
  },
  banner: {
    width: 500,
    height: 240,
    marginTop: 5,
  },
  courseTypeText: {
    alignSelf: "center",
    marginHorizontal: 10,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    letterSpacing: 1,
    color: "#fff",
    fontFamily: "JosefinSans-semiBold",
  },
  button: {
    backgroundColor: "#e76015",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop:10,
    zIndex:100,
    position:'relative'
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "JosefinSans-medium",
    fontWeight: "600",
  },
  FlatList: {
    // height: "40%",
    marginVertical: 10,
  },
  topCourseContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    marginTop: 5,
  },
  topCourseHeading: {
    fontSize: 22,
    fontFamily: "JosefinSans-semiBold",
  },
  topCourseSubheading: {
    fontSize: 15,
    fontWeight: "100",
    color: "#f57608",
    fontFamily: "JosefinSans-medium",
    textAlign:'center',
    textDecorationStyle:'solid',
    textDecorationColor:'#f57608',
    textDecorationLine:'underline',
    lineHeight:15
  },
  courseBox: {
    minHeight: 170,
    width: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: "#ebe8e6",
    borderRadius: 10,
  },
  courseImg: {
    width: "60%",
    height: undefined,
    aspectRatio: 1,
  },
  courseName: {
    fontSize: 15,
    fontFamily: "JosefinSans-regular",
    lineHeight: 17,
  },
});
