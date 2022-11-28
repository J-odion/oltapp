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

function EmailUs({ navigation }) {
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
        <Text style={styles.headText}>Email</Text>
      </View>

      <View style={styles.body}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../assets/emailus.png")}
        />
        <View style={styles.textgroup}>
          <Text style={styles.texttop}>Hi, let’s help you today.</Text>
          <Text style={styles.text}>Send us an email and our experts</Text>
          <Text style={styles.text}>would reach out as soon as</Text>
          <Text style={styles.text}>possible</Text>
        </View>
        <View style={styles.textgroup}>
          <TouchableOpacity>
            <Text style={styles.textLink}>click here to send</Text>
            <Text style={styles.textLink}>us an email</Text>
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
  arrow: {
    width: 25,
    height: 20,
    left: -140,
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
    color: "#120F9F",
    fontWeight: "500",
    fontSize: 20,
    paddingVertical: 30,
  },
  textgroup: {
    paddingVertical: 20,
  },
  text: {
    color: "#365083",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    paddingVertical: 5,
  },
  textLink: {
    color: "#365083",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    paddingVertical: 5,
    textDecorationLine: "underline",
  },
});
export default EmailUs;
