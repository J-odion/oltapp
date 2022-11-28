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

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View View className="flex-1 items-center justify-center ">
        {/* avatar */}
        <View style={styles.menuItem}>
          <Image
            style={styles.loginItem}
            source={require("../assets/avatar.png")}
          />
          <Text style={styles.text}> just Login</Text>
        </View>
        {/* forms */}

        <View style={styles.form}>
          <TouchableOpacity onPress={() => navigation.navigate("Receipt")}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.options}>
          <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
            <Text style={styles.forgetText}>Forget password?</Text>
          </TouchableOpacity>

          <View style={styles.link}>
            <Text style={styles.text}>Not enrolled?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.linkText}>Sign up now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* menus */}
      <View style={styles.menus}>
        <TouchableOpacity style={styles.menuItem}>
          <Image
            style={styles.menuImage}
            source={require("../assets/faqs.png")}
          />
          <Text style={styles.text}>Faqs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image
            style={styles.menuImage}
            source={require("../assets/contact-us.png")}
          />
          <Text style={styles.text}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image
            style={styles.menuImage}
            source={require("../assets/notification.png")}
          />
          <Text style={styles.text}> Notification</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7378EA",
    justifyContent: "center",
    alignItems: "center",
  },
  menus: {
    top: 0,
    flexDirection: "row",
  },
  text: {
    color: "white",
  },
  menuItem: {
    marginHorizontal: 30,
    alignItems: "center",
  },
  form: {
    flex: 0.7,
  },
  login: {
    backgroundColor: "orange",
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 50,
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  link: {
    flexDirection: "row",
    marginTop: 4,
  },
  linkText: {
    color: "white",
    paddingLeft: 5,
  },
  forgetText: {
    textDecorationLine: "underline",
    color: "#fff",
  },
  options: {
    left: -80,
  },
  menuImage: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  loginItem: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
});
export default HomeScreen;
