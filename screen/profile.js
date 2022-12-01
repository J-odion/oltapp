import { BottomTabBar } from "@react-navigation/bottom-tabs";
import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Profile({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.contain}
          onPress={() => navigation.goBack()}
        >
          <Image style={styles.arrow} source={require("../assets/arrow.png")} />
        </TouchableOpacity>
        <Text style={styles.headText}>Profile</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.profileImage}>
          <ImageBackground
            resizeMode="contain"
            source={require("../assets/circleBgAvatar.png")}
          >
            <View>
              <Image
                resizeMode="contain"
                style={styles.avaImage}
                source={require("../assets/avatarProfile.png")}
              />
            </View>
            <TouchableOpacity style={styles.camera}>
              <Image source={require("../assets/camera.png")} />
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <Text style={styles.headTextsProfile}>King Sammy</Text>
        <Text style={styles.headText}>Edit Bio Data</Text>

        {/* data */}
        <View>
          <View style={styles.item}>
            <Text>First Name</Text>
            <View style={styles.input}>
              <TextInput value="King" />
            </View>
          </View>

          <View style={styles.item}>
            <Text>Last Name</Text>
            <View style={styles.input}>
              <TextInput value="Lammy" />
            </View>
          </View>

          <View style={styles.item}>
            <Text>Email Address</Text>
            <View style={styles.input}>
              <TextInput
                value="Kinglammy@ymail.com"
                keyboardType="email-address"
              />
            </View>
          </View>

          <View style={styles.item}>
            <Text>Phone Number</Text>
            <View style={styles.input}>
              <TextInput value="08142114146" keyboardType="numeric" />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileImage: {
    alignContent: "center",
    alignItems: "center",
  },
  avaImage: {
    height: 80,
    width: 80,
    margin: 20,
  },
  camera: {
    position: "absolute",
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
    left: 98,
    top: 80,
  },
  input: {
    padding: 10,
    backgroundColor: "rgba(238, 238, 238, 1)",
    marginVertical: 5,
    borderRadius: 10,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.15)",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    paddingTop: 10,
    flexDirection: "row",
    marginBottom: 10,
  },
  contain: {
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    left: 10,
  },
  arrow: {
    width: 25,
    height: 20,
    left: -160,
  },
  headTextsProfile: {
    fontSize: 20,
    letterSpacing: 0.6,
    textAlign: "center",
    color: "#666666",
    fontWeight: "700",
    marginBottom: 20,
  },
  headText: {
    fontSize: 18,
    letterSpacing: 1.3,
    color: "#666666",
    marginBottom: 10,
  },
  body: {
    flex: 1,
    padding: 10,
  },
  item: {
    borderRadius: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  single: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minWidth: 180,
    marginLeft: 10,
  },
  itemText: {
    fontSize: 16,
    letterSpacing: 1,
  },
});
export default Profile;
