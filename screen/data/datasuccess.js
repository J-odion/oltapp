import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function DataSuccess({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={require("../../assets/bolt.png")}
      >
        <View>
          {/* avatar */}
          <View style={styles.menuItem}>
            <Image
              style={styles.loginItem}
              source={require("../../assets/congratulation.png")}
            />
          </View>
          {/* forms */}

          <View style={styles.form}></View>
          <View style={styles.options}>
            <Text style={styles.congrats}> Congratulations</Text>
            <Text style={styles.text}>Data Purchase Successful</Text>

            <View>
              <Text style={styles.texting}>
                You have successfully purchased your MTN
              </Text>
              <Text style={styles.texting}>data</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Data")}>
              <Text style={styles.login}>Done</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("DataReciept")}
            >
              <Text style={styles.text}>View Reciept</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  menus: {
    top: 0,
    flexDirection: "row",
  },
  text: {
    color: "#47A75C",
    textAlign: "center",
    fontSize: 17,
    paddingVertical: 10,
  },
  congrats: {
    color: "#120F9F",
    textAlign: "center",
    fontSize: 20,
  },
  texting: {
    color: "#7378EA",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 30,
    color: "#365083",
  },
  menuItem: {
    marginHorizontal: 30,
    alignItems: "center",
  },
  form: {
    flex: 0.2,
  },

  link: {
    flexDirection: "row",
    marginTop: 4,
  },
  linkText: {
    color: "#7378EA",
    paddingLeft: 5,
  },
  options: {
    // left: -80,
    textAlign: "center",
  },
  menuImage: {
    width: 100,
    marginBottom: 10,
  },
  loginItem: {
    width: 180,
    height: 195,
    marginBottom: 40,
  },
  login: {
    backgroundColor: "rgba(86, 85, 143, 1)",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 50,
    color: "white",
    textAlign: "center",
    fontSize: 16,
    width: 250,
    marginTop: 80,
  },
});
export default DataSuccess;
