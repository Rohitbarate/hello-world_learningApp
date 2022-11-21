import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import courses from "../api/coursesApi";

const CourseDetail = ({ route, navigation }) => {
  const id = route.params.courseId;
  const selectCourse = courses.find((course) => {
    return course.id === id;
  });

  return (
    <View style={styles.container}>
      <Text
        style={{
          paddingBottom: 10,
          alignSelf: "center",
          fontSize: 20,
          letterSpacing: 4,
          fontFamily: "JosefinSans-semiBold",
        }}
      >
        Happy Coding 🥰🥰
      </Text>
      <View style={styles.mainBox}>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.courseName}>{selectCourse.courseName}</Text>
          <Text
            style={{
              color: "#000a",
              fontFamily: "JosefinSans-regular",
              fontSize: 14,
            }}
          >
            {" "}
            {selectCourse.description}{" "}
          </Text>
        </View>
        <View>
          <Text style={styles.heading}>Offered By :</Text>
          <Text
            style={[
              {
                color: "#fff",
                fontSize: 14,
                letterSpacing: 1,
                fontFamily: "JosefinSans-bold",
                paddingTop: 2,
              },
            ]}
          >
            {"  "}@{selectCourse.mentor}{" "}
          </Text>
        </View>
      </View>
      <ScrollView style={styles.detailView}>
        <View style={styles.prerView}>
          <View style={styles.row}>
            <Image
              source={require("../../assets/to-do-list.png")}
              style={styles.iconFlex}
            />
            <Text style={styles.heading}>Prerequisite :</Text>
          </View>
          <Text style={styles.subHeading}>{selectCourse.preReq}</Text>
        </View>
        <View style={styles.prerView}>
          <View style={styles.row}>
            <Image
              source={require("../../assets/earth.png")}
              style={styles.iconFlex}
            />
            <Text style={styles.heading}>100% online</Text>
          </View>
          <Text style={styles.subHeading}>
            start instantly and learn at your own time
          </Text>
        </View>
        <View style={styles.prerView}>
          <View style={styles.row}>
            <Image
              source={require("../../assets/calender.png")}
              style={styles.iconFlex}
            />
            <Text style={styles.heading}>Flexible deadlines</Text>
          </View>
          <Text style={styles.subHeading}>
            Reset deadline in accordance to your time
          </Text>
        </View>
        <View style={styles.prerView}>
          <View style={styles.row}>
            <Image
              source={require("../../assets/bar.png")}
              style={styles.iconFlex}
            />
            <Text style={styles.heading}>{selectCourse.level} Level</Text>
          </View>
        </View>
        <View style={styles.prerView}>
          <View style={styles.row}>
            <Image
              source={require("../../assets/clock.png")}
              style={styles.iconFlex}
            />
            <Text style={styles.heading}>
              Approx. {selectCourse.time} months to complete
            </Text>
          </View>
          <Text style={styles.subHeading}>
            Suggested {selectCourse.time * 8} hours/week
          </Text>
        </View>
        <View style={styles.prerView}>
          <View style={styles.row}>
            <Image
              source={require("../../assets/languages.png")}
              style={styles.iconFlex}
            />
            <Text style={styles.heading}>Languages :</Text>
          </View>
          <Text style={styles.subHeading}>
            English , Hindi , German , French
          </Text>
        </View>
        <View style={styles.prerView}>
          <View style={styles.row}>
            <Image
              source={require("../../assets/money.png")}
              style={styles.iconFlex}
            />
            <Text style={styles.heading}>Price :</Text>
          </View>
          <Text
            style={[
              styles.subHeading,
              {
                fontSize: 16,
                fontFamily: "JosefinSans-bold",
                color: "#e76015",
              },
            ]}
          >
            {selectCourse.price}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("CourseVideo", {
              course:selectCourse
            })
          }
          style={styles.button}
        >
          <Text style={{ fontFamily: "JosefinSans-semiBold", fontSize: 18 }}>
            Enroll Now
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CourseDetail;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    paddingTop: 40,
  },
  courseHname: {
    fontSize: 22,
    fontWeight: "500",
    alignSelf: "center",
    letterSpacing: 3,
    height: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  courseName: {
    fontSize: 22,
    fontWeight: "500",
    alignSelf: "center",
    marginBottom: 10,
    fontFamily: "JosefinSans-bold",
    lineHeight: 26,
  },
  mainBox: {
    width: "100%",
    // height: "28%",
    backgroundColor: "#ef793e",
    padding: 10,
    justifyContent: "space-between",
  },
  detailView: {
    paddingVertical: 10,
  },
  img: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    alignSelf: "center",
  },
  prerView: {
    paddingVertical: 10,
    paddingLeft: 10,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems:'center'
  },
  iconFlex: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  heading: {
    fontSize: 18,
    fontFamily: "JosefinSans-semiBold",
  },
  subHeading: {
    fontSize: 12,
    fontFamily: "JosefinSans-regular",
    color: "grey",
    paddingLeft: 38,
  },
  button: {
    backgroundColor: "#e76015",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 5,
    borderRadius: 8,
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});
