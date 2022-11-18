import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileRow}>
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={styles.userName}>Rohit Barate</Text>
          <Text style={styles.userEmail}>rohitbarate100@gmail.com</Text>
        </View>
        <Image
          source={require("../../assets/profile.png")}
          style={styles.profileImg}
        />
      </View>
      <View style={styles.dailog}>
        <Image
          source={require("../../assets/certificate.png")}
          style={styles.certificate}
        />
        <Text
          style={{
            fontSize: 22,
            paddingHorizontal: 10,
            marginVertical: 40,
            letterSpacing: 2,
            lineHeight: 35,
            textAlign: "center",
            fontFamily:'JosefinSans-medium'
          }}
        >
          That feeling of completion is just around the corner
        </Text>
        <Text
          style={{
            fontSize: 12,
            paddingHorizontal: 40,
            marginTop: 20,
            color: "#0009",
            textAlign: "center",
            fontFamily:'JosefinSans-regular'
          }}
        >
          Your completed courses and the certificates will be here
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Courses")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Start learning now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingBottom: 20,
    backgroundColor: "#ffffff",
  },
  profileRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontFamily: "JosefinSans-medium",
  },
  userEmail: {
    fontSize: 14,
    fontWeight: "100",
    letterSpacing: 1,
    color: "#0009",
    fontFamily: "JosefinSans-regular",
  },
  profileImg: {
    height: 50,
    width: 50,
  },
  dailog: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 40,
    justifyContent: "center",
  },
  certificate: {
    width: "40%",
    height: undefined,
    aspectRatio: 1,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#e76015",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontFamily:'JosefinSans-semiBold'
  },
});
