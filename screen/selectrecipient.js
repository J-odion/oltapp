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

function SelectRecipient({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.arrow} source={require("../assets/arrow.png")} />
        </TouchableOpacity>
        <Text> Select a Recipient </Text>
      </View>
      <View style={styles.body}>
        <ImageBackground
          source={require("../assets/bolt.png")}
          resizeMode="contain"
          style={styles.image}
        >
          <View>
            {/* form */}
            <View>
              <View>
                <View style={styles.input}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("SelectRecipient")}
                  >
                    <Image
                      source={require("../assets/phonebook.png")}
                      style={styles.arrow}
                    />
                  </TouchableOpacity>
                  <TextInput placeholder="Search Contacts" />
                </View>
              </View>
            </View>

            {/* list */}
            <View style={styles.contacts}>
              <View>
                <Text style={styles.initials}>A</Text>
              </View>
              <View style={styles.others}>
                <View>
                  <Text style={styles.name}>Adam</Text>
                  <Text>+234810000000</Text>
                </View>
                <Image source={require("../assets/rightdirection.png")} />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  contacts: {
    flexDirection: "row",
  },
  initials: {
    fontSize: 40,
    paddingHorizontal: 12,
    textAlign: "center",
    alignContent: "center",
    marginRight: 20,
    backgroundColor: "purple",
    color: "#fff",
    borderRadius: 60,
    fontWeight: "bold",
  },
  others: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    minWidth: 200,
    // padding: 10,
  },
  name: {},
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
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
    borderWidth: 1,
    minWidth: 380,
    height: 55,
    padding: 8,
    marginVertical: 5,
    paddingHorizontal: 13,
    paddingVertical: 10,
    marginBottom: 20,
    flexDirection: "row",
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
export default SelectRecipient;
