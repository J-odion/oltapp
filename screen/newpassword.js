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
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function ChangePassword({ navigation }) {
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
        <Text style={styles.headText}>Change Password</Text>
      </View>

      <View style={styles.body}>
        <View>
          <View style={styles.textgroup}>
            <Text style={styles.texttop}>Current Password</Text>
          </View>
          {/* forms */}
          <View style={styles.form}>
            <View style={styles.oneBox}>
              <TextInput
                placeholder="Current Password"
                style={styles.input}
                keyboardType="default"
              />
            </View>
          </View>
        </View>
        <View>
          <View style={styles.textgroup}>
            <Text style={styles.texttop}>New Password</Text>
          </View>
          {/* forms */}
          <View style={styles.form}>
            <View style={styles.oneBox}>
              <TextInput
                placeholder="New Password"
                style={styles.input}
                keyboardType="default"
              />
            </View>
          </View>
        </View>
        <View>
          <View style={styles.textgroup}>
            <Text style={styles.texttop}>Confirm New Password</Text>
          </View>
          {/* forms */}
          <View style={styles.form}>
            <View style={styles.oneBox}>
              <TextInput
                placeholder="Confirm New Password"
                style={styles.input}
                keyboardType="default"
              />
            </View>
          </View>
        </View>

        <View style={styles.textgroup}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ChangedPass")}
            style={styles.group}
          >
            <Text style={styles.textLink}>Update</Text>
          </TouchableOpacity>
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
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.15)",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,

    flexDirection: "row",
  },
  contain: {
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  dash: {
    fontSize: 20,
    top: 10,
    fontWeight: "700",
    paddingLeft: 5,
  },
  resend: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrow: {
    width: 25,
    height: 20,
    left: -90,
  },
  oneBox: {
    flexDirection: "row",
    justifyItems: "center",
    marginRight: 6,
  },
  form: {
    flexDirection: "row",
    justifyContent: "center",
    justifyItems: "center",
  },
  input: {
    borderRadius: 10,
    minWidth: 350,
    padding: 8,
    marginVertical: 5,
    backgroundColor: "#eeeeee",
    paddingHorizontal: 13,
    paddingVertical: 12,
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
    alignItems: "flex-start",
    padding: 30,
  },
  image: {},
  texttop: {
    color: "#666666",
    fontWeight: "500",
    fontSize: 16,
    // paddingVertical: 30,
  },
  group: {
    flexDirection: "row",
    backgroundColor: "rgba(86, 85, 143, 1)",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 30,
    alignItems: "center",
    top: 20,
  },
  textgroup: {
    paddingVertical: 2,
  },
  text: {
    color: "rgba(137, 240, 159, 1)",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    paddingVertical: 5,
  },
  textLink: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    paddingHorizontal: 20,
    letterSpacing: 1,
  },
});
export default ChangePassword;
