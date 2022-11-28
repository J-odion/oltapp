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

function PinSuc({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* avatar */}
        <View>
          <Image
            resizeMode="contain"
            style={styles.loginItem}
            source={require("../assets/congratulation.png")}
          />
        </View>
        {/* forms */}
      </View>
      <View style={styles.options}>
        <Text style={styles.congrats}> Congratulations</Text>
        <View>
          <Text style={styles.texting}>Transaction PIN</Text>
          <Text style={styles.texting}>Successfully Changed</Text>
        </View>
      </View>
      <View style={styles.textgroup}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Setting")}
          style={styles.group}
        >
          <Text style={styles.textLink}>Okay</Text>
        </TouchableOpacity>
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
  loginItem: {
    width: 200,
    height: 200,
  },
  menus: {
    top: 0,
    flexDirection: "row",
  },
  text: {
    color: "rgba(78, 255, 117, 1)",
    textAlign: "center",
    fontSize: 22,
  },
  congrats: {
    color: "rgba(78, 255, 117, 1)",
    textAlign: "center",
    fontSize: 20,
    paddingVertical: 30,
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

  link: {
    flexDirection: "row",
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
  textLink: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    paddingHorizontal: 20,
    letterSpacing: 1,
  },
  group: {
    flexDirection: "row",
    backgroundColor: "rgba(86, 85, 143, 1)",
    paddingHorizontal: 80,
    paddingVertical: 8,
    borderRadius: 30,
    alignItems: "center",
    top: 100,
  },
  textgroup: {
    paddingVertical: 2,
  },
});
export default PinSuc;
