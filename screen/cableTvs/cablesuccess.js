import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function CableSuccess({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View View className="flex-1 items-center justify-center ">
        {/* avatar */}
        <View style={styles.menuItem}>
          <Image
            style={styles.loginItem}
            source={require("../assets/congratulation.png")}
          />
        </View>
        {/* forms */}

        <View style={styles.form}></View>
        <View style={styles.options}>
          <Text style={styles.congrats}> Congratulations</Text>
          <Text style={styles.text}>Electricity Purchase Successful</Text>

          <View>
            <Text style={styles.texting}>Please wait while we create your</Text>
            <Text style={styles.texting}>
              account, this will take a few seconds.
            </Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
  menus: {
    top: 0,
    flexDirection: "row",
  },
  text: {
    color: "#365083",
    textAlign: "center",
    fontSize: 22,
    paddingVertical: 7,
  },
  congrats: {
    color: "#120F9F",
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "#fff",
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
});
export default CableSuccess;
