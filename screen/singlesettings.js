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

function Setting({ navigation }) {
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
        <Text style={styles.headText}>Settings</Text>
      </View>

      <View style={styles.body}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ChangePassword")}
          style={styles.item}
        >
          <Image
            style={styles.icon}
            source={require("../assets/changepassword.png")}
          />
          <View style={styles.single}>
            <Text style={styles.itemText}>Change Password</Text>
            <Image source={require("../assets/rightdirection.png")} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("TransactionOTP")}
          style={styles.item}
        >
          <Image
            style={styles.icon}
            source={require("../assets/transactionpin.png")}
          />
          <View style={styles.single}>
            <Text style={styles.itemText}>Transaction Pin</Text>
            <Image source={require("../assets/rightdirection.png")} />
          </View>
        </TouchableOpacity>
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
    left: -130,
  },
  headText: {
    fontSize: 18,
    letterSpacing: 1.3,
    color: "#666666",
    marginBottom: 10,
  },
  body: {
    flex: 1,
    padding: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
    padding: 10,
    paddingVertical: 20,
    marginBottom: 12,
  },
  icon: {
    marginHorizontal: 10,
  },
  single: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
    padding: 1,
    width: 320,
  },
  itemText: {
    fontSize: 16,
    letterSpacing: 1,
  },
});
export default Setting;
