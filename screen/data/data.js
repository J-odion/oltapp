import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Data({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={styles.arrow}
          source={require("../../assets/arrow.png")}
        />
      </TouchableOpacity>
      <View style={styles.body}>
        <ImageBackground
          source={require("../../assets/bolt.png")}
          resizeMode="contain"
          style={styles.image}
        >
          <View>
            <View style={styles.topup}>
              <Text style={styles.fund}>Data Topup</Text>
            </View>

            {/* form */}
            <View style={styles.form}>
              <View>
                <Text>Select Network</Text>
                <View style={styles.input}>
                  <TextInput placeholder="Select Network" />
                </View>
              </View>

              <View>
                <Text>Mobile Number</Text>
                <View style={styles.input}>
                  <TextInput
                    placeholder="Enter Mobile Number"
                    keyboardType="numeric"
                  />
                </View>
              </View>

              <View>
                <Text>Select Data Plan</Text>
                <View style={styles.input}>
                  <TextInput placeholder="Select Data Plan" />
                </View>
              </View>
            </View>

            {/* button */}
            <View style={styles.end}>
              <TouchableOpacity
                onPress={() => navigation.navigate("DataReview")}
              >
                <Text style={styles.login}>Buy Data</Text>
              </TouchableOpacity>
            </View>
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
  },
  small: {
    fontSize: 10,
    textAlign: "center",
  },
  body: {
    flex: 1,
    height: 400,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  arrow: {
    width: 20,
    height: 20,
    margin: 10,
  },
  funding: {
    flex: 1,
  },
  topup: {
    backgroundColor: " rgba(238, 238, 238, 0.7)",
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  form: {
    flex: 0.9,
    backgroundColor: " rgba(238, 238, 238, 0.5)",
    borderRadius: 10,
    marginBottom: 60,
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  fund: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    padding: 10,
  },
  button: {
    paddingHorizontal: 20,
    backgroundColor: " rgba(238, 238, 238, 0.7)",
    flexDirection: "row",
    borderRadius: 10,
  },
  input: {
    borderRadius: 15,
    width: 300,
    height: 55,
    padding: 8,
    marginVertical: 5,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    paddingHorizontal: 13,
    paddingVertical: 10,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  login: {
    backgroundColor: "rgba(86, 85, 143, 0.3)",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    paddingHorizontal: 13,
    paddingVertical: 10,
    marginBottom: 0,
    borderRadius: 50,
    color: "white",
    textAlign: "center",
    fontSize: 16,
    width: 250,
    alignSelf: "center",
  },
  end: {
    alignContent: "flex-end",
    bottom: -10,
  },
});
export default Data;
