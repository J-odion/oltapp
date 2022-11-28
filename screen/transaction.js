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

function Transaction({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.arrow}>Transaction History</Text>
      </View>

      <View style={styles.body}></View>
      {/* bottom tab */}
      <View className="flex-row justify-between px-8 py-4 bg-[#5256B5]">
        <TouchableOpacity
          onPress={() => navigation.navigate("Dashboard")}
          className="items-center"
        >
          <Image
            className="w-6 h-6 mb-3"
            source={require("../assets/homeIcon.png")}
          />
          <Text className="text-[#fff]">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Service")}
          className="items-center"
        >
          <Image
            className="w-6 h-6 mb-3"
            resizeMode="contain"
            source={require("../assets/service.png")}
          />
          <Text className="text-[#fff]">Service</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Transaction")}
          className="items-center"
        >
          <Image
            className="w-6 h-6 mb-3"
            source={require("../assets/transactionIcon.png")}
          />
          <Text className="text-[#fff]">Transaction</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Settings")}
          className="items-center"
        >
          <Image
            className="w-6 h-6 mb-3"
            source={require("../assets/settingsIcon.png")}
          />
          <Text className="text-[#fff]">Settings</Text>
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
  },
  arrow: {
    fontSize: 18,
    letterSpacing: 1.3,
    paddingBottom: 10,
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
export default Transaction;
