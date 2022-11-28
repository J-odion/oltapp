import { BottomTabBar } from "@react-navigation/bottom-tabs";
import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function TransactionOTP({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.contain}
          onPress={() => navigation.goBack()}
        >
          <Image style={styles.arrow} source={require("../assets/arrow.png")} />
        </TouchableOpacity>
        <Text style={styles.headText}>Transaction Pin</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.textgroup}>
          <Text style={styles.texttop}>
            We've sent an OTP to your phone number
          </Text>
        </View>
        {/* forms */}
        <View style={styles.form}>
          <View style={styles.oneBox}>
            <TextInput
              name="number"
              style={styles.input}
              keyboardType="default"
            />
          </View>
          <View style={styles.oneBox}>
            <TextInput
              name="number"
              style={styles.input}
              keyboardType="default"
            />
          </View>
          <View style={styles.oneBox}>
            <TextInput
              name="number"
              style={styles.input}
              keyboardType="default"
            />
          </View>
          <View style={styles.oneBox}>
            <TextInput
              name="number"
              style={styles.input}
              keyboardType="default"
            />
          </View>
          <View style={styles.oneBox}>
            <TextInput
              name="number"
              style={styles.input}
              keyboardType="default"
            />
          </View>

          <TextInput
            name="number"
            style={styles.input}
            keyboardType="default"
          />
        </View>
        <View style={styles.resend}>
          <Text style={styles.texttop}>Didn't get the OTP? </Text>
          <TouchableOpacity>
            <Text style={styles.text}>Resend Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textgroup}>
          <TouchableOpacity
            onPress={() => navigation.navigate("NewTransactionPin")}
            style={styles.group}
          >
            <Text style={styles.textLink}>Next</Text>
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
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.15)",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,

    flexDirection: "row",
  },
  contain: {
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  resend: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrow: {
    width: 25,
    height: 20,
    left: -100,
  },
  oneBox: {
    flexDirection: "row",
    justifyItems: "center",
    marginRight: 6,
  },
  form: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
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
  headText: {
    fontSize: 18,
    letterSpacing: 1.3,
    color: "#666666",
    marginBottom: 10,
  },
  body: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    padding: 30,
  },
  image: {},
  texttop: {
    color: "#666666",
    fontWeight: "500",
    fontSize: 16,
    paddingVertical: 30,
  },
  group: {
    flexDirection: "row",
    backgroundColor: "rgba(86, 85, 143, 1)",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 30,
    alignItems: "center",
  },
  textgroup: {
    paddingVertical: 20,
  },
  text: {
    color: "rgba(137, 240, 159, 1)",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    paddingVertical: 5,
  },
  textLink: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    paddingHorizontal: 20,
    letterSpacing: 1,
  },
});
export default TransactionOTP;
