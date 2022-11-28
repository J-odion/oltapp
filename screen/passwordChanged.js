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

function PasswordChanged({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.options}>
          <Text style={styles.congrats}> Congratulations</Text>
          <View>
            <Text style={styles.texting}>Your Password has been</Text>
            <Text style={styles.texting}>successfully changed</Text>
          </View>
          <View style={styles.menuItem}>
            <Image
              style={styles.loginItem}
              source={require("../assets/congratulation.png")}
            />
          </View>

          {/* forms */}
          <View style={styles.form}></View>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Confirm")}>
        <Text style={styles.login}>Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  arrow: {
    width: 25,
    height: 20,
    left: -150,
    marginTop: 30,
    marginBottom: 100,
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
    fontSize: 18,
    backgroundColor: "#fff",
    fontWeight: "bold",
    marginTop: 130,
  },
  texting: {
    color: "#7378EA",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    // lineHeight:0,
    letterSpacing: 1,
    color: "#365083",
  },
  menuItem: {
    marginHorizontal: 30,
    alignItems: "center",
    flex: 0.4,
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
  login: {
    backgroundColor: "rgba(86, 85, 143, 1)",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#120F9F",
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 50,
    color: "white",
    textAlign: "center",
    fontSize: 16,
    width: 250,
  },
  menuImage: {
    width: 100,
    marginBottom: 10,
  },
  loginItem: {
    width: 180,
    height: 200,
    marginVertical: 40,
  },
});
export default PasswordChanged;
