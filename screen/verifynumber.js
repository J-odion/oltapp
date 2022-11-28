import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function VerifyNumber({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.arrow} source={require("../assets/arrow.png")} />
      </TouchableOpacity>
      <View style={styles.body}>
        <View style={styles.options}>
          <Text style={styles.congrats}>Verify your phone number </Text>
          <View>
            <Text style={styles.texting}>You’re just few steps away</Text>
            <Text style={styles.texting}>
              Enter the 4-digit code sent to your phone
            </Text>
            <Text style={styles.texting}>number</Text>
          </View>

          {/* forms */}
          <View style={styles.form}>
            <View style={styles.oneBox}>
              <TextInput
                name="number"
                style={styles.input}
                keyboardType="default"
              />
              <Text style={styles.inputNext}> - </Text>
            </View>
            <View style={styles.oneBox}>
              <TextInput
                name="number"
                style={styles.input}
                keyboardType="default"
              />
              <Text style={styles.inputNext}> - </Text>
            </View>
            <View style={styles.oneBox}>
              <TextInput
                name="number"
                style={styles.input}
                keyboardType="default"
              />
              <Text style={styles.inputNext}> - </Text>
            </View>

            <TextInput
              name="number"
              style={styles.input}
              keyboardType="default"
            />
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <Text style={styles.login}>Continue</Text>
        </TouchableOpacity>

        <Text style={styles.downText}>Haven’t received code after 5 min?</Text>
        <View style={styles.bottomText}>
          <TouchableOpacity>
            <Text style={styles.options}>Resend code</Text>
          </TouchableOpacity>
          <Text style={styles.downText}> or </Text>
          <TouchableOpacity>
            <Text style={styles.options}>Change number</Text>
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
    alignItems: "center",
  },
  body: {
    flex: 1,
  },
  downText: {
    textAlign: "center",
    color: "#4C8DBB",
  },
  bottomText: {
    flexDirection: "row",
    paddingLeft: 25,
    textAlign: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  options: {
    color: "#F68A29",
    textAlign: "center",
  },
  arrow: {
    width: 25,
    height: 20,
    left: -160,
    marginTop: 30,
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
    fontWeight: "bold",
    marginTop: 40,
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

  link: {
    flexDirection: "row",
    marginTop: 4,
  },
  linkText: {
    color: "#7378EA",
    paddingLeft: 5,
  },
  form: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
    justifyItems: "center",
  },
  inputNext: {
    justifyContent: "center",
    alignSelf: "center",
    justifyItems: "center",
    top: 16,
    fontWeight: "bold",
    fontSize: 12,
  },
  oneBox: {
    flexDirection: "row",
    justifyItems: "center",
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    width: 40,
    height: 40,
    padding: 8,
    marginVertical: 5,
    backgroundColor: "white",
    paddingHorizontal: 13,
    paddingVertical: 10,
    marginBottom: 20,
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
export default VerifyNumber;
