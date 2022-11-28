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

function NewPassword({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ImageBackground
          source={require("../assets/bolt.png")}
          resizeMode="contain"
          style={styles.image}
        >
          <View>
            <Text style={styles.congrats}>Create a new Password</Text>
          </View>
          <View style={styles.body}>
            <View>
              <Text>Enter new Password</Text>
              <TextInput style={styles.input} />
            </View>
            <View>
              <Text>Confirm Password</Text>
              <TextInput style={styles.input} />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("PasswordChanged")}
            >
              <Text style={styles.login}>Continue</Text>
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
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60,
  },
  input: {
    borderRadius: 15,
    width: 250,
    height: 45,
    padding: 8,
    marginVertical: 5,
    backgroundColor: "white",
    paddingHorizontal: 13,
    paddingVertical: 10,
    marginBottom: 20,
  },
  body: {
    flex: 0.83,
    backgroundColor: "rgba(196, 196, 196, 0.16)",
    padding: 40,
    borderRadius: 10,
    marginTop: 30,
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
    marginVertical: 20,
  },
  texting: {
    color: "#120F9F",
    textAlign: "center",
    fontSize: 18,
    lineHeight: 20,
    lineHeight: 30,
  },
  menuItem: {
    marginHorizontal: 30,
    alignItems: "center",
    flex: 0.4,
  },
  form: {
    flex: 0.2,
    backgroundColor: "rgba(196, 196, 196, 0.16)",
    minWidth: 250,
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
    marginVertical: 35,
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
export default NewPassword;
