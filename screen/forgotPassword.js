import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function ForgotPassword({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/bolt.png")}
          resizeMode="contain"
          style={styles.image}
        >
          <View style={styles.body}>
            <View style={styles.options}>
              <Text style={styles.congrats}>Forgot Your Password?</Text>
              <View>
                <Text style={styles.texting}>
                  Enter your Phone number below and we will
                </Text>
                <Text style={styles.texting}>
                  send you a code to reset your password
                </Text>
              </View>

              {/* forms */}
              <View style={styles.form}>
                <TextInput
                  name="number"
                  style={styles.input}
                  keyboardType="default"
                />
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("EnterPin")}>
              <Text style={styles.login}>Send Reset Link</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.downText}>Create an Account</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomText}>
            <Text style={styles.downText}> Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.options}>Login</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    marginTop: 40,
  },
  input: {
    borderWidth: 1,
    borderRadius: 15,
    width: 250,
    height: 45,
    padding: 8,
    marginVertical: 30,
    backgroundColor: "white",
    paddingHorizontal: 13,
    paddingVertical: 0,
  },
  body: {
    flex: 1,
  },
  downText: {
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.44)",
  },
  bottomText: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 20,
  },
  options: {
    color: "rgba(76, 141, 187, 1)",
    textAlign: "center",
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
    fontWeight: "bold",
    marginBottom: 10,
  },
  texting: {
    color: "#7378EA",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20,
    color: "#365083",
    lineHeight: 30,
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

  login: {
    backgroundColor: "rgba(86, 85, 143, 0.3)",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#120F9F",
    paddingHorizontal: 13,
    paddingVertical: 10,
    marginBottom: 10,
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
    width: 130,
    height: 90,
    marginBottom: 40,
  },
});
export default ForgotPassword;
