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

function CableTv({ navigation }) {
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
              <Text style={styles.fund}>Cable TVs</Text>
            </View>

            {/* form */}
            <View style={styles.form}>
              <View>
                <Text>Select Cable TV Marchant</Text>
                <View style={styles.input}>
                  <TextInput placeholder="Select Network" />
                </View>
              </View>
              <View>
                <Text>Smart Card Number</Text>
                <View style={styles.input}>
                  <TextInput placeholder="Smart Card Number" />
                </View>
                <Text>C.F Adamolekun</Text>
              </View>
              <View>
                <Text>Select Package</Text>
                <View style={styles.input}>
                  <TextInput placeholder="Select Package" />
                </View>
              </View>

              <View>
                <Text>Amount</Text>
                <View style={styles.input}>
                  <TextInput placeholder="Enter Amount" />
                </View>
              </View>
              <View>
                <Text>Phone Number</Text>
                <View style={styles.input}>
                  <TextInput placeholder="Enter Phone Number" />
                </View>
              </View>
            </View>

            {/* button */}
            <View style={styles.end}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CableReview")}
              >
                <Text style={styles.login}>Continue</Text>
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

  body: {
    flex: 1,
    height: 400,
    alignItems: "center",
    justifyContent: "center",
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
    flex: 1,
    backgroundColor: " rgba(238, 238, 238, 0.5)",
    borderRadius: 10,
    marginBottom: 60,
    paddingVertical: 20,
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
    height: 50,
    marginVertical: 5,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    paddingHorizontal: 13,
    marginBottom: 8,
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
    bottom: 20,
  },
});
export default CableTv;
