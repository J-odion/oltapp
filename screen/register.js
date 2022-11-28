import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Register({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.arrow} source={require("../assets/arrow.png")} />
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.options}>
            <Text style={styles.congrats}>Create Account</Text>
            <View>
              <Text style={styles.texting}>We're glad you're here</Text>
              <Text style={styles.texting}>This info needs to be accurate</Text>
            </View>

            {/* forms */}
            <View style={styles.form}>
              <View>
                <View style={styles.formBody}>
                  <ImageBackground
                    source={require("../assets/bolt.png")}
                    resizeMode="contain"
                    style={styles.image}
                  >
                    <View>
                      <Text>First name</Text>
                      <TextInput style={styles.input} />
                    </View>
                    <View>
                      <Text>Middle name (Optional)</Text>
                      <TextInput style={styles.input} />
                    </View>
                    <View>
                      <Text>Last name</Text>
                      <TextInput style={styles.input} />
                    </View>
                    <View>
                      <Text>Phone number</Text>
                      <TextInput style={styles.input} keyboardType="numeric" />
                    </View>
                    <View>
                      <Text>Email</Text>
                      <TextInput
                        style={styles.input}
                        keyboardType="email-address"
                      />
                    </View>
                    <View>
                      <Text>Password</Text>
                      <TextInput
                        secureTextEntry
                        keyboardType="password"
                        style={styles.input}
                      />
                    </View>
                    <View>
                      <Text>Confirm Password</Text>
                      <TextInput
                        secureTextEntry
                        style={styles.input}
                        keyboardType="password"
                      />
                    </View>
                  </ImageBackground>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.last}>
            <Text style={styles.downText}>
              By proceeding to create your account, you agree to Boltrecharge
            </Text>
            <View style={styles.bottomText}>
              <TouchableOpacity>
                <Text style={styles.options}>Terms and condition</Text>
              </TouchableOpacity>
              <Text style={styles.downText}> and </Text>
              <TouchableOpacity>
                <Text style={styles.options}>Privacy Statement</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate("Verify")}>
                <Text style={styles.login}>Continue</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomText}>
              <Text style={styles.downText}> Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.options}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
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
    top: 15,
  },
  last: {
    alignSelf: "center",
    marginVertical: 20,
    alignItems: "center",
  },
  downText: {
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.44)",
    fontSize: 10,
    fontWeight: "700",
  },
  bottomText: {
    flexDirection: "row",
    marginBottom: 20,
  },
  formBody: {
    flex: 1,
    backgroundColor: "rgba(196, 196, 196, 0.16)",
    padding: 40,
    borderRadius: 10,
    marginTop: 30,
  },
  options: {
    color: "rgba(76, 141, 187, 1)",
    textAlign: "center",
    fontSize: 10,
    fontWeight: "700",
  },
  arrow: {
    width: 25,
    height: 20,
    left: -160,
    marginTop: 10,
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
    fontSize: 16,
    backgroundColor: "#fff",
    fontWeight: "bold",
    marginBottom: 8,
  },
  texting: {
    color: "#7378EA",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20,
    color: "#365083",
    lineHeight: 30,
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
  form: {
    flex: 1,
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
});
export default Register;
